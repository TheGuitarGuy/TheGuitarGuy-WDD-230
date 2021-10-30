const images = document.querySelectorAll('[data-src]');

// Preload each image
function preloadImage(img) {
  const src = img.getAttribute('data-src');
  img.removeAttribute('data-src');
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 1,
  rootMargin: '0px 0px 100px 0px',
};

const imgObserver = new IntersectionObserver((images, imgObserver) => {
  images.forEach((img) => {
    if (!img.isIntersecting) {
      return;
    } else {
      preloadImage(img.target);
      imgObserver.unobserve(img.target);
    }
  });
}, imgOptions);

// observe each Image
images.forEach((image) => {
  imgObserver.observe(image);
});

function myFunction() {
    var x = document.getElementById("navbar");
    var y = screen.width;
    if (x.style.display === "block"){
      x.style.display = 'none';
    } else {
      x.style.display = "block";
    }
}