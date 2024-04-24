// find out the current section (on the viewport) and change the active class in the navigation menu
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    // get the current section when scrolling
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // add active class to the nav link to mark it
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes('#' + current)) {
            link.classList.add('active');
        }
    });
});


// animated text on the home page
document.addEventListener('DOMContentLoaded', function () {
    const states = ['student', 'programmer', 'developer', 'runner', 'orienteerer', 'rogalo'];
    const animatedText = document.getElementById('animated');
    let currentIndex = 0;

    // change the role every 3 seconds
    function updateText() {
        animatedText.style.opacity = 0;

        setTimeout(() => {
            animatedText.textContent = states[currentIndex];
            animatedText.style.opacity = 1;
            currentIndex = (currentIndex + 1) % states.length;
        }, 500); // 0.5s fade out/in effect

        setTimeout(updateText, 3000); // update the text every 3 seconds
    }

    setTimeout(updateText, 1000); // start the animation after 1 second
});


// hamburger menu
document.addEventListener('DOMContentLoaded', (event) => {
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');
    const navLinks = links.querySelectorAll('nav ul li a');

    // toggle the visibility when clicking the button
    burger.addEventListener('click', () => {
        links.classList.toggle('active');
    });

    // close the menu when a section is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (links.classList.contains('active')) {
                links.classList.remove('active');
            }
        });
    });
});



// --- counter animation --- //

// check if the counter is visible on the screen
function isElementVisible(el) {
    const counter = el.getBoundingClientRect();
    return (
      counter.top >= 0 &&
      counter.left >= 0 &&
      counter.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      counter.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// if the counter is visible (and has not been already animated), start the animation
function animateCounterIfVisible() {
    document.querySelectorAll('.counter').forEach(counter => {
        if (isElementVisible(counter) && !counter.classList.contains('animated')) {
            animateValue(counter, parseInt(counter.dataset.target));
            counter.classList.add('animated');
        }
    });
}

// the animation itself
function animateValue(obj, end) {
    let current = 0; // start from 0
    

    const step = () => {
        // increase by 5 
        if (end > current) {
            current += 5;
        }
        // decrease by 1 if the target was overshot
        else {
            current -= 1;
        }
        // update the text content
        obj.textContent = current;
        
        // check if the target value has been reached
        if (current != end) {
            setTimeout(step, 1);
        }
    };
    step();
}

// start the animation when the counter is visible
window.addEventListener('load', animateCounterIfVisible);
window.addEventListener('scroll', animateCounterIfVisible);
  