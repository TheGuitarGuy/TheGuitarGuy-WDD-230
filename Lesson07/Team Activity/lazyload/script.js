
const images = document.querySelectorAll('[data-src]');

const preloadImage = (img) => {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshod: 0,
    rootMargin: '0px 0px -400px 0px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animation = 'bounce ease-in 500ms'
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach((image) => {
    imgObserver.observe(image)
})