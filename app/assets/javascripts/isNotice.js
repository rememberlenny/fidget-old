var isNotice = {};

isNotice = {
  message: {
    // title
    // message
    title: 'Notice',
    message: 'This is a message'
  },

  appendNotice: function(){
    var context = this.message
    var template = HandlebarsTemplates['notices/notice'](context);
    $('#notice-wrap').append(template);
  },
  callNotice: function(){
    $('.panel.notice').addClass('visible');
  },
  closeNotice: function(){
    $('.panel.notice').removeClass('visible');
  },
}

