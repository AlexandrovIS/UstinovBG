const bnt_menu=document.querySelector('.nav_icon')
const nav=document.querySelector('.nav')

const clickHandler=()=>{
  nav.classList.toggle('nav_active')
  bnt_menu.classList.toggle('nav_icon_active')
}

bnt_menu.addEventListener('click',clickHandler)

const bnt_learn=document.querySelector('.arch__project-btn')
if(bnt_learn){
  bnt_learn.addEventListener('click',()=>{
  document.querySelector('.arch__project-article').classList.toggle('arch__project-article-active')
  bnt_learn.classList.toggle('arch__project-btn-disable')

})
}


