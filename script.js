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
    const menuLinks = links.querySelectorAll('a'); // Assuming your links are <a> elements

    // Toggle menu visibility when the hamburger icon is clicked
    burger.addEventListener('click', () => {
        links.classList.toggle('active');
    });

    // Add an event listener to each link in the menu
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close the menu when a link is clicked
            if (links.classList.contains('active')) {
                links.classList.remove('active');
            }
        });
    });
});


function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
function animateCounterIfVisible() {
    document.querySelectorAll('.counter').forEach(counter => {
        if (isElementVisible(counter) && !counter.classList.contains('animated')) {
        animateValue(counter, parseInt(counter.dataset.target));
        counter.classList.add('animated');
        }
    });
}

function animateValue(obj, end) {
    let current = parseInt(obj.textContent);
    const increment = end > current ? 6 : -1;
    
    const step = () => {
        current += increment;
        obj.textContent = current;
        
        if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
            setTimeout(step, 1);
        }
    };
    
    step();
}

// Listen for scroll events
window.addEventListener('scroll', animateCounterIfVisible);

// Initial check
animateCounterIfVisible();
  