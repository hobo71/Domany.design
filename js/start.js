//IIFE
(function($,MorphSVGPlugin,TimelineMax) {

    //Variables
    var master = new TimelineMax({delay:.1}), //my master timeline
        bg = $('.bg'),
        signs = $('.signs'),
        brand = $('.brand'),
        startButton = $('.start_btn')
    ;


    // the master time-line setup
    master
        .set(bg,{css:{transform:"scale(3,3)", opacity:0}})
        .add( rotateBG(),0)
        .add( signsSlideIn(),0)
        .add( startButtonShake(),4)
    ;


    // background rotation
    function rotateBG(){
        var tl = new TimelineMax({repeat:-1});
        tl.to(bg, 3, {opacity:"1", ease:Linear.easeNone},0)
          .to(bg, 70, {rotation:"+=360", transformOrigin: "50% 50%", ease:Linear.easeNone},0)
          ;
        return tl;
    }

    // signs slide in
    function signsSlideIn(){
        var tl = new TimelineMax();
        tl.from(startButton, 3, {top:"-=130", ease: Elastic.easeOut.config(1, 0.35)},0)
          .from(signs, 2, {top:"-320px", ease: Elastic.easeOut.config(1, 0.55)},0)
          ;
        return tl;
    }

    // signs slide in
    function startButtonShake(){
      console.log('play')
        var tl = new TimelineMax({yoyo:true,repeat:-1});
        tl.fromTo(startButton, .3,{y:"+=0"},{y:"+=25", ease: Power1.easeInOut, delay:1.5})
          ;
        return tl;
    }



})(jQuery,MorphSVGPlugin,TimelineMax);
