// Depends on noticeApp.displayControlNotice
var AddMapElement = function(){}

AddMapElement.prototype.events = function(){

}

AddMapElement.prototype.displayOptions = function(){

}

AddMapElement.prototype.processNext = function(){
  // Depends on noticeApp.displayControlNotice
  var name  = $('#nameInput').val();
  var lng   = parseFloat( $('#longitudeInput').val() );
  var lat   = parseFloat( $('#latitudeInput').val() );

  var isName  = ( name !== '' );
  var isLat   = ( -90  <= lat <= 90 );
  var isLng   = ( -180 <= lng <= 180 );


  if(!isName){
    var notice = new NoticeApp;
    notice.displayControlNotice('missing', 'Name');
  } else if(!isLat){
    var notice = new NoticeApp;
    notice.displayControlNotice('missing', 'Latitude');
  } else if(!isLng){
    var notice = new NoticeApp;
    notice.displayControlNotice('missing', 'Longitude');
  } else {
    this.submitLocationToFirebase();
  }
}


AddMapElement.prototype.processNext = function(){

}
