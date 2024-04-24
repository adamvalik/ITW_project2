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
        }, 500);

        setTimeout(updateText, 3000); 
    }

    setTimeout(updateText, 1000); 
});


document.addEventListener('DOMContentLoaded', (event) => {
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');

    burger.addEventListener('click', () => {
        links.classList.toggle('active');
    });
});
