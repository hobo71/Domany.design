$(document).ready(function(){for(var e=$(".proj-unit"),n=$(".title-block h1, .title-block p"),o=new ScrollMagic.Controller({addIndicators:!1}),t=0;t<e.length;t++){$(e[t]).attr("id","scn"+t);var r=new TimelineMax;r.to($("#scn"+t+" .proj-name"),1,{y:"-=100"},0),new ScrollMagic.Scene({triggerElement:"#scn"+t,triggerHook:"onCenter",duration:"100%"}).setTween(r).addTo(o)}var a=new TimelineMax;a.to(n,1,{opacity:0,y:"+=95"},0),new ScrollMagic.Scene({duration:"200"}).setTween(a).addTo(o)});