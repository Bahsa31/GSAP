/*TweenMax.to(".rectangle", 6, {
    left:600,
    Padding:20,
    borderRadius:26,
    borderColor:"white",
    backgroundColor:"tomato"
});  */

//TweenMax.to(".rectangle",3,{backgroundColor:"Green",borderRadius:30,x:600,rotation:360,scale:0.5});

//TweenMax.to(".rectangle",4,{right:600,bottom:400,left:200,top:100});

//TweenMax.to(".rectangle",6,{x:400,y:400,backgroundColor:"red",ease:Back.easeOut});

//TweenMax.to(".rectangle",6,{x:400,ease:Elastic.easeOut});

//TweenMax.to(".rectangle",6,{x:400,ease:Bounce.easeIn,y:400});

//TweenMax.from(".rectangle",6,{opacity:0,scale:2,ease:Bounce.easeOut});

TweenMax.from(".rectangle",6,{opacity:0,scale:0.5,y:200});
TweenMax.staggerFrom(".box",1,{opacity:0,y:200,delay:1},0.2);
