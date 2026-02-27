document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".book").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
        });
    });
});