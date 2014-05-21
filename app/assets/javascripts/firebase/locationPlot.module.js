// Dependent on mapApp in checkForChanges();

var LocationPlot = function(project_id, server_location_api_url){
  this.snapshots = [];
  this.project_id = project_id;

  //server_location_api_url = 'http://localhost:3000/project/' + this.project_id + 'locations.json';
  this.server_location_api = server_location_api_url;
}

LocationPlot.prototype.initialize = function(){
  this.events();
}

LocationPlot.prototype.events = function(){
  this.checkForChanges();
}

LocationPlot.prototype.pullFromBackend = function(){
  // @params: project_id
  // @params: server_location_api
  // This is not a real "get" request
  // The current_results is also not a real object
  $.get(this.server_location_api, function(data){
    var map_results = data;
    for ( var i = 0; i < data.length; i++ ){
      var current_results = data[i];
      var lng = current_results['longitude'];
      var lat = current_results['latitude'];
      var name = current_results['name'];
      mapApp.createMarker(lng, lat, name, '', true);
    }
  });
}

LocationPlot.prototype.checkForChanges = function(){
// Dependent on mapApp
// @ mapApp.createMarker(lng, lat, name, '', true);
// @ mapApp.countMarkers();
  var self = this;
  firebaseAppLocationInput.myDataRef.on('child_added', function(snapshot) {
    var location = snapshot.val();
    if(location.search === "?test=true"){ console.log(self.snapshots); }
    self.snapshots.push(location);
    self.displayMarker(location.name, location.longitude, location.latitude);
    var name = location.name;
    var lng = location.longitude;
    var lat = location.latitude;
    mapApp.createMarker(lng, lat, name, '', true);
    mapApp.countMarkers();
    listApp.addLocation(lng, lat, name);
  });
}

LocationPlot.prototype.displayMarker = function(name, longitude, latitude){
  if(location.search === "?test"){ console.log("#############"); }
  if(location.search === "?test"){ console.log("***FIREBASE**"); }
  if(location.search === "?test"){ console.log("*************"); }
  if(location.search === "?test"){ console.log("name = " + name); }
  if(location.search === "?test"){ console.log("longitude = " + longitude); }
  if(location.search === "?test"){ console.log("latitude = " + latitude); }
}

