const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// scrollMagic
const controller = new ScrollMagic.Controller();
// scenes
let scene = new ScrollMagic.Scene({
      duration: 55000,
      triggerElement: intro,
      triggerHook: 0
}).setPin(intro)
  .addTo(controller)


// text animation
const textAnim1 = gsap.to(text, {opacity: 0, duration:2})

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnim1)
  .addTo(controller);

// video animation
let accelamount = 0.05;
let scrollpos = 0;
let delay = 0;

scene.on('update', function(e){
    scrollpos = e.scrollPos / 600;
});
setInterval(function(){
    delay += (scrollpos - delay) * accelamount 
    video.currentTime = scrollpos
}, 33.33);

