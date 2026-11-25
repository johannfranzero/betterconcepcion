# Tools (not part of the site)

## render-hero.html

Renders the hero images (`assets/images/banners/sibale-hero-*.webp`): the real island of Sibale from
AWS Terrain Tiles (elevation) draped with Sentinel-2 cloudless 2016 imagery by EOX (Copernicus data,
CC BY 4.0), with the sea painted from OpenFreeMap water polygons. The site credits both in the home hero.

1. Serve the repo on http://localhost:8000.
2. Open `tools/render-hero.html` in a browser window sized to the output (1920x900 wide, 900x1400 tall),
   with the camera in the query string, for example
   `?lng=121.699&lat=12.886&zoom=13.95&pitch=74&bearing=-11&ex=1.7` (wide) or
   `?lng=121.706&lat=12.952&zoom=13.25&pitch=72&bearing=-11&ex=1.7` (tall).
3. When the tab title reads `ready`, save `map.getCanvas().toDataURL('image/png')` and convert it to WebP.
   Keep the tab in the foreground: background tabs stall the render.

Replace these with real photographs once the LGU or a photographer grants permission.
