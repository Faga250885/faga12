window.addEventListener('scroll', () => {
    const animatedImage = document.querySelector('.animated-image');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 2) {
        animatedImage.classList.add('slide-in-animation');
    }
});

window.addEventListener('scroll', () => {
    const animatedImage = document.querySelector('.animated-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 2) {
        animatedImage.classList.add('slide-in-animation2');
    }
});