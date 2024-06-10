document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    const slides = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    // Function to handle scroll event
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Function to handle active link highlighting
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Function to handle slider
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * index}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menuButton'); // Get the menu button
    const body = document.body;

    // Function to handle menu button click event
    menuButton.addEventListener('click', function () {
        // Toggle background color and font
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
        }
    });
});
