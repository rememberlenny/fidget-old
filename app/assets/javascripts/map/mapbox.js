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
    this._markers = [];
    this.markers  = [];
    mapApp.map.eachLayer(
      function(marker){ self._markers.push(marker) }
    );
    this.saveMarkers();
  },
  saveMarkers: function(){
    // Called by this.registerGeoJSON()
    var self = this;
    for( var i = 0; i< self._markers.length; i++ ){
      self.processMarkerLoop(i);
    }
  },
  processMarkerLoop: function(i){
    // Called by this.saveMarkers()
    var self = this;
    var hasGeoJSONprop = (self._markers[i]._geojson !== undefined);
    // Defining variables inside if statements is bad practice
    // Nested code also sucks to read
    if( hasGeoJSONprop ){
      var hasGeometryProp = (self._markers[i]._geojson.geometry !== undefined);
      if( hasGeometryProp ){
        var hasPoint = (self._markers[i]._geojson.geometry.type !== undefined );
        if( hasPoint ){
          var isPoint = (self._markers[i]._geojson.geometry.type === "Point" );
          if( isPoint ){
            console.log( self._markers[i] );
            self.markers.push(self._markers[i]);
          }
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
