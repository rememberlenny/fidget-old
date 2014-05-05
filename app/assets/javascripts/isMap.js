var mapApp = {};

mapApp = {
  isResized: true,
  // innerWrapHeight,
  // windowHeight,
  isSameWindowAndInner: false,

  blastOff: function(){
    this.checkWindow();
    this.setEvents();
    this.setTimer();
  },
  setTimer: function(){
    var self = this;
    setTimeout( function(){
      self.doTimerActions();
      self.setTimer();
    }, 500 );
  },
  doTimerActions: function(){
    if(this.isResized){
      if(location.search === "?test=true"){ console.log('Running innerWrapWindowDefine.'); }
      this.innerWrapWindowDefine();
    }
  },
  setEvents: function(){
    var self = this;
    if(location.search === "?test=true"){ console.log('Events initialized.'); }
    $(window).on('resize', function(){
      self.doOnResize()
    });
  },
  doOnResize: function(){
    this.isResized = true;
    if(location.search === "?test=true"){ console.log('isResized = ' + this.isResized); }
  },
  checkWindow: function(){
    if(this.isResized === true){
      this.innerWrapWindowDefine();
    }
  },
  innerWrapWindowDefine: function(){
    var self = this;
    var isWindowNotZero = ($(window).height() > 0);
    var isInnerNotZero  = ($('.inner-wrap').height() > 0);
    if( isInnerNotZero && isWindowNotZero ){
      this.innerWrapHeight = $('.inner-wrap').height();
      this.windowHeight = $(window).height();
      this.isSameWindowAndInner = (this.windowHeight === this.innerWrapHeight);
      if(location.search === "?test=true"){ console.log('this.innerWrapHeight = ' + this.innerWrapHeight); }
      if(location.search === "?test=true"){ console.log('this.windowHeight = ' + this.windowHeight); }
      if(location.search === "?test=true"){ console.log('this.isSameWindowAndInner = ' + this.isSameWindowAndInner); }
      if(location.search === "?test=true"){ console.log('Window checked.'); }

      this.timerChecker();
    } else {
      if(location.search === "?test=true"){ console.log('Checking window again.'); }
      setTimeout( function(){
        self.checkWindow()
      }, 250);
    }
  },
  timerChecker: function(){
    var self = this;
    if(location.search === "?test=true"){ console.log('timerChecker running.'); }
    if(location.search === "?test=true"){ console.log('this.isResized = ' + this.isResized); }
    setTimeout( function(){
      self.runTimerCheck()
    }, 250);
  },
  runTimerCheck: function(){
    if( !this.isSameWindowAndInner ){
      this.doWrapNotWindowHeight();
    } else {
      this.isResized = false;
      this.checkWindow();
    }
  },
  setInnerWrapToWindow: function(){
    var windowHeight      = $(window).height();
    $('.inner-wrap').height(windowHeight)
    this.redefineInnerWrap();
  },
  redefineInnerWrap: function(){
    var newInnerWrap      = $('.inner-wrap').height();
    this.innerWrapHeight  = newInnerWrap;
  },
  doWrapNotWindowHeight: function(){
    this.setInnerWrapToWindow();
    this.isResized = true;
    this.checkWindow();
  },
}

mapApp.blastOff();
if(location.search === "?test=true"){ console.log('mapApp.blastOff'); }

