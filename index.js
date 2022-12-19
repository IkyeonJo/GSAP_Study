import gsap from 'gsap';

// const box = document.querySelector('.box');

//--- gsap.to() 메서드
// box.addEventListener('click', () => {
//   gsap.to(box, {
//     duration:2,
//     x: 200,
//     backgroundColor: "#560563",
//     borderRadius: "20%",
//     border: "5px solid white",
//     // ease: "back",
//     // ease: "elastic",
//     ease: "bounce",
//   });
// })

// gsap.to(".box", {
//   x: 200,
// })

// gsap.to(".box1", {
//   duration: 3,
//   x: 200,
//   opacity: 0.2,
//   ease: 'steps(10)',
//   delay: 2,
// })

// gsap.to(".box2", {
//   duration: 3,
//   x: 200,
//   rotate: 720,
//   scale: 1.3,
// })

// gsap.to(".box3", {
//   duration: 3,
//   x: 200,
//   ease: "elastic",
//   backgroundColor: 'red',
//   width: 300,
//   fontSize: 60,
// })

//--- gsap.from() 메서드
// gsap.from(box, {
//   duration: 1.5,
//   opacity: 0,
//   scale: 0.3,
//   ease: "back",
// })

// gsap.from('.box1', {
//   duration: 3,
//   x: 200,
//   width: 400,
//   opacity: 0.2,
//   ease: "step(10)"
// })

// gsap.fromTo('.box2', 
//   {fontSize: 40,},
//   {duration: 3, x: 300, fontSize: 16}
// )

// gsap.set(".box3", {
//   x: 100,
//   width: 200,
//   backgroundColor: 'skyblue',
// })

//--- gsap.play(), .pause(), resume(), reverse(), restart()
// const tween = gsap.to(".box1", { duration: 8, x: 400, width: 400, paused: true, });

// document.querySelector("#play").onclick = function() { return tween.play(); }
// document.querySelector("#pause").onclick = function() { return tween.pause(); }
// document.querySelector("#resume").onclick = function() { return tween.resume(); }
// document.querySelector("#reverse").onclick = function() { return tween.reverse(); }
// document.querySelector("#restart").onclick = function() { return tween.restart(); }

//--- TimeLine
const tl = gsap.timeline();

tl.to(".box1", { duration: 3, x: 200, ease: 'steps(10)' });
tl.to(".box1", {duration: 3, y: 200, opacity: 1, });
tl.to(".box1", { duration: 3, x: 0, width: 200, backgroundColor: 'red', });
tl.to(".box1", { duration: 3, y: 0, height: 200, });
