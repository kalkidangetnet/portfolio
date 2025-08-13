//Updating navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
function activateNavLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', activateNavLink);



//Bg-video speed control
const video = document.getElementById("bg-video");
video.playbackRate = 0.75; 



//Typing loop
const texts = [
  "Electrical Engineering Student",
  "IoT Enthusiast",
  "Smart Device Developer"
];
let count = 0;
let index = 0;
let isDeleting = false;
let currentText = "";
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterTyping = 2000;
const pauseAfterDeleting = 500;
function type() {
  const typedText = document.getElementById("typed-text");
  currentText = texts[count];
  if (!isDeleting) {
    typedText.textContent = currentText.substring(0, index+1);
    index++;
    if (index === currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseAfterTyping); 
      return
    }
  } else {
    typedText.textContent = currentText.substring(0, index-1);
    index--;
    if (index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length; 
      setTimeout(type, pauseAfterDeleting); 
      return;
    }
  }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
document.addEventListener("DOMContentLoaded", () => {
  type();
});



// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



//Project section toggle
function showProjects(type) {
const groupContent = document.getElementById("group-projects");
const personalContent = document.getElementById("personal-projects");
const buttons = document.querySelectorAll(".tab-button");
buttons.forEach(btn => btn.classList.remove("active"));
if (type === 'group') {
  groupContent.classList.remove("hidden");
  personalContent.classList.add("hidden");
  buttons[0].classList.add("active");
} else {
  groupContent.classList.add("hidden");
  personalContent.classList.remove("hidden");
  buttons[1].classList.add("active");
}
}



//Scroll reveal for project cards
ScrollReveal().reveal('.project-card', {
  interval: 200,  
  origin: 'bottom',
  distance: '40px',
  duration: 800
});



//Card slider
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;
function loadShow(){
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for(var i = active + 1; i < items.length; i++){
  stt++;
  items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
  items[i].style.zIndex = -stt;
  items[i].style.filter = 'blur(5px)';
  items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for(var i = active - 1; i >= 0; i--){
  stt++;
  items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
  items[i].style.zIndex = -stt;
  items[i].style.filter = 'blur(5px)';
  items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function(){
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick = function(){
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}



// Certificates Scroll Reveal
ScrollReveal().reveal('.certificate-card', {
  origin: 'bottom',      
  distance: '40px',      
  duration: 800,         
  easing: 'ease-out',    
  interval: 150,         
});



//Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
const scrollFunction = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
window.onscroll = scrollFunction;
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}