//IIFE
(function($,MorphSVGPlugin,TimelineMax) {

  //Variables
        var master = new TimelineMax(), //my master timeline
            mainContainer = $('.main_container'),
            sky = $('.main-Scene'),
            road = $('.road'),
            staggerIn = $('.stagger_in'),
            roadPath = $('#road_path path'),
            skyLine1 = $('.sky_line_1'),
            skyLine2 = $('.sky_line_2'),
            skyLine3 = $('.sky_line_3'),
            skyLine4 = $('.sky_line_4'),
            skyLine1Path = $('.sky_line_1 path'),
            skyLine2Path = $('.sky_line_2 path'),
            skyLine3Trees = $('.sky_line_3 .trees'),
            skyLine3One = $('.sky_line_3 .one'),
            skyLine3Two = $('.sky_line_3 .two'),
            skyLine3Three = $('.sky_line_3 .three'),
            skyLine4One = $('.sky_line_4 .one'),
            skyLine4Two = $('.sky_line_4 .two'),
            skyLine4Three = $('.sky_line_4 .three'),
            skyLine4Four = $('.sky_line_4 .four'),
            scooter = $('.scooter'),
            scooterBody = $('.scooter-body'),
            spotLight = $('.spotLight'),
            reflection = $('#reflection'),
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
            wheel = $('.wheel');


        // the master time-line setup
        master
            .add(sceneInAnimation())
            .add(RepeatedAnimations(), 0);


        // change the scene to night
        function dayTime(){
          var globalDuration = 1;
          var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:10}); //my reapeated timeline
          tl.to(sky, globalDuration, { backgroundColor: "#362f73",ease: Power4.easeOut },0)
            .to(road, globalDuration, { backgroundColor: "#2e2749",ease: Power4.easeOut },0)
            .to(roadPath, globalDuration, { opacity: .4,ease: Power4.easeOut },0)
            .to(skyLine1Path, globalDuration, { fill:'#212442',ease: Power4.easeOut },0)
            .to(skyLine2Path, globalDuration, { fill:'#211a3d',ease: Power4.easeOut },0)
            .to(skyLine3Trees, globalDuration, { fill:'#211a3d',ease: Power4.easeOut },0)
            .to(skyLine3One, globalDuration, { fill:'#211a4b',ease: Power4.easeOut },0)
            .to(skyLine3Two, globalDuration, { fill:'#211b5c',ease: Power4.easeOut },0)
            .to(skyLine3Three, globalDuration, { fill:'#211a4b',ease: Power4.easeOut },0)
            .to(skyLine4One, globalDuration, { fill:'#2c266f',ease: Power4.easeOut },0)
            .to(skyLine4Two, globalDuration, { fill:'#2e286a',ease: Power4.easeOut },0)
            .to(skyLine4Three, globalDuration, { fill:'#211b61',ease: Power4.easeOut },0)
            .to(skyLine4Four, globalDuration, { fill:'#211b61',ease: Power4.easeOut },0)
            .to(clouds, globalDuration, { opacity:'0',ease: Power4.easeOut },0)
            .to(starsContainer, globalDuration, { opacity:'1',ease: Power4.easeOut },0)
            .to(spotLight, .1, { opacity:'1',ease: Power4.easeOut },0)
            .to(moon, 1.5, { top:'150px',ease: Back.easeInOut.config(1.5)},0)
            .to(sun, 1.5, { top:'700px',ease: Back.easeInOut.config(1.5)},0);

          return tl;
        }
        setTimeout(function(){
          dayTime();
        },10000);



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
                    alpha: randomBetween(4, 10) / 10,
                    attr: {
                        r: randomBetween(1, 7) / 10,
                        cx: randomBetween(1, 1500),
                        cy: randomBetween(1, 500)
                    }
                });

                TweenMax.to(stars[n], randomBetween(.5,1.5),{
                    alpha: randomBetween(0, 10) / 10,
                    attr: {
                        r:'+=1'
                    },
                    delay:randomBetween(.1,1),
                    repeat:-1,
                    yoyo:true
                });
            }
        }
        starsAttr();



        //scene slide in animation
        function sceneInAnimation() {
            var tl = new TimelineMax(); //my reapeated timeline
            tl.staggerFrom(staggerIn, 1, { bottom: '-70%', scaleY: "0", ease: Back.easeOut.config(1.9) }, -.05)
                .from(road, 1, { bottom: '-30%', height: "0", ease: Power4.easeOut}, 0)
                .to(scooter, 5, { left: '+=650px', ease: Power4.easeOut }, 0)
                .from(sun,1.5, { scale: 0,ease: Elastic.easeOut.config(1, 0.5),delay:1}, 0);
            return tl;
        }

        //all repeated animations
        function RepeatedAnimations() {
            var reapeated = new TimelineMax(); //my reapeated timeline
            reapeated
                .add(roadAnimation(), 0)
                .add(skyLineAnimation(), 0)
                .add(scooterAnimation(), 0)
                .add(smokeAnimation(), 0)
                .add(cloudsAnimation(), 0)
                .add(sunAnimation(), 0)
                ;
            return reapeated;
        }


        // roade Animation
        function roadAnimation() {
            var tl = new TimelineMax();
            tl.to(roadPath, .5, { strokeDashoffset: 200, ease: Linear.easeNone, repeat: -1 }, 0);
            return tl;
        }

        // sky line animation
        function skyLineAnimation() {
            var tl = new TimelineMax();
            tl.to(skyLine1, 4, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to(skyLine2, 10, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to(skyLine3, 18, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to(skyLine4, 35, { left: "-100%", ease: Linear.easeNone, repeat: -1 }, 0);
            return tl;
        }


        // scooter animation
        function scooterAnimation() {
            var tl = new TimelineMax();
            tl.to(wheel, .7, { rotation: "+=360", transformOrigin: "50% 50%", ease: Linear.easeNone, repeat: -1 }, 0)
                .to([scooterBody,spotLight], .35, { y: "+=6", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0)
                .to(scooter, 4, { x: "+=100", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0);
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
            tl.to(cloud1, 30, { left: -160, ease: SlowMo.ease.config(0.1, 0.4, false), repeat: -1 }, 0)
                .to(cloud2, 25, { left: -110, ease: Power1.easeInOut, repeat: -1 }, 0)
                .to(cloud3, 35, { left: -110, ease: Linear.easeNone, repeat: -1, delay: 5 }, 0)
                .to(cloud4, 25, { left: -110, ease: Power1.easeOut, delay: 7, repeat: -1 }, 0);
            return tl;
        }


        // sun animation
        function sunAnimation() {
            var tl = new TimelineMax();
              tl.to([sun,moon], 2, { y: "+=30", ease: Power1.easeInOut, repeat: -1, yoyo: true }, 0)
                .staggerTo(sunlight, 3, { scale:1.5,opacity:0, ease: Power1.easeInOut, repeat: -1, delay:1 },.5, 0)
            return tl;
        }



})(jQuery,MorphSVGPlugin,TimelineMax);
