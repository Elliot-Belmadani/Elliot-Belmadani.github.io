window.addEventListener('scroll', () => {
    let navbar = document.getElementById('navbar')

    navbar.classList.toggle('navbar-scrolled', window.scrollY > 20)
})