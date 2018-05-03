//IIFE
(function($,MorphSVGPlugin,TweenMax) {

  //Variables
        var master = new TimelineMax(), //my master timeline
            mainContainer = $('.main_container'),
            sky = $('.main-Scene'),
            text = $('.text'),
            road = $('.road'),
            staggerIn = $('.stagger_in'),
            roadPath = $('.road_path'),
            skyLine1 = $('.sky_line_1'),
            skyLine2 = $('.sky_line_2'),
            skyLine1buildings = $('.fr-skln'),
            skyLine1Windows = $('.windows'),
            skyLine2Path = $('.bc-skln'),
            scooter = $('.scooter'),
            scooterBody = $('.scooter-body'),
            spotLight = $('.spotLight'),
            reflection = $('.reflection'),
            smoke = $('.smoke_unit_div'),
            starsContainer = $('.stars'),
            clouds = $('.clouds'),
            cloud1 = $('.cloud_1'),
            cloud2 = $('.cloud_2'),
            cloud3 = $('.cloud_3'),
            cloud4 = $('.cloud_4'),
            sun = $('.sun'),
            sunlight = $('.sunlight'),
            moon = $('.moon'),
            wheel = $('.wheel'),
            bird = $('#bird'),
            $window_width = window.innerWidth,
            button = $('.btn'),
            buttonUp = $('#btn1'),
            buttonDown = $('#btn2'),
            menuButton = $('.hamburger a'),
            menuLinks = $('.menu li'),
            nav = $('nav'),
            navEdg = $('#navEdg'),
            navEdgIn = $('#navEdg1'),
            navEdgOut = $('#navEdg2'),
            stagger1 = $('.stg1'),
            overlay = $('.overlay'),
            birdBody = $('.bird');


        // the master time-line setup
        master
            .add(sceneInAnimation())
            .add(RepeatedAnimations(), 0)
            .add(dayNight(), 0)
            .add(textInAnim(),0);


        // change the scene to night
        function dayNight(){
          var globalDuration = 1.5;
          var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:10, delay:10}); //my reapeated timeline
          tl.to(sky, globalDuration, { backgroundColor: "#2E3192",ease: Power4.easeOut },0)
            .to(road, globalDuration, { backgroundColor: "#121849",ease: Power4.easeOut },0)
            .to(skyLine1buildings, globalDuration, { fill:'#222A72',ease: Power4.easeOut },0)
            .to(skyLine1Windows, globalDuration, { fill:'#FCEE21',ease: Power4.easeOut },0)
            .to(skyLine2Path, globalDuration, { fill:'#131B4C',ease: Power4.easeOut },0)
            .to(clouds, globalDuration, { autoAlpha:'0',ease: Power4.easeOut },0)
            .to(starsContainer, globalDuration, { opacity:'1',ease: Power4.easeOut },0)
            // .to(spotLight, .1, { autoAlpha:'1',ease: Power4.easeOut },0)
            .to(birdBody, globalDuration, { autoAlpha:0,ease: Power4.easeOut },0)
            .to(moon, 1.5, { top:'30%',ease: Back.easeInOut.config(1)},0)
            .to(sun, 1.5, { top:'700px',ease: Back.easeInOut.config(1)},0);

          return tl;
        }

    // text in animation
    function textInAnim(){
        var tl = new TimelineMax();
          tl.set(stagger1,{position:'relative', autoAlpha:1})
            .staggerFrom(stagger1,1.2, { y: "+=70",autoAlpha:0,ease: Power3.easeInOut,delay:2.7},.1)
        ;
        return tl;
    }


        //create & animate stars randomly
        var starContainer = $('.starContainer'),
            xmlns = "http://www.w3.org/2000/svg",
            starColorsArray = ['#4e5fff', '#ffe603', '#CB83C6', '#DED7DE', '#EAC0B0'];
        //randomize
        function randomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        //Generate stars
        function makeStars() {
            for (var i = 0; i < 120; i++) {
                var star = document.createElementNS(xmlns, 'circle');
                starContainer.append(star);
            }
        }
        makeStars();
        //set attr to stars randomly
        function starsAttr() {
            var stars = $('.starContainer circle');
            for (var n = 0; n < stars.length; n++) {
                TweenMax.set(stars[n], {
                    fill: starColorsArray[n % starColorsArray.length],
                    alpha: randomBetween(5, 7) / 10,
                    attr: {
                        r: randomBetween(1, 7) / 10,
                        cx: randomBetween(1, 1500),
                        cy: randomBetween(1, 500)
                    }
                });

                TweenMax.to(stars[n], randomBetween(.7,1.3),{
                    alpha: randomBetween(0, 10) / 10,
                    attr: {
                        r:'+=1.1'
                    },
                    delay:randomBetween(.1,.9),
                    repeat:-1,
                    yoyo:true
                });
            }
        }
        starsAttr();



        //scene slide in animation
        function sceneInAnimation() {
            var tl = new TimelineMax({delay:.5});

            tl
                .set([staggerIn,road,text,sun],{display: 'block'})
                .staggerFrom(staggerIn, .7, { bottom: "-10%", scaleY: "0", ease: Back.easeOut.config(1.5) }, -.05)
                .from(road, .7, { bottom: '-30%', height: "0", ease: Power3.easeOut}, 0)
                .to(scooter, 5, { left: 0,right:0, ease: Power2.easeOut }, 1)
                .from(sun,1.5, { scale: 0,ease: Elastic.easeOut.config(1, 0.5),delay:.8}, 0);
            return tl;
        }

        //all repeated animations
        function RepeatedAnimations() {
            var reapeated = new TimelineMax(); //my reapeated timeline
            reapeated
                .add(roadAnimation(), 0)
                .add(skyLineAnimation(), 0)
                .add(scooterAnimation(), 0)
                .add(glassReflectionAnimation(), 1)
                .add(smokeAnimation(), 0)
                .add(cloudsAnimation(), 0)
                .add(BirdMovementAnimation(), 0)
                .add(BirdAnimation(), 0)
                .add(sunAnimation(), 0)
                ;
            return reapeated;
        }


        // roade Animation
        function roadAnimation() {
            var tl = new TimelineMax();
            tl.to(roadPath, .7, { strokeDashoffset: 200, ease: Linear.easeNone, repeat: -1 }, 0);
            return tl;
        }

        // sky line animation
        function skyLineAnimation() {
            var tl = new TimelineMax();
            tl.to(skyLine1, 20, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to(skyLine2, 30, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0);
            return tl;
        }


        // scooter animation
        function scooterAnimation() {
            var tl = new TimelineMax();
            tl.to(wheel, .75, { rotation: "+=360", transformOrigin: "50% 50%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to([scooterBody,spotLight], .35, { y: "+=7", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0)
                .to(scooter, 4, { x: "-=50", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0);
            return tl;
        }


        // glasses reflection animation
            function glassReflectionAnimation() {
                var tl = new TimelineMax();
                tl.fromTo(reflection, 1.5,{x:100}, { x:-100, ease: Power1.easeInOut, repeat: -1,repeatDelay:1.5})
                ;
                return tl;
            }

        // scooter smoke animation
        function smokeAnimation() {
            var tl = new TimelineMax();
            tl.staggerFromTo(smoke, .8, { right: 0, ease: Linear.easeNone }, { right: "92%", ease: Linear.easeNone, repeat: -1 }, .15, 0)
            tl.staggerFromTo(smoke, .4, { opacity: 0, scale: 0, transformOrigin: "center center", yoyo: true, repeat: -1 }, { opacity: 1, scale: 1, yoyo: true, repeat: -1 }, .15, 0);
            return tl;
        }

        // clouds animation
        function cloudsAnimation() {
            var tl = new TimelineMax();
            tl.to(cloud1, 40, { left: -160, ease: SlowMo.ease.config(0.1, 0.4, false), repeat: -1 }, 0)
                .to(cloud2, 25, { left: -110, ease: Power1.easeInOut, repeat: -1 }, 0)
                .to(cloud3, 55, { left: -210, ease: Linear.easeNone, repeat: -1, delay: 5 }, 0)
                .to(cloud4, 25, { left: -150, ease: Power1.easeOut, delay: 7, repeat: -1 }, 0);
            return tl;
        }

        // Bird animation
        function BirdAnimation() {
            var tl = new TimelineMax({repeat:-1, repeatDelay:1.1});
            tl.to(bird, .2, {morphSVG:"#bird2", ease: Linear.easeNone})
              .to(bird, .2, {morphSVG:"#bird3", ease: Linear.easeNone})
              .to(bird, .2, {morphSVG:"#bird4", ease: Linear.easeNone})
              .to(bird, .2, {morphSVG:"#bird5", ease: Linear.easeNone})
              .to(bird, .3, {morphSVG:"#bird6", ease: Linear.easeNone})
            ;
            return tl;
        }

        // Bird movement animation
        function BirdMovementAnimation() {
            var tl = new TimelineMax({repeat: -1});
            tl.to(birdBody, 1.1, { y: "+=10", ease: Power1.easeIn,yoyo: true, repeat: -1, delay:1.5}, 0)
              .to(birdBody,65,{x:$window_width+100, ease: Linear.easeNone, repeat: -1},0)
            ;
            return tl;
        }

        // sun animation
        function sunAnimation() {
            var tl = new TimelineMax();
              tl.to([sun,moon], 2, { y: "+=20", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0)
                .staggerTo(sunlight, 3, { scale:1.5,opacity:0, ease: Power1.easeInOut, repeat: -1, delay:1 },.5, 0)
            ;
            return tl;
        }


        // button mouse Down elastic animation
        function ButtonDownAnimation(){
            var tl = new TimelineMax();

            tl.to(buttonUp,.25, {morphSVG:buttonDown,ease: Circ.easeOut})
            ;

            return tl ;
        }

        // button mouse Up elastic animation
        function ButtonUpAnimation(){
            var tl = new TimelineMax();

            tl.to(buttonUp,1, {morphSVG:buttonUp,ease: Elastic.easeOut.config(1.5, 0.2)})
            ;

            return tl ;
        }

        // button click to wiggle
        button.mousedown(function(){
            ButtonDownAnimation();
        });
        button.mouseup(function(){
            ButtonUpAnimation();
        });


        // line in elastic animation
        function navInAnimation(){
            var tl = new TimelineMax();

            tl.to(nav,1, {right:0,ease: Power4.easeOut})
              .to(navEdg,.5, {morphSVG:navEdgIn},0)
              .to(navEdg, 1.7, {morphSVG:navEdg,ease: Elastic.easeOut.config(1, 0.3)},'-=.5')
              .staggerFrom(menuLinks, 1, {x:"+=100",ease: Power4.easeOut},.11,.1)
            ;

            return tl ;
        }


        // line in elastic animation
        function navOutAnimation(){
            var tl = new TimelineMax();

            tl.to(nav,1.25, {right:'-100%',ease: Power4.easeInOut})
              .to(navEdg,.5, {morphSVG:navEdgOut},.2)
              .to(navEdg, .01, {morphSVG:navEdg})
            ;
            return tl ;
        }



        // micro toggleClick jquery plugin
        jQuery.fn.clickToggle = function(a,b) {
            var ab = [b,a];
            return this.on("click", function(e){
                e.preventDefault();
                ab[this._tog^=1].call(this);
            });
        };

        // click more button to toggle drawer
        menuButton.clickToggle(function() {
            master.pause();
            navInAnimation();
            $(this).addClass('open');
            overlay.removeClass('fade');

        }, function() {
            navOutAnimation();
            $(this).removeClass('open');
            setTimeout(function () {
                overlay.addClass('fade');
                master.play();
            },700)
        });




})(jQuery,MorphSVGPlugin,TweenMax);
