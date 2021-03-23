const camera = document.querySelector('.camera');

camera.addEventListener.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX);
    let yAxis = (window.innerHeight / 2 - e.pageY);
    camera.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});