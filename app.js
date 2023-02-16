const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
})

const clearActiveClasses = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }
}