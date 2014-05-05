var firebaseApp = {};

firebaseApp = {
  initialize: function(){
    this.setupFirebase();
    this.events();
  },
  setupFirebase: function(){
    console.log('Firebase setupFirebase initailized');
    var myDataRef = new Firebase('https://glowing-fire-4514.firebaseio.com/');
  },
  events: function(){
    console.log('Firebase events initialized');
    this.submitToFirebase();
  },
  submitToFirebase: function(){
    console.log('Firebase submitToFirebase initialized');
    $('#latitudeInput').keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var long = $('#longitudeInput').val();
        var lati = $('#latitudeInput').val();
        myDataRef.push({name: name, longitude: long, latitude: lati});
        $('#nameInput, #longitudeInput, #latitudeInput').val('');
      }
    });
  },
}

firebaseApp.initialize();
