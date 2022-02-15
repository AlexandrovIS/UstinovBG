const btn_menu=document.querySelector('.nav_icon')
const nav=document.querySelector('.nav')

const clickHandler=()=>{
  nav.classList.toggle('nav_active')
  btn_menu.classList.toggle('nav_icon_active')
}

btn_menu.addEventListener('click',clickHandler)

//Gallery
const image_list=document.querySelectorAll('.photo-gallery-list img')
const list_length=image_list.length
let counter=0

const range_slide_next=document.querySelector('.photo-gallery-list .next__img-range')
const range_slide_prev=document.querySelector('.photo-gallery-list .prev__img-range')
const btn_slide_prev=document.querySelector('.prev__img-btn')
const btn_slide_next=document.querySelector('.next__img-btn')
const alt_field=document.querySelector('.arch__photo-gallery-alt')

const  selectImg=(index=0)=> {
  image_list.forEach(item=>item.classList.remove('active_img'))
  image_list[index].classList.add('active_img')
  alt_field.innerHTML=image_list[index].alt
   
}

const checkIndex=(index,func,length)=>{
  counter+=index
  
  if(counter >= length){
    counter=0
    func(counter)
  } else if(counter <= -1){
    counter=length-1
    func(counter)
  } else(
    func(counter)
  )
}

if(image_list.length>0){
  selectImg()
  range_slide_prev.addEventListener('click',checkIndex.bind(this,-1,selectImg,list_length))
  btn_slide_prev.addEventListener('click',checkIndex.bind(this,-1,selectImg,list_length))
  range_slide_next.addEventListener('click',checkIndex.bind(this,1,selectImg,list_length))
  btn_slide_next.addEventListener('click',checkIndex.bind(this,1,selectImg,list_length))
}

//biography slider
const article_list=document.querySelectorAll('.biography-section .biography-article-slide')
const article_list_lenght=article_list.length
const btn_article_prev=document.querySelector('.biography-article-bnt-prev')
const btn_article_next=document.querySelector('.biography-article-bnt-next')

const selectArticle=(index=0)=>{
  article_list.forEach(item=>item.classList.remove('biography-article-slide-active'))
  article_list[index].classList.add('biography-article-slide-active')
}

if(article_list.length>0){
  selectArticle()
  btn_article_prev.addEventListener('click',checkIndex.bind(this,-1,selectArticle,article_list_lenght))
  btn_article_next.addEventListener('click',checkIndex.bind(this,1,selectArticle,article_list_lenght))
}



