const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

/* ===== Journalism Category Filter ===== */

const categoryButtons = document.querySelectorAll(".category-btn");
const newsCards = document.querySelectorAll(".news-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.getAttribute("data-category");

        /* Active button */
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        /* Filter cards */
        newsCards.forEach(card => {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
/* ===== Gallery Lightbox ===== */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector(".gallery-image");

        lightboxImage.src = image.src;
        lightbox.style.display = "flex";

    });

});

lightboxClose.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});