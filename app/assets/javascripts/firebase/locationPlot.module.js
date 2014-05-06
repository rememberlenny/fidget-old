var firebaseAppLocationPlot = function(){
  snapshot: []
}
firebaseAppLocationPlot.prototype.initialize = function(){
  this.events();
}
firebaseAppLocationPlot.prototype.events = function(){
  this.checkForChanges();
}
firebaseAppLocationPlot.prototype.checkForChanges = function(){
  var self = this;
  firebaseAppLocationInput.myDataRef.on('child_added', function(snapshot) {
    var location = snapshot.val();
    self.snapshot.push(location);
    self.displayMarker(location.name, location.longitude, location.latitude);
    var name = location.name;
    var lng = location.longitude;
    var tag = location.latitude;
    mapApp.createMarker(lng, lat, name);
  });
}
firebaseAppLocationPlot.prototype.displayMarker = function(name, longitude, latitude){
  if(location.search === "?test"){ console.log("#############"); }
  if(location.search === "?test"){ console.log("***FIREBASE**"); }
  if(location.search === "?test"){ console.log("*************"); }
  if(location.search === "?test"){ console.log("name = " + name); }
  if(location.search === "?test"){ console.log("longitude = " + longitude); }
  if(location.search === "?test"){ console.log("latitude = " + latitude); }
}

