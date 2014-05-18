// Dependent on mapApp in checkForChanges();

var LocationPlot = function(){
  this.snapshots = [];
}

LocationPlot.prototype.initialize = function(){
  this.events();
}

LocationPlot.prototype.events = function(){
  this.checkForChanges();
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

