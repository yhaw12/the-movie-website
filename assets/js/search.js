const searchInput = document.querySelector('#input');

searchInput.addEventListener('keyup', (e)=>{
    wvw.filter(e.target.value.tostring())
})