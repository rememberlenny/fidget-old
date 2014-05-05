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
      var geometryProp = self._markers[i]._geojson.geometry;
      var hasGeometryProp = (geometryProp !== undefined);
      if( hasGeometryProp ){
        var hasPoint = (geometryProp.type !== undefined );
        if( hasPoint ){
          var isPoint = (geometryProp.type === "Point" );
          if( isPoint ){
            if(location.search === "?test=true"){ console.log( self._markers[i] ); }
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
    this.map.on('mousemove', function(e) {
      if(location.search === "?test=true"){ console.log( e.containerPoint.toString() + ', ' + e.latlng.toString()); }
    });
    this.map.on('click', function(e) {
      if(location.search === "?test=true"){ $('#longitudeInput').val(e.latlng.lng); }
      if(location.search === "?test=true"){ $('#latitudeInput').val(e.latlng.lat); }
    });
  },
}

mapApp.initialize();
