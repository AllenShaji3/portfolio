
const contactForm = document.querySelector('.contactForm');
const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-bar')
const content = document.getElementById('content')
const navLi = document.querySelectorAll('.nav-links li')
const media = document.getElementById('media')
const navi = document.getElementById('navigation')
const navIcon = document.getElementById('navIcon')



hamburger.addEventListener('click', ()=> {
    media.classList.remove("show")
    navUl.classList.remove("hide")
    content.classList.remove("show")
    navUl.classList.toggle("show")
    content.classList.toggle("hide")
    media.classList.toggle("hide")
    navi.classList.toggle("show")
    navIcon.classList.toggle("fa-bars")
    navIcon.classList.toggle("fa-times")


   
})
navLi.forEach(li => {
    li.addEventListener('click',()=>{
        navUl.classList.remove("show")
    content.classList.remove("hide")
    media.classList.remove("hide")
    navi.classList.remove("show")
    
    navIcon.classList.toggle("fa-bars")
    navIcon.classList.toggle("fa-times")
        navUl.classList.toggle("hide")
        content.classList.toggle("show")
        media.classList.toggle("show")
    })
    
});

contactForm.addEventListener('submit', (e)=>{
   
   alert('Successfully sent the message');
   
})
