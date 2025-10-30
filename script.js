// ===== INITIALIZE AOS =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ===== MOBILE NAV MENU =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.querySelector("i").classList.toggle("fa-bars");
  menuToggle.querySelector("i").classList.toggle("fa-times");
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id");
    }
  });

  navLinksItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// ===== THEME TOGGLE =====
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  
  // Save theme preference
  localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
}

// ===== TYPEWRITER EFFECT =====
const typewriter = document.querySelector(".typewriter");
const phrases = ["Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 200);
  }
}

type();

// ===== INITIALIZE SKILL LEVELS =====
document.querySelectorAll(".skill-level").forEach(skill => {
  const level = skill.dataset.level;
  skill.style.setProperty("--level", level / 100);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  // Here you would typically send the form data to a server
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // For demonstration, log the data
  console.log("Form submitted:", data);
  
  // Show success message
  alert("Message sent successfully!");
  contactForm.reset();
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.transform = "translateY(0)";
    header.style.background = "rgba(22, 27, 34, 0.9)";
  } else if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
    header.style.background = "rgba(22, 27, 34, 1)";
  }
  
  lastScroll = currentScroll;
});
