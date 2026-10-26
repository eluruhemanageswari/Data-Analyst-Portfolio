
// Show a welcome message in the browser console
console.log("Welcome to Hema's Data Analyst Portfolio!");

// Highlight the active navigation link when clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Display the current year in the footer
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Hema Nageswari | Data Analyst Portfolio`;
}
