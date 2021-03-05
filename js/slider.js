const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.blog__nextButton');
const prev = document.querySelector('.blog__prevButton');
let direction;

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  if(document.body.offsetWidth <= 700) {
    slider.style.transform = 'translate(-20%)';  
  } else if(document.body.offsetWidth >= 701) {
    slider.style.transform = 'translate(-10%)'; 
  }
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';    
  if(document.body.offsetWidth <= 700) {
    slider.style.transform = 'translate(20%)';  
  } else if(document.body.offsetWidth >= 701) {
    slider.style.transform = 'translate(10%)'; 
  }
  
});

slider.addEventListener('transitionend', function() {
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  })
}, false);