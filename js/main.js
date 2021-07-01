const bnt_menu=document.querySelector('.nav_icon')
const nav=document.querySelector('.nav')

const clickHandler=()=>{
  nav.classList.toggle('nav_active')
  bnt_menu.classList.toggle('nav_icon_active')
}

bnt_menu.addEventListener('click',clickHandler)