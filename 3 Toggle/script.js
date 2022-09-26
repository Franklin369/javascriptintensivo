let toggleBtn =document.querySelector('.toggleBtn')
let container=document.querySelector('.container')
toggleBtn.onclick=function(){
    container.classList.toggle('active')
}