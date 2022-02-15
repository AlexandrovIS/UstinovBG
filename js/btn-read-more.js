const btn=document.querySelector('.arch__project .arch__project-btn')
const paragraphs=document.querySelectorAll('.arch__project .arch__project-article p')
const article=document.querySelector('.arch__project-article')


if(paragraphs.length){
 btn.classList.add('active-btn')
 const height=paragraphs[0].getBoundingClientRect().height


 article.style=`max-height:${height+3}px`

 btn.addEventListener('click',()=>{
   article.style=`max-height:${paragraphs[paragraphs.length-1].getBoundingClientRect().bottom}px`
   btn.classList.remove('active-btn')
 }) 
} 


