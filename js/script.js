let menu = document.querySelector('#menu-icon');
let nalist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nalist.classList.toggle('open')
}