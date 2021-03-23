const animation = document.querySelector(".animation");



animation.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  animation.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
animation.addEventListener('mouseenter', (e) => {
   animation.style.transition = 'none';
});


//Animate Out
animation.addEventListener('mouseleave', (e) => {
    animation.style.transition = "0.5s ease";
    animation.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
