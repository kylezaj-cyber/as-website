window.addEventListener('scroll', function() {
    const h1Page1 = document.querySelector('#page1 h1');
    const h1Page2 = document.querySelector('#page2 h1');
    const vh = window.innerHeight;
    
    // Hide page1 h1 when scrolled down a bit
    if (window.scrollY > 50) {
        h1Page1.style.opacity = '0';
    } else {
        h1Page1.style.opacity = '1';
    }
    
    // Hide page2 h1 when scrolled past page1
    if (window.scrollY > vh) {
        h1Page2.style.opacity = '0';
    } else {
        h1Page2.style.opacity = '1';
    }
});
// Intersection Observer for videos
const videos = document.querySelectorAll('video');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videos.forEach(video => {
    observer.observe(video);
});