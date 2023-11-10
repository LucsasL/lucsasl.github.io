const Menu = document.querySelector('span.material-icons')
const MenuItems = document.querySelector('div.social-links')

function ChangeSize() {
    if (window.innerWidth >= 768) {
        MenuItems.style.display = 'block'
    } else {
        MenuItems.style.display = 'none'
    }
}

function clickMenu() {
    if (MenuItems.style.display == 'block') {
        MenuItems.style.display = 'none'
    } else {
        MenuItems.style.display = 'block'
    }
}