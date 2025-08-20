// Form validation for contact page
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name && email) {
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Mobile menu toggle
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.classList.add('menu-toggle');

document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add current year to footer
    document.querySelector('footer p').innerHTML = 
        &copy; ${new Date().getFullYear()} Epem Church. All rights reserved.;
    
    // Responsive nav
    if(window.innerWidth <= 768) {
        document.querySelector('nav').style.display = 'none';
    }
});