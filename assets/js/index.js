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

// media query javascrip
let searchImage = document.querySelector('.search-image');
let searchBar = document.querySelector('.searchbar')
let input = document.querySelector('.input');

searchImage.addEventListener('click', ()=>{
    searchBar.classList.toggle = 'show';
     console.log('i am clicked')
    input.style.display = 'block';
})

// sidebar copyright

let date = document.querySelector('.date');
let footerDate = new Date().getFullYear();

date.textContent = footerDate;



// fetch the api detail

// fetch('https://api.themoviedb.org/3/configuration?api_key=6f88efd677e821e5e63075bf79e8eb54')
//     .then(res => res.json())
//     .then(completedata = map(values)
//     )


fetch('https://api.themoviedb.org/3/configuration?api_key=6f88efd677e821e5e63075bf79e8eb54')
.then(data => data.json())
.then(data=>console.log(data))