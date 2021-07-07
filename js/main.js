const btn_menu=document.querySelector('.nav_icon')
const nav=document.querySelector('.nav')

const clickHandler=()=>{
  nav.classList.toggle('nav_active')
  btn_menu.classList.toggle('nav_icon_active')
}

btn_menu.addEventListener('click',clickHandler)

const btn_learn=document.querySelector('.arch__project-btn')
if(btn_learn){
  btn_learn.addEventListener('click',()=>{
  document.querySelector('.arch__project-article').classList.toggle('arch__project-article-active')
  btn_learn.classList.toggle('arch__project-btn-disable')
})
}

//Gallery
const image_list=document.querySelectorAll('.photo-gallery-list img')
const list_length=image_list.length
let start_img=0
const btn_slide_next=document.querySelector('.photo-gallery-list')

const  checkImg=(index=start_img)=> {
  image_list.forEach(item=>item.classList.remove('active_img'))
  image_list[index].classList.add('active_img')
}
checkImg()

btn_slide_next.addEventListener('click',()=>{
 --start_img

  if(start_img >= list_length){
    start_img=0
    checkImg(start_img)
  } else if(start_img <= -1){
    start_img=list_length-1
    checkImg(start_img)
  } else(
    checkImg(start_img)
  )
})


