/*=========================================
        PORTFOLIO SCRIPT
=========================================*/

// ================= PRELOADER =================

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 800);
});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

// Close menu when clicking links

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ================= TYPING EFFECT =================

new Typed(".typing", {

    strings: [

        "Frontend Developer  who has knowledge of flutter and Figma ",

        "Figma Designer",

        "Creative Thinker",
        
        "Developer",

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1800,

    loop: true

});

// ================= STICKY NAVBAR =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        header.style.background = "rgba(15,23,42,.65)";
        header.style.boxShadow = "none";

    }

});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*=========================================
        SCROLL REVEAL EFFECT
=========================================*/

const revealElements = document.querySelectorAll(
    ".skill-card,.project-card,.certificate,.achievement-card,.contact-card,.timeline-content"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
        SKILL BAR ANIMATION
=========================================*/

const progressBars = document.querySelectorAll(".progress-fill");

const animateSkills = () => {

    progressBars.forEach((bar) => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

};

window.addEventListener("load", animateSkills);

/*=========================================
        ACHIEVEMENT COUNTER
=========================================*/

const counters = document.querySelectorAll(".achievement-card h3");

const runCounter = (counter) => {

    const target = parseFloat(counter.innerText);

    if (isNaN(target)) return;

    let value = 0;

    const increment = target / 80;

    const update = () => {

        value += increment;

        if (value < target) {

            if (target % 1 === 0) {
                counter.innerText = Math.ceil(value);
            } else {
                counter.innerText = value.toFixed(2);
            }

            requestAnimationFrame(update);

        } else {

            if (target % 1 === 0) {
                counter.innerText = target;
            } else {
                counter.innerText = target.toFixed(2);
            }

        }

    };

    update();

};

const achievementSection = document.querySelector(".achievements");

let counted = false;

window.addEventListener("scroll", () => {

    if (!achievementSection || counted) return;

    const top = achievementSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 150) {

        counters.forEach(runCounter);

        counted = true;

    }

});

/*=========================================
        CONTACT FORM
=========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();

        if (name === "" || email === "") {

            alert("Please fill in all required fields.");

            return;

        }

        alert(
            "Thank you for your message! This demo form is not connected to an email service yet."
        );

        form.reset();

    });

}

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn,.btn2").forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - diameter / 2}px`;

        circle.style.top = `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*=========================================
        NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.classList.add("shadow");

    } else {

        header.classList.remove("shadow");

    }

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(
    "%cPortfolio Developed by Sharanya M",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);

console.log(
    "%cUI/UX Designer | Frontend Developer",
    "color:white;font-size:14px;"
);
