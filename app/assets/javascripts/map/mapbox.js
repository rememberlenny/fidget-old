var click = document.getElementById('click'),
    mousemove = document.getElementById('mousemove');

var mapApp = {};

mapApp = {
    initialize: function(){
      this.loadMap();
      this.mouseActions();
      this.insertMarker(-74.00663, 40.714623, 'Title', 'Desc');
    },
    loadMap: function(){
        var map = L.mapbox
                   .map('map', 'lkbgift.i30dhib8',  { zoomControl: false })
                   .setView([40.714623, -74.00663], 16);

    },
    mouseActions: function(){
        map.on('mousemove click', function(e) {
            window[e.type].innerHTML = e.containerPoint.toString() + ', ' + e.latlng.toString();
        });

    },
    insertMarker: function(lon, lat, title, desc){
      L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
        type: 'Feature',
        geometry: {
          type: 'Point',
          // coordinates here are in longitude, latitude order because
          // x, y is the standard for GeoJSON and many formats
          coordinates: [lon, lat]
        },

        properties: {
          title: title,
          description: desc,
          // one can customize markers by adding simplestyle properties
          // http://mapbox.com/developers/simplestyle/
          'marker-size': 'large',
          'marker-color': '#f0a'
        }
      }).addTo(map);
    }
}
