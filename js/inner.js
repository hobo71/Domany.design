$(document).ready(function(){

    var projUnit = $('.proj-unit'),
        rightOut = $('.r-out'),
        rightIn = $('.r-in'),
        leftIn = $('.l-in'),
        leftOut = $('.l-out'),
        topIn = $('.t-in'),
        topOut = $('.t-out'),
        bottomIn = $('.b-in'),
        menuItem = $('.menu a'),
        bottomOut = $('.b-out'),
        elasticLineIn = $('.line1'),
        elasticLineOut = $('.line2')
    ;

    // all in/out elastic thumb animation
    function rightInAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:rightIn,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function rightOutAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:rightOut,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function leftInAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:leftIn,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function leftOutAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:leftOut,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function topInAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:topIn,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function topOutAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:topOut,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function bottomInAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:bottomIn,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function bottomOutAnim(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:bottomOut,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    //elastic line animation
    function elasticLineEnter(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:elasticLineIn,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }
    function elasticLineLeave(thisPath){
        var tl = new TimelineMax();

        tl.to(thisPath,.2, {morphSVG:elasticLineOut,ease: Power2.easeInOut})
            .to(thisPath, 1, {morphSVG:thisPath,ease: Elastic.easeOut.config(1, 0.3)})
        ;
        return tl ;
    }

    //detect which side mouse enters/leaves thumb
    function closestEdge(mouse, elem) {
        var elemBounding = elem.getBoundingClientRect();


        var elementLeftEdge = elemBounding.left;
        var elementTopEdge = elemBounding.top;
        var elementRightEdge = elemBounding.right;
        var elementBottomEdge = elemBounding.bottom;

        var mouseX = mouse.clientX;
        var mouseY = mouse.clientY;

        var topEdgeDist = Math.abs(elementTopEdge - mouseY);
        var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
        var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
        var rightEdgeDist = Math.abs(elementRightEdge - mouseX);

        var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);

        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
    }

    var thumb = $('.thumb');

    for(var ind = 0; ind < thumb.length; ind++ ){
        var elem = thumb[ind];
        $(elem).addClass('t'+ind).find('clipPath').attr('id','mask'+ind);
        $(elem).attr('style', 'clip-path: url("#mask'+ind+'"); -webkit-clip-path: url("#mask'+ind+'");');


        $(elem).on('mouseover',function (mouse) {
            // var myElem = this.previousElementSibling;
            var myElem = $(this).parent().find('.proj-name').get( 0 );
            console.log(myElem);
            if (mouse.relatedTarget != myElem){

                var currentPath =  $(this).find('.r-p');
                var edge = closestEdge(mouse, this);

                if(edge === 'right'){
                    rightInAnim(currentPath);
                } else if(edge === 'left'){
                    leftInAnim(currentPath);
                }else if(edge === 'top'){
                    topInAnim(currentPath);
                }else if(edge === 'bottom'){
                    bottomInAnim(currentPath);
                }

            }

        }).on('mouseleave',function (mouse) {
            // var myElem = this.previousElementSibling;
            var myElem = $(this).parent().find('.proj-name').get( 0 );
            if (mouse.relatedTarget != myElem){

                var currentPath =  $(this).find('.r-p');
                var edge = closestEdge(mouse, this);

                if(edge === 'right'){
                    rightOutAnim(currentPath);
                } else if(edge === 'left'){
                    leftOutAnim(currentPath);
                }else if(edge === 'top'){
                    topOutAnim(currentPath);
                }else if(edge === 'bottom'){
                    bottomOutAnim(currentPath);
                }

            }

        });

    }




    //menu elastic line animation

    menuItem.on('mouseover',function (mouse) {

        var edge = closestEdge(mouse, this);
        var currentPath =  $(this).parent().find('.line');

        if(edge === 'bottom'){
            elasticLineEnter(currentPath);
        }

    }).on('mouseleave',function (mouse) {

        var edge = closestEdge(mouse, this);
        var currentPath =  $(this).parent().find('.line');

        if(edge === 'bottom'){
            elasticLineLeave(currentPath);
        }

    });



    //main controller
    var ctrl = new ScrollMagic.Controller({addIndicators: false});

    //add ids
    for(var j=0 ; j<projUnit.length ; j++){

        $(projUnit[j]).attr('id','scn'+j);

        //Scene 0
        var proj1 = new TimelineMax();
        proj1.to($('#scn'+j+' .proj-name'),1,{y:'-=100'},0);

        new ScrollMagic.Scene({
            triggerElement:'#scn'+j,
            triggerHook: 'onCenter',
            duration: '100%'
        })
        .setTween(proj1)
        .addTo(ctrl);

    }

















});

