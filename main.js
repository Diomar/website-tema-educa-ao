// alterear os estilos da barra de navegação na rolagem

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// window.addEventListener('scroll', () => {
//     document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
// })

