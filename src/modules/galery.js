const galery = () => {
    const background = document.querySelector('.overlay')
    const block = document.getElementById('documents')
    const icons = block.querySelectorAll('.sertificate-document')
    const overlays = block.querySelectorAll('.document-overlay')
    const body = document.querySelector('body')

    const loopVisible = (i) => {
        overlays[i].style.opacity = 1
    }
    const loopHidden = (i) => {
        overlays[i].style.opacity = 0
    }

    icons.forEach((icon, i) => {
        overlays[i].addEventListener('mouseenter', (e) => { 
            e.preventDefault()
            loopVisible(i) 
        })
        overlays[i].addEventListener('mouseout', (e) => { 
            e.preventDefault()
            loopHidden(i) 
        })
        overlays[i].addEventListener('click', (e) => { 
            e.preventDefault()
            let src = icon.getAttribute('href')
            backgroundVisible(src)
            // addModalDocument()
        })
    }) 
    
    
    const backgroundVisible = (e) => {
        background.style.display = 'block'
        const newElement = document.createElement('div') 
        newElement.classList.add('img-div')
        body.append(newElement)
        newElement.innerHTML = `<span title="Close" class="header-modal__close">x</span>`
        document.addEventListener('click', (e) => {
            if (e.target.closest('.overlay') || (e.target.closest(".header-modal__close"))) {
             newElement.remove()

            }     
        })    
     }
    //     let modal
    //     let img = '<img src="' + src + '" class="img-responsive" alt="">'
    //     modal.classList.add('services-modal')
    //     modal.innerHTML = img
    //     background.innerHTML = modal
    //     background.style.background = 'rgba(0, 0, 0, 0.45) url(' + src + ') center no-repeat'
    //     background.style.backgroundSize = 'auto 80%'
    


// const addModalDocument = () => {
//             background.style.display = "block"
    //         const modalDiv = document.createElement('div')
    //         modalDiv.classList.add('modal-img')
    //         background.append(modalDiv)
    //         modalDiv.innerHTML = `
    //         <span title="Close" class="header-modal__close">x</span>
    //         `
    //         document.addEventListener('click', (e) => {
    //             if (e.target.closest('.overlay') || e.target.closest(".header-modal__close")) {
    //                 modalDiv.remove()
                //  }
                

    //         })

    //         icons.forEach(imgDiv => {
    //             imgDiv.addEventListener('click', (e) => {
    //                 e.preventDefault()            
    //             })
    //         })
    //     }

   
}

export default galery