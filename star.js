const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
// const open = document.getElementsByClassName('open')
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    btn.classList.toggle('no-scroll')
    btn.addEventListener('click', navToggle)
}

navToggle();
// btn.addEventListener('click', (e) => {
//     nav.classList.toggle( 'hidden');
//     btn.classList.toggle('open');


// });