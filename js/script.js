const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')  // If the class isn't there then add it, if it is there then remove it
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})