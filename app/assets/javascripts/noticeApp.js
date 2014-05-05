var noticeApp = {};

noticeApp = {
  message: {
    // title
    // message
    title: 'Notice',
    message: 'This is a message'
  },
  initNotice: function(title, message){
    this.defineMessage(title, message);
    this.callNotice();
  },
  defineMessage: function(title, message){
    this.message.title = title;
    this.message.message = message;
  },
  callNotice: function(){
    this.appendNotice();
    $('.panel.notice').addClass('visible');
  },
  appendNotice: function(){
    var context = this.message
    var template = HandlebarsTemplates['notices/notice'](context);
    $('#notice-wrap').append(template);
  },
  closeNotice: function(){
    $('.panel.notice').removeClass('visible');
  },
}

