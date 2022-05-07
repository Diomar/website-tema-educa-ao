// alterear os estilos da barra de navegação na rolagem

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// window.addEventListener('scroll', () => {
//     document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0)
// })

// Mostrar/Esconder perguntas frequentes
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Trocar o ícone quando abrir o card
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }

    })
})