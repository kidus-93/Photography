document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("animatedText");

    // Trigger animation after a delay
    setTimeout(() => {
        text.style.animation = "fadeSlideIn 1s ease-out forwards";
    }, 500);
});
