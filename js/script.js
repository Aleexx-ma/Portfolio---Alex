const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add("visible");
            }, index * 150);
        }
    });
}

window.addEventListener("scroll", showOnScroll);