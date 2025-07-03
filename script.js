// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            navbar.classList.remove('show');
        }
    });
});

// Portfolio filter
const filterButtons = document.querySelectorAll('[data-filter]');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const themeToggle = document.getElementById('themeToggle');

// wrap portfolio item text in spans for letter animation
portfolioItems.forEach(item => {
    const text = item.textContent.trim();
    item.textContent = '';
    [...text].forEach((ch, idx) => {
        const span = document.createElement('span');
        span.textContent = ch;
        span.style.setProperty('--delay', `${idx * 0.05}s`);
        item.appendChild(span);
    });
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Toggle futuristic theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('futuristic');
});

// Interactive portfolio items
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        setTimeout(() => item.classList.remove('active'), 4000);
    });
});

// Reveal sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(sec => observer.observe(sec));

// Animate skill bars when they enter the viewport
const skillsSection = document.querySelector('#about .skills');
if (skillsSection) {
    const skillBars = skillsSection.querySelectorAll('.progress div');
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const w = bar.dataset.width;
                    if (w) bar.style.width = w;
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    skillObserver.observe(skillsSection);
}

// Carousel functionality
const track = document.querySelector('.carousel-track');
if (track) {
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    slides.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('hover'));
        card.addEventListener('mouseleave', () => card.classList.remove('hover'));
    });
}

// Dropdown
const dropToggle = document.querySelector('.drop-toggle');
const dropContent = document.querySelector('.drop-content');
if (dropToggle && dropContent) {
    dropToggle.addEventListener('click', () => {
        dropContent.classList.toggle('show');
    });
}

// Slide bar / sidebar
const sidePanel = document.querySelector('.side-panel');
if (sidePanel) {
    // ensure sidebar is visible on load
    sidePanel.classList.add('show');
}
