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
    console.log("#############");
    console.log("*************");
    console.log("name = " + name);
    console.log("longitude = " + longitude);
    console.log("latitude = " + latitude);
  },
}

firebaseAppLocationPlot.initialize();
