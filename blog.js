const menuBar = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
menuBar.onclick=()=>{
  menuBar.classList.toggle("bx-x");
  navBar.classList.toggle("active");

}
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded");

    const blogCards = document.querySelectorAll(".blog-card");
    
    blogCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
        });
    });

    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
const backToHomeButton = document.getElementById("backToHome");
    backToHomeButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    document.getElementById("backToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    const toggleButton = document.getElementById("dark-mode-toggle");
        const body = document.body;
        
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });

        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
        }