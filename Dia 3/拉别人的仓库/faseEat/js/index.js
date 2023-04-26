// 显示动画效果(懒加载)
const revealElement = document.querySelectorAll("[data-reveal]")
const revealCB = function () {
  revealElement.forEach(function (item) {
    if (item.getBoundingClientRect().top < window.innerHeight / 1.2) {
        item.classList.add('revealed')
    }
  })
}
window.addEventListener('load',revealCB)
window.addEventListener('scroll',revealCB)
//header固定效果
const header = document.querySelector('.header')
const fixCB = function(){
    if(window.scrollY>200){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}
window.addEventListener('scroll',fixCB)