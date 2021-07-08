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
let start_op=1

const range_slide_next=document.querySelector('.photo-gallery-list .next__img-range')
const range_slide_prev=document.querySelector('.photo-gallery-list .prev__img-range')
const btn_slide_prev=document.querySelector('.prev__img-btn')
const btn_slide_next=document.querySelector('.next__img-btn')
const alt_field=document.querySelector('.arch__photo-gallery-alt')

const  selectImg=(index=start_img)=> {
  image_list.forEach(item=>item.classList.remove('active_img'))
  image_list[index].classList.add('active_img')
  alt_field.innerHTML=image_list[index].alt
}

const selectOpacityImg=(index=start_op)=>{
  image_list[index].style.opacity=1;
  console.log(index)
}

const checkIndex=num=>{
  start_img+=num

  if(start_img >= list_length){
    start_img=0
    selectImg(start_img)
  } else if(start_img <= -1){
    start_img=list_length-1
    selectImg(start_img)
  } else(
    selectImg(start_img)
  )
}

const checkIndexOpacity=(num)=>{
  start_op+=num

  if(start_op >= list_length){
    start_op=0
    selectOpacityImg(start_op)
  } else if(start_op <= -1){
    start_op=list_length-1
    selectOpacityImg(start_op)
  } else(
    selectOpacityImg(start_op)
  )
}

if(image_list.length>0){
  selectImg()
  selectOpacityImg()
  range_slide_prev.addEventListener('click',checkIndex.bind(this,-1))
  btn_slide_prev.addEventListener('click',checkIndex.bind(this,-1))
  range_slide_next.addEventListener('click',checkIndex.bind(this,1))
  btn_slide_next.addEventListener('click',checkIndex.bind(this,1))

  range_slide_next.addEventListener('click',checkIndexOpacity.bind(this,1))

}








