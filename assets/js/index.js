// header menu bar


let menuBar = document.querySelector('.menubar');
let closeBtn = document.querySelector('.closebtn');


menuBar.addEventListener('click', ()=>{
    menuBar.style.display = 'none'
    closeBtn.style.display = 'block';
})
closeBtn.addEventListener('click', ()=>{
    closeBtn.style.display = 'none'
    menuBar.style.display = 'block';
})