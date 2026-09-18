/* ===================================
   MAIN JAVASCRIPT
   =================================== */

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Render dynamic content
    renderAnnouncementBar();
    renderTrustPoints();
    renderCollections();
    renderProducts();
    renderOccasions();
    renderTestimonials();
    renderGallery();
    renderFAQ();
    renderFooterSocial();

    // Initialize features
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initScrollReveal();
    initTestimonialCarousel();
    initFAQAccordion();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===================================
// RENDER ANNOUNCEMENT BAR
// ===================================
function renderAnnouncementBar() {
    const announcementText = document.querySelector('.announcement-text');
    if (announcementText) {
        announcementText.textContent = announcement;
    }
}

// ===================================
// RENDER TRUST POINTS
// ===================================
function renderTrustPoints() {
    const trustGrid = document.getElementById('trust-grid');
    if (!trustGrid) return;

    trustGrid.innerHTML = trustPoints.map(point => `
        <div class="trust-item fade-in">
            <i data-lucide="${point.icon}"></i>
            <h3>${point.title}</h3>
            <p>${point.description}</p>
        </div>
    `).join('');
}

// ===================================
// RENDER COLLECTIONS
// ===================================
function renderCollections() {
    const collectionsGrid = document.getElementById('collections-grid');
    if (!collectionsGrid) return;

    collectionsGrid.innerHTML = collections.map(collection => `
        <div class="collection-card fade-in" onclick="openWhatsApp('${collection.message.replace(/'/g, "\\'")}')">
            <div class="collection-image">
                <img src="${collection.image}" alt="${collection.title}" loading="lazy">
            </div>
            <div class="collection-content">
                <h3 class="collection-title">${collection.title}</h3>
                <p class="collection-description">${collection.description}</p>
                <span class="collection-link">
                    Explore
                    <i data-lucide="arrow-right"></i>
                </span>
            </div>
        </div>
    `).join('');
}

// ===================================
// RENDER PRODUCTS
// ===================================
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <button class="btn btn-primary product-button" onclick="openWhatsApp(generateProductMessage('${product.name.replace(/'/g, "\\'")}'))">
                    <i data-lucide="message-circle"></i>
                    Enquire on WhatsApp
                </button>
            </div>
        </div>
    `).join('');
}

// ===================================
// RENDER OCCASIONS
// ===================================
function renderOccasions() {
    const occasionsGrid = document.getElementById('occasions-grid');
    if (!occasionsGrid) return;

    occasionsGrid.innerHTML = occasions.map(occasion => `
        <div class="occasion-card fade-in" onclick="openWhatsApp(generateOccasionMessage('${occasion.name.replace(/'/g, "\\'")}'))">
            <i class="occasion-icon" data-lucide="${occasion.icon}"></i>
            <p class="occasion-name">${occasion.name}</p>
        </div>
    `).join('');
}

// ===================================
// RENDER TESTIMONIALS
// ===================================
function renderTestimonials() {
    const carousel = document.getElementById('testimonials-carousel');
    if (!carousel) return;

    carousel.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial ${index === 0 ? 'active' : ''}" data-index="${index}">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">— ${testimonial.author}</p>
            ${testimonial.occasion ? `<p class="testimonial-occasion">${testimonial.occasion}</p>` : ''}
        </div>
    `).join('');
}

// ===================================
// RENDER GALLERY
// ===================================
function renderGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryImages.map(image => `
        <div class="gallery-item fade-in">
            <img src="${image.url}" alt="${image.alt}" loading="lazy">
        </div>
    `).join('');
}

// ===================================
// RENDER FAQ
// ===================================
function renderFAQ() {
    const faqList = document.getElementById('faq-list');
    if (!faqList) return;

    faqList.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item fade-in">
            <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
                <span>${faq.question}</span>
                <i data-lucide="chevron-down"></i>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <div class="faq-answer-content">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');
}

// ===================================
// RENDER FOOTER SOCIAL
// ===================================
function renderFooterSocial() {
    const footerSocial = document.getElementById('footer-social');
    if (!footerSocial) return;

    let socialHTML = '';

    if (businessConfig.instagram) {
        socialHTML += `
            <a href="${businessConfig.instagram}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i data-lucide="instagram"></i>
            </a>
        `;
    }

    if (businessConfig.facebook) {
        socialHTML += `
            <a href="${businessConfig.facebook}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i data-lucide="facebook"></i>
            </a>
        `;
    }

    footerSocial.innerHTML = socialHTML;
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) return;

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');

        // Toggle icons
        if (menuIcon && closeIcon) {
            menuIcon.style.display = isActive ? 'none' : 'block';
            closeIcon.style.display = isActive ? 'block' : 'none';
        }

        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';

            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';

            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';

            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    });
}

// ===================================
// NAVBAR SCROLL BEHAVIOR
// ===================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Utility function for programmatic smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// ===================================
// TESTIMONIAL CAROUSEL
// ===================================
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (testimonials.length === 0) return;

    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });

        if (testimonials[index]) {
            testimonials[index].classList.add('active');
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }

    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// ===================================
// FAQ ACCORDION
// ===================================
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);

            // Re-initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });
}

// ===================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Initialize active nav after a short delay to ensure proper setup
setTimeout(initActiveNav, 500);

// ===================================
// RELOAD LUCIDE ICONS
// ===================================
// Re-initialize Lucide icons after dynamic content is loaded
setTimeout(() => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}, 100);
