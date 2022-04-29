const modal = () => {
    const bacground = document.querySelector('.overlay')
    const modalContent = document.querySelector('.header-modal')


    document.addEventListener('click', (e) => {
        if (e.target.closest('.button > .fancyboxModal')) {
            bacground.style.display = "block"
            modalContent.style.display = "block"
        } else if (e.target.closest('.header-modal__close')) {
            bacground.style.display = ""
            modalContent.style.display = ""
        } else if (e.target.closest('.overlay')) {
            bacground.style.display = ""
            modalContent.style.display = ""
        }
    })
}

export default modal