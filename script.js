//////////////////////////////
// FAMILLE AUTRAN - L'HERITAGE
// Script léger premium
//////////////////////////////

// -------------------------
// 1. MENU QUI CHANGE AU SCROLL
// -------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// -------------------------
// 2. ANIMATIONS AU SCROLL
// -------------------------

const faders = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.15
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// -------------------------
// 3. SMOOTH EXPERIENCE (optionnel léger)
// -------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});