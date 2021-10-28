const images = document.querySelectorAll("[data-src]");
function loadThatSucker(img){

    const src = img.getAttribute("data-src");
    if(!src)
    {
        return;
    }
    img.src = src;

}

const imgOptions = {threshold: 0,
    rootMargin: "0px 0px 200px 0px",};

const imgObserver = new IntersectionObserver((entries, imgObserver)) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            return;
        }
        else{
            loadThatSucker(entry.target);
            imgObserver.unobserve(entry.target);
        }

    }, imgOptions)
}
