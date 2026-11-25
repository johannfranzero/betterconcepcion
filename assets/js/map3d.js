/**
 * 3D terrain map of Sibale (Concepcion, Romblon).
 *
 * - MapLibre GL is loaded only when the map scrolls into view (keeps first load light).
 * - Basemap: OpenFreeMap (OpenStreetMap data). Terrain: AWS Terrain Tiles (terrarium).
 * - Pins: the 9 barangays, coordinates from PhilAtlas.
 * - Falls back to the static OpenStreetMap embed already in the container when WebGL
 *   or the network is unavailable.
 *
 * Markup: <div class="map3d" data-map3d data-link-base="barangays/"> ...fallback... </div>
 */
(function () {
  'use strict';

  var MAPLIBRE_JS = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';
  var MAPLIBRE_CSS = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';
  var STYLE_URL = 'https://tiles.openfreemap.org/styles/liberty';
  var TERRAIN_TILES = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png';

  var BARANGAYS = [
    { name: 'Bachawan', slug: 'bachawan', lat: 12.9428, lon: 121.6917, pop: 358 },
    { name: 'Calabasahan', slug: 'calabasahan', lat: 12.9183, lon: 121.6939, pop: 568 },
    { name: 'Dalajican', slug: 'dalajican', lat: 12.9319, lon: 121.7249, pop: 295 },
    { name: 'Masadya', slug: 'masadya', lat: 12.9442, lon: 121.7203, pop: 182 },
    { name: 'Masudsud', slug: 'masudsud', lat: 12.9428, lon: 121.7124, pop: 268 },
    { name: 'Poblacion', slug: 'poblacion', lat: 12.9139, lon: 121.7201, pop: 866, main: true },
    { name: 'Sampong', slug: 'sampong', lat: 12.9364, lon: 121.685, pop: 333 },
    { name: 'San Pedro', slug: 'san-pedro', lat: 12.9127, lon: 121.7071, pop: 434 },
    { name: 'San Vicente', slug: 'san-vicente', lat: 12.9182, lon: 121.7231, pop: 257 },
  ];

  var reduceMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function webglOk() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  var loading = null;
  function loadMapLibre() {
    if (window.maplibregl) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = MAPLIBRE_CSS;
      document.head.appendChild(css);
      var s = document.createElement('script');
      s.src = MAPLIBRE_JS;
      s.async = true;
      s.onload = function () {
        resolve();
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return loading;
  }

  function isFil() {
    try {
      return localStorage.getItem('selectedLang') === 'fil';
    } catch (e) {
      return false;
    }
  }

  function build(el) {
    var fallback = el.innerHTML;
    var base = el.getAttribute('data-link-base') || 'barangays/';
    var stage = document.createElement('div');
    stage.className = 'map3d-stage';
    el.innerHTML = '';
    el.appendChild(stage);
    el.setAttribute('data-map-loaded', 'maplibre');

    var map;
    try {
      map = new window.maplibregl.Map({
        container: stage,
        style: STYLE_URL,
        center: [121.705, 12.926],
        zoom: 12.55,
        pitch: 58,
        bearing: -28,
        maxPitch: 75,
        cooperativeGestures: true,
        attributionControl: false,
      });
    } catch (e) {
      el.innerHTML = fallback;
      el.setAttribute('data-map-loaded', 'iframe');
      return;
    }

    el._map = map;
    map.addControl(new window.maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');
    map.addControl(
      new window.maplibregl.AttributionControl({
        compact: true,
        customAttribution:
          'Terrain: <a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noopener">AWS Terrain Tiles</a> · Pins: PhilAtlas',
      })
    );

    var failed = false;
    map.on('error', function (ev) {
      // A broken basemap leaves an empty canvas: show the static map instead.
      if (!failed && ev && ev.error && /style|Failed to fetch/i.test(String(ev.error.message || ''))) {
        if (!map.isStyleLoaded()) {
          failed = true;
          map.remove();
          el.innerHTML = fallback;
          el.setAttribute('data-map-loaded', 'iframe');
        }
      }
    });

    map.on('load', function () {
      map.addSource('dem', {
        type: 'raster-dem',
        tiles: [TERRAIN_TILES],
        encoding: 'terrarium',
        tileSize: 256,
        maxzoom: 11, // finer levels show spike artifacts over the sea
      });
      map.setTerrain({ source: 'dem', exaggeration: 1.9 });
      map.addLayer(
        {
          id: 'sibale-hillshade',
          type: 'hillshade',
          source: 'dem',
          paint: {
            'hillshade-shadow-color': 'rgba(15, 35, 66, 0.55)',
            'hillshade-highlight-color': 'rgba(255, 246, 214, 0.6)',
            'hillshade-accent-color': 'rgba(0, 34, 110, 0.35)',
            'hillshade-exaggeration': 0.35,
          },
        },
        firstSymbolLayer(map)
      );
      try {
        map.setSky({
          'sky-color': '#9fd0ff',
          'horizon-color': '#fde9a8',
          'fog-color': '#e8f3ff',
          'sky-horizon-blend': 0.6,
          'horizon-fog-blend': 0.6,
          'fog-ground-blend': 0.85,
        });
      } catch (e) {
        /* sky needs MapLibre 4+; ignore otherwise */
      }

      // Green island instead of the basemap's near-white land.
      (map.getStyle().layers || []).forEach(function (l) {
        if (l.type === 'background') map.setPaintProperty(l.id, 'background-color', '#dfe9cf');
      });

      // The pins carry the barangay names, so hide the basemap's own village labels.
      (map.getStyle().layers || []).forEach(function (l) {
        if (/^label_(village|town|other|city)/.test(l.id)) map.setLayoutProperty(l.id, 'visibility', 'none');
      });

      var fil = isFil();
      BARANGAYS.forEach(function (b) {
        var pin = document.createElement('button');
        pin.type = 'button';
        pin.className = 'map3d-pin' + (b.main ? ' map3d-pin--main' : '');
        pin.setAttribute('aria-label', b.name);
        pin.innerHTML = '<span class="map3d-pin-dot"></span><span class="map3d-pin-label">' + b.name + '</span>';
        var popup = new window.maplibregl.Popup({ offset: 18, closeButton: false }).setHTML(
          '<strong>' +
            b.name +
            '</strong><br>' +
            b.pop.toLocaleString() +
            (fil ? ' residente (2020)' : ' residents (2020)') +
            '<br><a href="' +
            (base === '#' ? '' : base) +
            '#' +
            b.slug +
            '">' +
            (fil ? 'Tingnan ang barangay' : 'About this barangay') +
            ' →</a>'
        );
        new window.maplibregl.Marker({ element: pin, anchor: 'bottom' })
          .setLngLat([b.lon, b.lat])
          .setPopup(popup)
          .addTo(map);
      });

      // One slow turn to show the island's shape, then stop. Any touch stops it.
      if (!reduceMotion) {
        var spinning = true;
        var stop = function () {
          spinning = false;
        };
        ['mousedown', 'touchstart', 'wheel', 'keydown'].forEach(function (t) {
          stage.addEventListener(t, stop, { passive: true, once: true });
        });
        var start = performance.now();
        var b0 = map.getBearing();
        var step = function (now) {
          if (!spinning) return;
          var t = (now - start) / 1000;
          if (t > 24) return;
          map.setBearing(b0 + t * 2.5);
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
  }

  function firstSymbolLayer(map) {
    var layers = map.getStyle().layers || [];
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') return layers[i].id;
    }
    return undefined;
  }

  function init() {
    var els = document.querySelectorAll('[data-map3d]');
    if (!els.length || !webglOk()) return;
    var go = function (el) {
      loadMapLibre().then(
        function () {
          build(el);
        },
        function () {
          /* network failed: keep the static map that is already there */
        }
      );
    };
    if (!('IntersectionObserver' in window)) {
      els.forEach(go);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            io.unobserve(en.target);
            go(en.target);
          }
        });
      },
      { rootMargin: '300px' }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
