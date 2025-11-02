// Add hover or click functionality for dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    // Show on hover
    dropdown.addEventListener("mouseenter", () => {
        dropdownContent.style.display = "block";
    });
    dropdown.addEventListener("mouseleave", () => {
        dropdownContent.style.display = "none";
    });

    // (Optional) Toggle on click for mobile
    const dropBtn = dropdown.querySelector(".dropbtn");
    dropBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // toggle visibility
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});

