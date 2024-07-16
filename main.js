const ham = document.getElementById('ham');
const close = document.getElementById('close')
const mobnav = document.querySelector('.mob-nav')

ham.addEventListener('click', ()=>{
    mobnav.style.display = 'block'
})
close.addEventListener('click', ()=>{
    mobnav.style.display="none"
})