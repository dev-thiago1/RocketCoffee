const logo = document.querySelector('.menu-hamburguer')
const links = document.querySelector('.list-nav')
const close = document.querySelector('.menu-close')

function activeMenu() {
    links.classList.toggle('activeMenu')
    logo.classList.add('menu-close')
    close.classList.remove('menu-close')
}

function closeMenu() {
    links.classList.toggle('activeMenu')
    logo.classList.remove('menu-close')
    close.classList.add('menu-close')
}

logo.addEventListener('click', activeMenu)
close.addEventListener('click', closeMenu)
