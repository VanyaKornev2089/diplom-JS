const gamburger = () => {
    const navMenu = document.getElementById('navbar-collapse')

    document.addEventListener('click', (e) => {
        if ((e.target.closest('.navbar-toggle')) && (navMenu.classList.contains('collapse'))) {
            navMenu.classList.add('opened')
            navMenu.classList.remove('collapse')
        } else if ((e.target.closest('.navbar-toggle')) && (!navMenu.classList.contains('collapse'))) {
            navMenu.classList.remove('opened')
            navMenu.classList.add('collapse')
        }
    })
}

export default gamburger