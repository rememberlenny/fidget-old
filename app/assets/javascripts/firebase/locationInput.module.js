var LocationInput = function(){};

LocationInput.prototype.initialize = function(){
  this.setupFirebase();
  this.events();
}

LocationInput.prototype.setupFirebase = function(){
  if(location.search === "?test=true"){ console.log('Firebase setupFirebase initailized'); }
  this.myDataRef = new Firebase('https://glowing-fire-4514.firebaseio.com/');
}

LocationInput.prototype.events = function(){
  if(location.search === "?test=true"){ console.log('Firebase events initialized'); }
  this.submitToFirebaseEvent();
}

LocationInput.prototype.submitToFirebaseEvent = function(){
  if(location.search === "?test=true"){ console.log('Firebase submitToFirebase initialized'); }
  var self = this;
  console.log('SETTING UP SUBMIT');
  $('#submitLocationSave').click(function (e) {
    console.log('RUNNING SUBMIT');
    self.submitAction();
  });
  $('#nameInput, #submitLocationSave').keypress(function (e) {
    if (e.keyCode == 13) {
      self.submitAction();
    }
  });
}

LocationInput.prototype.submitAction = function(){
  var name  = $('#nameInput').val();
  var desc  = $('#descInput').val();
  var lng   = mapApp.lastClickCord.lng;
  var lat   = mapApp.lastClickCord.lat;
  this.submitToFirebase(name, desc, lng, lat);
  $('#nameInput, #descInput').val('');
  mapApp.clearUnsavedMarkers();
}



LocationInput.prototype.submitToFirebase = function(name, desc, lng, lat){
  this.myDataRef.push({
    name:         name,
    description:  desc,
    longitude:    lng,
    latitude:     lat
  });
}
