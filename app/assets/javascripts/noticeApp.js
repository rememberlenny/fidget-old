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

