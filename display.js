TweenMax.set(".star-five", {
  scale: 0.2,
  autoAlpha: 0
});
var state=1;
var tl1 = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('HI!!!');
     state=2;
  }
});

tl1
  .to(".star-five", 1, {
    x:500,
    y:200,
    scale: 2,
    ease: Elastic.easeIn.config(2, 1)
  })
  .to(".star-five", 1, {
    autoAlpha: 1,
    scale: 1,
    ease: Back.easeOut.config(4)
  }).to(".star-five", 1, {
    x: 200,
    y: 100,
    ease: Back.easeOut.config(4)
  });


  window.onclick = function() {
    multiclick();
  }
function multiclick()
{
  if(state==1)
    tl1.play();
  if(state==2)
    tl2.play();
  if(state==3)
    tl3.play();
}
  var tl2 = new TimelineMax({
    paused: true,
    onComplete: function() {
      console.log('HI!!!');
       state=3;
    }
  });
  
  tl2
    .to(".star-five", 1, {
      x:500,
      y:200,
      scale: 2,
      ease: Elastic.easeIn.config(2, 1)
    })
    .to(".star-five", 1, {
      autoAlpha: 1,
      scale: 1,
      ease: Back.easeOut.config(4)
    }).to(".star-five", 1, {
      x:50,
      y:-10,
      x:-10,
      y:50,
      ease: Back.easeOut.config(4)
    });
  
    var tl3 = new TimelineMax({
      paused: true,
      onComplete: function() {
        console.log('HI!!!');
        var state=1;
      }
    });
    
    tl3
      .to(".star-five", 1, {
        x:500,
        y:200,
        scale: 2,
        ease: Elastic.easeIn.config(2, 1)
      })
      .to(".star-five", 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Back.easeOut.config(4)
      }).to(".star-five", 1, {
        x:100,
        y:-100,
        x:-100,
        y:100,
        ease: Back.easeOut.config(4)
      });
    