/*====================================
PORTFOLIO JAVASCRIPT
====================================*/

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /*====================================
    SMOOTH SCROLLING
    ====================================*/

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    window.scrollTo({

                        top: targetSection.offsetTop - 70,

                        behavior: "smooth"

                    });

                }

            }

        });

    });


    /*====================================
    ACTIVE NAVIGATION
    ====================================*/

    const sections = document.querySelectorAll("section");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

});
/*====================================
MOBILE MENU
====================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

/*====================================
SCROLL TO TOP BUTTON
====================================*/

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        if (scrollTopBtn) {

            scrollTopBtn.classList.add("active");

        }

    } else {

        if (scrollTopBtn) {

            scrollTopBtn.classList.remove("active");

        }

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*====================================
FADE-UP ANIMATION
====================================*/

const fadeElements = document.querySelectorAll(".fade-up");

function revealElements() {

    fadeElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

/*====================================
HEADER SHADOW ON SCROLL
====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
        header.style.background = "rgba(7,11,23,0.95)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(7,11,23,0.85)";

    }

});
/*====================================
TYPING EFFECT
====================================*/

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const words = [

        "Full Stack Developer",

        "Frontend Developer",

        "UI/UX Designer",

        "MERN Stack Learner"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, isDeleting ? 60 : 120);

    }

    typeEffect();

}

/*====================================
CONTACT FORM
====================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid red";

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        }

    });

}

/*====================================
PROJECT CARD HOVER EFFECT
====================================*/

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/*====================================
COPYRIGHT YEAR
====================================*/

const yearElement = document.querySelector(".year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

/*====================================
PAGE LOADED
====================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("Portfolio Loaded Successfully 🚀");
