// script.js

// 1. Dynamic Navigation Highlighting
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// 2. Form Validation (For the Contact Page)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (name === "" || email === "" || message === "") {
                alert("All fields must be filled out.");
                event.preventDefault(); // Prevent form submission
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault(); // Prevent form submission
            }
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});

// 3. Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});
