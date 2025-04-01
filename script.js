
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#74c69d',
                textColor: '#959a9e'
            },
            fontFamily: {
                crimson: ["Crimson Text", "serif"],
                workSans: ["Work Sans", "sans-serif"]
            }
        }
    }
};
document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});

// Open contact popup (Desktop)
document.getElementById("contact-btn").addEventListener("click", function () {
    openContactPopup();
});

// Open contact popup (Mobile) and close mobile menu
document.getElementById("contact-btn-mobile").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden"); // Close mobile menu
    openContactPopup();
});

// Function to open the popup and reset form fields
function openContactPopup() {
    document.getElementById("contact-popup").classList.remove("hidden");
    resetForm(); // Reset form fields every time the popup opens
}

// Close contact popup
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("contact-popup").classList.add("hidden");
});

// Store submitted data
let submittedData = [];

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    // Store data in the array
    submittedData.push(formData);
    console.log("Stored Data:", submittedData);

    // Hide popup after submission
    document.getElementById("contact-popup").classList.add("hidden");

    // Show success message if exists
    const successMessage = document.getElementById("success-message");
    successMessage.classList.remove("hidden");

    // Hide success message after 2 seconds
    setTimeout(() => {
        successMessage.classList.add("hidden");
    }, 2000);
});

// Reset form fields function
function resetForm() {
    document.getElementById("contact-form").reset();
}

// Close popup when clicking outside of it
document.getElementById("contact-popup").addEventListener("click", function (event) {
    if (event.target === this) {
        this.classList.add("hidden");
    }
});
// Team Members Data
// Team Members Data (Extended List)
const teamMembers = [
    { name: "Peg Legge", role: "CEO", img: "assests/images/Group 14.svg" },
    { name: "Richard Guerra", role: "CTO", img: "assests/images/Group 15.svg" },
    { name: "Alexandra Stolz", role: "DESIGNER", img: "assests/images/Group 15 (1).svg" },
    { name: "Janet Bray", role: "DEVELOPER", img: "assests/images/Group 15 (2).svg" },
    { name: "Michael Scott", role: "MANAGER", img: "assests/images/Group 15 (2).svg" },
    { name: "Dwight Schrute", role: "ASSISTANT", img: "assests/images/Group 15 (2).svg" },
    { name: "Pam Beesly", role: "ARTIST", img: "assests/images/Group 15 (2).svg" },
    { name: "Jim Halpert", role: "SALES", img: "assests/images/Group 15 (2).svg" }
];

// Get container
const teamContainer = document.getElementById("team-container");

// Generate Cards Dynamically
teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-2xl rounded-lg p-8 w-64 h-70 text-center space-y-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100 flex-shrink-0";
    card.innerHTML = `
        <img src="${member.img}" class="mx-auto w-32 h-32 object-cover mb-4" alt="${member.name}">
        <h5 class="font-bold text-xl text-left">${member.name}</h5>
        <p class="text-gray-500 text-left">${member.role}</p>
    `;
    teamContainer.appendChild(card);
});

// Scrolling Functionality
const scrollAmount = 300;

document.getElementById("scroll-left").addEventListener("click", () => {
    teamContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

document.getElementById("scroll-right").addEventListener("click", () => {
    teamContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
