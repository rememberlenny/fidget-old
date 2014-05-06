// Depends on noticeApp.displayControlNotice
var AddMapElement = function(){}

AddMapElement.prototype.initialize = function(){
  this.events();
}

AddMapElement.prototype.events = function(){
  this.clickDisplayOptions();
}

AddMapElement.prototype.clickDisplayOptions = function(){
  var self = this;
  $('#control-submit a').on('click', function(e){
    e.preventDefault();
    var isVisible = $('#control-submit').hasClass('visible');
    if( isVisible ){
      self.displayOptions();
    } else {
      noticeApp.displayControlNotice('notice', 'Please click any location on the map.');
    }
  });
}

AddMapElement.prototype.displayOptions = function(){
  $('#control-submit').addClass('visible');
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
    notice.displayControlNotice('missing', 'Please enter a "Name" before proceeding.');
  } else if(!isLat){
    var notice = new NoticeApp;
    notice.displayControlNotice('missing', 'Please enter a "Latitude" before proceeding.');
  } else if(!isLng){
    var notice = new NoticeApp;
    notice.displayControlNotice('missing', 'Please enter a "Longitude" before proceeding.');
  } else {
    this.submitLocationToFirebase();
  }
}


AddMapElement.prototype.processNext = function(){

}
