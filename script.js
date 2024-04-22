// active section in the sticky menu
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes('#' + current)) {
            link.classList.add('active');
        }
    });

    sections.forEach(section => {
        if (section.getAttribute('id') === current) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 55; // height of the sticky menu

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const roles = ['student', 'programmer', 'developer', 'runner', 'orienteerer', 'rogalo'];
    const animatedText = document.getElementById('animated');
    let currentIndex = 0;

    function updateText() {
        animatedText.style.opacity = 0;

        setTimeout(() => {
            animatedText.textContent = roles[currentIndex];
            animatedText.style.opacity = 1;
            currentIndex = (currentIndex + 1) % roles.length;
        }, 500); // Wait for the fade out to complete before changing the text

        setTimeout(updateText, 3000); // Change text every 3 seconds
    }

    setTimeout(updateText, 1000); // Start the animation cycle
});
