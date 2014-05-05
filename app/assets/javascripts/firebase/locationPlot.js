var firebaseAppLocationPlot = {};

firebaseAppLocationPlot = {
  initialize: function(){
    this.events();
  },
  events: function(){
    this.checkForChanges();
  },
  checkForChanges: function(){
    var self = this;
    firebaseAppLocationInput.myDataRef.on('child_added', function(snapshot) {
      var location = snapshot.val();
      self.displayMarker(location.name, location.longitude, location.latitude);
    });
  },
  displayMarker: function(name, longitude, latitude){
    if(location.search === "?test"){ console.log("#############"); }
    if(location.search === "?test"){ console.log("***FIREBASE**"); }
    if(location.search === "?test"){ console.log("*************"); }
    if(location.search === "?test"){ console.log("name = " + name); }
    if(location.search === "?test"){ console.log("longitude = " + longitude); }
    if(location.search === "?test"){ console.log("latitude = " + latitude); }
  },
}

firebaseAppLocationPlot.initialize();
