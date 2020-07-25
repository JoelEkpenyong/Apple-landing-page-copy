const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// scrollMagic
const controller = new ScrollMagic.Controller();
// scenes
let scene = new ScrollMagic.Scene({
      duration: 17000,
      triggerElement: intro,
      triggerHook: 0
}).setPin(intro)
  .addTo(controller)


// text animation
const textAnim1 = gsap.to(text, {opacity: 0, duration:.5})

let scene2 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnim1)
  .addTo(controller);

// video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', function(e){
    scrollpos = e.scrollPos / 1000;
});
setInterval(function(){
    delay += (scrollpos - delay) * accelamount 
    video.currentTime = scrollpos
}, 33.33);

