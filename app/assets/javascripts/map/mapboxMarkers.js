function MapboxMarker (lng, lat, title, desc){
  var map = mapApp.map;
  var geoData = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [parseFloat(lng), parseFloat(lat)]
    },
    "properties": {
      "title": title,
      "description": desc,
      "marker-color": "#fc4353",
      "marker-size": "large",
      "marker-symbol": "harbor"
    }
  };
  L.mapbox.featureLayer(geoData).addTo(mapApp.map);
}
