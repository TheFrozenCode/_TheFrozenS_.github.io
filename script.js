let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.logInNav')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})

