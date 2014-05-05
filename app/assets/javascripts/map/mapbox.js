// var click = document.getElementById('click'),
//     mousemove = document.getElementById('mousemove');

var mapApp = {};

mapApp = {
  allGeoJSON: [],
  initialize: function(){
    this.loadMap();
    this.mouseActions();
    this.registerGeoJSON();
  },
  registerGeoJSON: function(){
    var self = this;
    this.markers = []
    mapApp.map.eachLayer(
      function(marker){ this.markers.push(marker) }
    );
    for(i=0; i< this.markers.length; i++ ){
      if( this.markers[i]._geojson !== undefined ){
        if( this.markers[i]._geojson.geometry.type === "Point" ){
          console.log( this.markers[i] );
        }
      }
    }
  },
  loadMap: function(){
      this.map = L.mapbox
                 .map('map', 'lkbgift.i30dhib8',  { zoomControl: false })
                 .setView([40.714623, -74.00663], 16);

  },
  mouseActions: function(){
      this.map.on('mousemove click', function(e) {
          console.log( e.containerPoint.toString() + ', ' + e.latlng.toString());
      });
  },
}

mapApp.initialize();
