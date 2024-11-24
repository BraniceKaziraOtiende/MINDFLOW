// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset for sticky navbar
                behavior: 'smooth'
            });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});

// Fade-in Effect for Workshop Cards
const workshopCards = document.querySelectorAll('.workshop');

const observerOptions = {
    root: null, // Uses the viewport
    threshold: 0.1, // Trigger when 10% is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
workshopCards.forEach(card => observer.observe(card));

// Form Validation for Registration
const registrationForm = document.querySelector('.registration form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const workshop = document.getElementById('workshop').value;

    if (!name || !email || !workshop) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Thank you for registering, ${name}! We'll send details to ${email}.`);
    registrationForm.reset(); // Clear the form after successful submission
});

// Email Validation Helper Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Hero Button Scroll to Workshops
document.querySelector('.hero-btn').addEventListener('click', () => {
    document.querySelector('.upcoming-workshops').scrollIntoView({
        behavior: 'smooth'
    });
});
