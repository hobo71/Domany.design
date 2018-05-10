!function(e,a,t){var o,n,r,s,i,l,u,c,m,p,d,h,f,w,g=new TimelineMax,O=(e(".main_container"),e(".main-Scene")),y=e(".text"),T=e(".road"),M=e(".stagger_in"),b=e(".road_path"),x=e(".sky_line_1"),v=e(".sky_line_2"),S=e(".fr-skln"),G=e(".windows"),P=e(".bc-skln"),V=e(".scooter"),E=e(".scooter-body"),C=e(".spotLight"),I=e(".reflection"),k=e(".smoke_unit_div"),_=e(".stars"),L=e(".clouds"),N=e(".cloud_1"),D=e(".cloud_2"),A=e(".cloud_3"),B=e(".cloud_4"),F=e(".sun"),j=e(".sunlight"),Q=e(".moon"),Y=e(".wheel"),R=e("#bird"),W=window.innerWidth,X=e(".input_item"),q=e(".btn"),z=e("#btn1"),H=e("#btn2"),J=e(".hamburger a"),K=e(".menu li"),U=e("nav"),Z=e("#navEdg"),$=e("#navEdg1"),ee=e("#navEdg2"),ae=e(".stg1"),te=e(".overlay"),oe=e(".bird"),ne=e("header"),re=e(".r-out"),se=e(".r-in"),ie=e(".l-in"),le=e(".l-out"),ue=e(".t-in"),ce=e(".t-out"),me=e(".b-in"),pe=e(".menu a"),de=e(".b-out"),he=e(".line1"),fe=e(".line2"),we=e(".thumb");g.add((w=new TimelineMax({delay:.5}),w.set([M,T,y,F],{display:"block"}).staggerFrom(M,.7,{bottom:"-10%",scaleY:"0",ease:Back.easeOut.config(1.5)},-.05).from(T,.7,{bottom:"-30%",height:"0",ease:Power3.easeOut},0).to(V,5,{left:0,right:0,ease:Power2.easeOut},1).from(F,1.5,{scale:0,ease:Elastic.easeOut.config(1,.5),delay:.8},0),w)).add((s=new TimelineMax,s.add((f=new TimelineMax,f.to(b,1,{strokeDashoffset:200,ease:Linear.easeNone,repeat:-1},0),f),0).add((h=new TimelineMax,h.to(x,20,{left:"-100%",ease:Linear.easeNone,repeat:-1},0).to(v,30,{left:"-100%",ease:Linear.easeNone,repeat:-1},0),h),0).add((d=new TimelineMax,d.to(Y,.75,{rotation:"+=360",transformOrigin:"50% 50%",ease:Linear.easeNone,repeat:-1},0).to([E,C],.35,{y:"+=7",ease:Power1.easeInOut,repeat:-1,yoyo:!0},0).to(V,4,{x:"-=50",ease:Power1.easeInOut,repeat:-1,yoyo:!0},0),d),0).add((p=new TimelineMax,p.fromTo(I,1.5,{x:100},{x:-100,ease:Power1.easeInOut,repeat:-1,repeatDelay:1.5}),p),1).add((m=new TimelineMax,m.staggerFromTo(k,.8,{right:0,ease:Linear.easeNone},{right:"92%",ease:Linear.easeNone,repeat:-1},.15,0),m.staggerFromTo(k,.4,{opacity:0,scale:0,transformOrigin:"center center",yoyo:!0,repeat:-1},{opacity:1,scale:1,yoyo:!0,repeat:-1},.15,0),m),0).add((c=new TimelineMax,c.to(N,40,{left:-160,ease:SlowMo.ease.config(.1,.4,!1),repeat:-1},0).to(D,25,{left:-110,ease:Power1.easeInOut,repeat:-1},0).to(A,55,{left:-210,ease:Linear.easeNone,repeat:-1,delay:5},0).to(B,25,{left:-150,ease:Power1.easeOut,delay:7,repeat:-1},0),c),0).add((u=new TimelineMax({repeat:-1}),u.to(oe,1.1,{y:"+=10",ease:Power1.easeIn,yoyo:!0,repeat:-1,delay:1.5},0).to(oe,65,{x:W+100,ease:Linear.easeNone,repeat:-1},0),u),0).add((l=new TimelineMax({repeat:-1,repeatDelay:1.1}),l.to(R,.2,{morphSVG:"#bird2",ease:Linear.easeNone}).to(R,.2,{morphSVG:"#bird3",ease:Linear.easeNone}).to(R,.2,{morphSVG:"#bird4",ease:Linear.easeNone}).to(R,.2,{morphSVG:"#bird5",ease:Linear.easeNone}).to(R,.3,{morphSVG:"#bird6",ease:Linear.easeNone}),l),0).add((i=new TimelineMax,i.to([F,Q],2,{y:"+=20",ease:Power1.easeInOut,repeat:-1,yoyo:!0},0).staggerTo(j,3,{scale:1.5,opacity:0,ease:Power1.easeInOut,repeat:-1,delay:1},.5,0),i),0),s),0).add((n=1.5,r=new TimelineMax({repeat:-1,yoyo:!0,repeatDelay:10,delay:10}),r.to(O,n,{backgroundColor:"#2E3192",ease:Power4.easeOut},0).to(T,n,{backgroundColor:"#121849",ease:Power4.easeOut},0).to(S,n,{fill:"#222A72",ease:Power4.easeOut},0).to(G,n,{fill:"#FCEE21",ease:Power4.easeOut},0).to(P,n,{fill:"#131B4C",ease:Power4.easeOut},0).to(L,n,{autoAlpha:"0",ease:Power4.easeOut},0).to(_,n,{opacity:"1",ease:Power4.easeOut},0).to(oe,n,{autoAlpha:0,ease:Power4.easeOut},0).to(Q,1.5,{top:"30%",ease:Back.easeInOut.config(1)},0).to(F,1.5,{top:"700px",ease:Back.easeInOut.config(1)},0),r),0).add(((o=new TimelineMax).set(ae,{position:"relative",autoAlpha:1}).staggerFrom(ae,1.2,{y:"+=70",autoAlpha:0,ease:Power3.easeInOut,delay:2.7},.1),o),0);var ge=e(".starContainer"),Oe="http://www.w3.org/2000/svg",ye=["#4e5fff","#ffe603","#CB83C6","#DED7DE","#EAC0B0"];function Te(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function Me(e,a){var t=a.getBoundingClientRect(),o=t.left,n=t.top,r=t.right,s=t.bottom,i=e.clientX,l=e.clientY,u=Math.abs(n-l),c=Math.abs(s-l),m=Math.abs(o-i),p=Math.abs(r-i);switch(Math.min(u,c,m,p)){case m:return"left";case p:return"right";case u:return"top";case c:return"bottom"}}!function(){for(var e=0;e<120;e++){var a=document.createElementNS(Oe,"circle");ge.append(a)}}(),function(){for(var a=e(".starContainer circle"),o=0;o<a.length;o++)t.set(a[o],{fill:ye[o%ye.length],alpha:Te(5,7)/10,attr:{r:Te(1,7)/10,cx:Te(1,1500),cy:Te(1,500)}}),t.to(a[o],Te(.7,1.3),{alpha:Te(0,10)/10,attr:{r:"+=1.1"},delay:Te(.1,.9),repeat:-1,yoyo:!0})}(),q.mousedown(function(){(new TimelineMax).to(z,.25,{morphSVG:H,ease:Circ.easeOut})}),q.mouseup(function(){(new TimelineMax).to(z,1,{morphSVG:z,ease:Elastic.easeOut.config(1.5,.2)})}),q.on("click",function(a){var t=e(this);a.preventDefault(),t.disabled=!0,setTimeout(function(){t.disabled=!1,e(".contact_form").submit(),t[0].hasAttribute("href")&&(window.location.href=t.attr("href"))},300)}),X.on("focus",function(a){var t,o,n,r,s,i=e(this);t=i,o=new TimelineMax,n=e(t),r=n.parent().find(".input1"),s=n.parent().find(".input2"),o.to(r,.1,{morphSVG:s,ease:Circ.easeOut}).to(r,1.1,{morphSVG:r,ease:Elastic.easeOut.config(1.5,.2)})}),jQuery.fn.clickToggle=function(e,a){var t=[a,e];return this.on("click",function(e){e.preventDefault(),t[this._tog^=1].call(this)})},J.clickToggle(function(){g.pause(),(new TimelineMax).to(U,1,{right:0,ease:Power4.easeOut}).to(Z,.5,{morphSVG:$},0).to(Z,1.7,{morphSVG:Z,ease:Elastic.easeOut.config(1,.3)},"-=.5").staggerFrom(K,1,{x:"+=100",ease:Power4.easeOut},.11,.1),e(this).addClass("open"),te.removeClass("fade"),e("body").addClass("nav_opened")},function(){(new TimelineMax).to(U,1.25,{right:"-100%",ease:Power4.easeInOut}).to(Z,.5,{morphSVG:ee},.2).to(Z,.01,{morphSVG:Z}),e(this).removeClass("open"),setTimeout(function(){te.addClass("fade"),e("body").removeClass("nav_opened"),g.play()},700)});for(var be=0;be<we.length;be++){var xe=we[be];e(xe).addClass("t"+be).find("clipPath").attr("id","mask"+be),e(xe).attr("style",'clip-path: url("#mask'+be+'"); -webkit-clip-path: url("#mask'+be+'");'),e(xe).on("mouseover",function(a){var t,o,n,r,s=e(this).parent().find(".proj-name").get(0);if(a.relatedTarget!=s){var i=e(this).find(".r-p"),l=Me(a,this);"right"===l?(r=i,(new TimelineMax).to(r,.2,{morphSVG:se,ease:Power2.easeInOut}).to(r,1,{morphSVG:r,ease:Elastic.easeOut.config(1,.3)})):"left"===l?(n=i,(new TimelineMax).to(n,.2,{morphSVG:ie,ease:Power2.easeInOut}).to(n,1,{morphSVG:n,ease:Elastic.easeOut.config(1,.3)})):"top"===l?(o=i,(new TimelineMax).to(o,.2,{morphSVG:ue,ease:Power2.easeInOut}).to(o,1,{morphSVG:o,ease:Elastic.easeOut.config(1,.3)})):"bottom"===l&&(t=i,(new TimelineMax).to(t,.2,{morphSVG:me,ease:Power2.easeInOut}).to(t,1,{morphSVG:t,ease:Elastic.easeOut.config(1,.3)}))}}).on("mouseleave",function(a){var t,o,n,r,s=e(this).parent().find(".proj-name").get(0);if(a.relatedTarget!=s){var i=e(this).find(".r-p"),l=Me(a,this);"right"===l?(r=i,(new TimelineMax).to(r,.2,{morphSVG:re,ease:Power2.easeInOut}).to(r,1,{morphSVG:r,ease:Elastic.easeOut.config(1,.3)})):"left"===l?(n=i,(new TimelineMax).to(n,.2,{morphSVG:le,ease:Power2.easeInOut}).to(n,1,{morphSVG:n,ease:Elastic.easeOut.config(1,.3)})):"top"===l?(o=i,(new TimelineMax).to(o,.2,{morphSVG:ce,ease:Power2.easeInOut}).to(o,1,{morphSVG:o,ease:Elastic.easeOut.config(1,.3)})):"bottom"===l&&(t=i,(new TimelineMax).to(t,.2,{morphSVG:de,ease:Power2.easeInOut}).to(t,1,{morphSVG:t,ease:Elastic.easeOut.config(1,.3)}))}})}pe.on("mouseover",function(a){var t,o=Me(a,this),n=e(this).parent().find(".line");"bottom"===o&&(t=n,(new TimelineMax).to(t,.1,{morphSVG:he,ease:Power2.easeInOut}).to(t,1.1,{morphSVG:t,ease:Elastic.easeOut.config(1,.3)}))}).on("mouseleave",function(a){var t,o=Me(a,this),n=e(this).parent().find(".line");"bottom"===o&&(t=n,(new TimelineMax).to(t,.1,{morphSVG:fe,ease:Power2.easeInOut}).to(t,1.1,{morphSVG:t,ease:Elastic.easeOut.config(1,.3)}))}),e(window).scroll(function(){e(window).scrollTop()>=290?ne.addClass("colored"):ne.removeClass("colored")})}(jQuery,MorphSVGPlugin,TweenMax);