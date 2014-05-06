var NoticeApp = function(){}

NoticeApp.prototype.displayControlNotice = function(element, detail){
  var message = {
    notice_message: detail,
  }
  var context = message;
  var template = HandlebarsTemplates['notices/noticeBar'](context);
  $('#notice-bar').append(template);
  var newestEl = $('#notice-bar .notice-message');
  $(newestEl).removeClass('current');
  $(newestEl).addClass('show');
  $(newestEl).last().addClass('current');
  this.deleteNotice(newestEl, 4000);
}

NoticeApp.prototype.deleteNotice = function(element, speed){
  console.log('Delete element: ' + element);
  setTimeout(function(){
    $(element).removeClass('show');
    setTimeout(function(){
      $(element).remove();
    }, 500);
  }, speed);
}

function Notice(title, message){
  this.message = {
    // title
    // message
    title: title,
    message: message
  };
  this.createNotice = function(){
    var context = this.message
    var template = HandlebarsTemplates['notices/notice'](context);
    $('#notice-wrap').append(template);
    $('.panel.notice').addClass('visible');
  };
  this.closeNotice = function(){
    $('.panel.notice').removeClass('visible');
  };
  this.createNotice();
}

