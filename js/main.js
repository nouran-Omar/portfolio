document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinkItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 100) {
            nav.style.padding = '15px 0';
            nav.style.background = 'rgba(26, 26, 29, 0.9)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.background = 'rgba(26, 26, 29, 0.7)';
        }
    });

    // Smooth Scrolling for Anchor Links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
            
    //         if (targetElement) {
    //             window.scrollTo({
    //                 top: targetElement.offsetTop - 80,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
    // Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // استثناء روابط التحميل من هذا الحدث
        if (this.getAttribute('download')) {
            return; // اترك السلوك الافتراضي يعمل
        }
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate Hero Title Words
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize Particle.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#A64D79"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6A1E55",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Projects Filter and Rendering
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    const projects = [
        {
            title: "World Explorer Website",
            category: "Bootstrap ",
            description: "A responsive travel website highlighting stunning destinations, vibrant galleries, and smooth navigation with a clean, modern design.",
            githubUrl: "https://github.com/nouran-Omar/World-Explorer",
            demoUrl: "#",
            imageUrl: "Home.png"
        },
        {
            title: "🔐 Modern Login Form",
            category: "JavaScript",
            description: "A stylish login & sign-up form with smooth toggle animations, built for modern UI lovers",
            githubUrl: "https://github.com/nouran-Omar/Login",
            demoUrl: "#",
            imageUrl: "siginup.png"
        },
        {
            title: "Portfolio UI Design",
            category: "ui",
            description: "Modern portfolio design in Figma",
            githubUrl: "#",
            demoUrl: "#",
            imageUrl: "images/project3.jpg"
        },
        {
            title: "Task Manager",
            category: "JavaScript",
            description: `✔️ Task Management - Create, edit, delete, and mark tasks as complete
📌 Priority & Categories - Organize by priority (High/Medium/Low) and categories (Work/Personal/Shopping/Other)`,
            githubUrl: "https://nouran-omar.github.io/TaskMaster",
            demoUrl: "#",
            imageUrl: "TODO.png"
        }
    ];

    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = projects
            .filter(project => filter === 'all' || project.category === filter)
            .map(project => `
                <div class="project-item" data-category="${project.category}">
                    <img src="${project.imageUrl}" alt="${project.title}" class="project-img">
                    <div class="project-overlay">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-category">${project.category}</p>
                        <div class="project-links">
                            <a href="${project.githubUrl}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i>
                            </a>
                            ${project.demoUrl !== '#' ? `
                            <a href="${project.demoUrl}" target="_blank" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
    }

    // Initial render
    renderProjects();

    // Filter projects
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });

    // Form Submission
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Thank you! Your message has been sent successfully.</p>
            `;
            document.body.appendChild(successMessage);
            
            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
                contactForm.reset();
            }, 5000);
        });
    }

    // Floating Elements Animation
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });

    // GSAP Animations
    gsap.from(".hero-image", {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".hero-text", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from(".nav-link", {
        duration: 1,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1
    });

    // Intersection Observer for Skills Progress Bars
    const skillProgressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
});