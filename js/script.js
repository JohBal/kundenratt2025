// Denna fil skall innehålla JavaScript (JS)

const stickOffset = 1 //Offset from nav top positon to start sticking the element
const positionOffset = -5 //Positon offset of the element when sticking

const nav = document.querySelector('nav')

document.body.onscroll = () => {
    if (document.body.clientWidth >= 600 && window.scrollY > nav.scrollHeight + stickOffset - positionOffset) {
        nav.style.position = 'fixed'
        nav.style.height = 'calc(11%)'
        nav.style.transform = 'translate(0, ' + positionOffset + 'px)'
    } else if (document.body.clientWidth < 600 || window.scrollY <= nav.scrollHeight + stickOffset) {
        nav.style.position = 'static'
        nav.style.height = null
    }
}

const contactForm = document.getElementById('contact')
const inputs = document.querySelectorAll('input,textarea')

inputs.forEach((input) => {
    input.onchange = () => {
        if (input.value && input.value != '') {
            input.setAttribute('value', input.value)
        } else {
            input.removeAttribute('value')
        }
    }
})