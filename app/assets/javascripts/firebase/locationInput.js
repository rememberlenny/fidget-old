var firebaseAppLocationInput = {};

firebaseAppLocationInput = {
  initialize: function(){
    this.setupFirebase();
    this.events();
  },
  setupFirebase: function(){
    if(location.search === "?test=true"){ console.log('Firebase setupFirebase initailized'); }
    this.myDataRef = new Firebase('https://glowing-fire-4514.firebaseio.com/');
  },
  events: function(){
    if(location.search === "?test=true"){ console.log('Firebase events initialized'); }
    this.submitToFirebaseEvent();
  },
  submitToFirebaseEvent: function(){
    if(location.search === "?test=true"){ console.log('Firebase submitToFirebase initialized'); }
    var self = this;
    $('#latitudeInput').keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var lng = $('#longitudeInput').val();
        var lat = $('#latitudeInput').val();
        self.submitToFirebase(name, lng, lat)
        $('#nameInput, #longitudeInput, #latitudeInput').val('');
      }
    });
  },
  submitToFirebase: function(name, lng, lat){

    this.myDataRef.push({name: name, longitude: lng, latitude: lat});
  }
}

firebaseAppLocationInput.initialize();
