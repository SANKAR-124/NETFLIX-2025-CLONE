let sign = document.getElementById("Sign");
sign.addEventListener("click", () => {
    window.open("signin.html", "_blank"); // Opens signin.html in a new tab
});

// let mail=document.getElementById("email");
document.getElementById('emailform').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const email = emailInput.value.trim();

    // Check if email ends with @gmail.com
    if (!email.endsWith('@gmail.com')) {
        // Show error message
        errorMessage.classList.add('show');
        emailInput.style.borderColor = '#d32f2f';
        return;
    }

    // Hide error message if it was showing
    errorMessage.classList.remove('show');
    emailInput.style.borderColor = '#4caf50';

    // Email is valid, open new page
    // You can change this URL to wherever you want to redirect
    window.open('started.html', '_blank');

    // Optional: Reset the form
    emailInput.value = '';
    emailInput.style.borderColor = '#ddd';
});

// Hide error message when user starts typing
document.getElementById('email').addEventListener('input', function () {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.remove('show');
    this.style.borderColor = '#ddd';
});



document.getElementById('emailform1').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email1');
    const errorMessage = document.getElementById('errorMessage1');
    const email = emailInput.value.trim();

    // Check if email ends with @gmail.com
    if (!email.endsWith('@gmail.com')) {
        // Show error message
        errorMessage.classList.add('show');
        emailInput.style.borderColor = '#d32f2f';
        return;
    }

    // Hide error message if it was showing
    errorMessage.classList.remove('show');
    emailInput.style.borderColor = '#4caf50';

    // Email is valid, open new page
    // You can change this URL to wherever you want to redirect
    window.open('started.html', '_blank');

    // Optional: Reset the form
    emailInput.value = '';
    emailInput.style.borderColor = '#ddd';
});

// Hide error message when user starts typing
document.getElementById('email1').addEventListener('input', function () {
    const errorMessage = document.getElementById('errorMessage1');
    errorMessage.classList.remove('show');
    this.style.borderColor = '#ddd';
});




// Get all the elements we need to work with
const photoList = document.getElementById('photoList');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// How much to scroll when button is clicked (adjust this value to scroll more/less)
const scrollAmount = 700;

// Set up button click events when page loads
document.addEventListener('DOMContentLoaded', function () {

    // What happens when left button is clicked
    leftButton.addEventListener('click', function () {
        scrollGalleryLeft();
    });

    // What happens when right button is clicked
    rightButton.addEventListener('click', function () {
        scrollGalleryRight();
    });

    // Check button visibility whenever user scrolls manually
    photoList.addEventListener('scroll', function () {
        updateButtonVisibility();
    });

    // Check button visibility when page first loads
    updateButtonVisibility();
});

// HELPER FUNCTIONS

// Scroll the gallery to the left (shows photos on the right)
function scrollGalleryLeft() {
    photoList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });

    // Wait a bit for scroll to finish, then update buttons
    setTimeout(updateButtonVisibility, 300);
}

// Scroll the gallery to the right (shows photos on the left)
function scrollGalleryRight() {
    photoList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Wait a bit for scroll to finish, then update buttons
    setTimeout(updateButtonVisibility, 300);
}

// Show or hide buttons based on current scroll position
function updateButtonVisibility() {
    const currentScroll = photoList.scrollLeft;
    const maxScroll = photoList.scrollWidth - photoList.clientWidth;

    // Show/hide left button
    if (currentScroll <= 5) {
        // At the beginning - hide left button
        hideLeftButton();
    } else {
        // Not at beginning - show left button
        showLeftButton();
    }

    // Show/hide right button
    if (currentScroll >= maxScroll - 5) {
        // At the end - hide right button
        hideRightButton();
    } else {
        // Not at end - show right button
        showRightButton();
    }
}

// Functions to show and hide buttons
function showLeftButton() {
    leftButton.classList.remove('hidden');
    leftButton.classList.add('visible');
}

function hideLeftButton() {
    leftButton.classList.remove('visible');
    leftButton.classList.add('hidden');
}

function showRightButton() {
    rightButton.classList.remove('hidden');
    rightButton.classList.add('visible');
}

function hideRightButton() {
    rightButton.classList.remove('visible');
    rightButton.classList.add('hidden');
}

// Function to close all FAQ answers
function closeAllAnswers() {
    const answers = document.querySelectorAll('.faq-answer');
    answers.forEach(answer => answer.remove());
}

// const clickableIcons = document.querySelector('.clickable-icon');
const faq = document.getElementById("faq");
faq.addEventListener("click", () => {
    let answer = faq.querySelector(".faq-answer");
    let icon = faq.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class

    if (answer) {
        answer.remove();
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers(); // Close any open answers first
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.<div></div> You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week.";
        div.style.backgroundColor = "#2d2d2d";
        faq.append(div);
        icon.classList.add("rotated"); // Add rotated state
    }
});

const faq1 = document.getElementById("faq1");
faq1.addEventListener("click", () => {
    let answer = faq1.querySelector(".faq-answer");
    let icon = faq1.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class
    if (answer) {
        answer.remove();
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers(); // Close any open answers first
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.";
        div.style.backgroundColor = "#2d2d2d";
        faq1.append(div);
        icon.classList.add("rotated"); // Add rotated state
    }
});
const faq3 = document.getElementById("faq3");
faq3.addEventListener("click", () => {
    // Check if the answer div already exists
    let answer = faq3.querySelector(".faq-answer");
    let icon = faq3.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class
    if (answer) {
        answer.remove(); // Remove if present
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers();
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<div></div>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
        div.style.backgroundColor = "#2d2d2d";
        faq3.append(div);
         icon.classList.add("rotated"); // Add rotated state
    }
});
const faq4 = document.getElementById("faq4");
faq4.addEventListener("click", () => {
    // Check if the answer div already exists
    let answer = faq4.querySelector(".faq-answer");
    let icon = faq4.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class
    if (answer) {
        answer.remove(); // Remove if present
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers()
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime.";
        div.style.backgroundColor = "#2d2d2d";
        faq4.append(div);
         icon.classList.add("rotated"); // Add rotated state
    }
});
const faq5 = document.getElementById("faq5");
faq5.addEventListener("click", () => {
    // Check if the answer div already exists
    let answer = faq5.querySelector(".faq-answer");
    let icon = faq5.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class
    if (answer) {
        answer.remove(); // Remove if present
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers()
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
        div.style.backgroundColor = "#2d2d2d";
        faq5.append(div);
        icon.classList.add("rotated"); // Add rotated state
    }
});
const faq6 = document.getElementById("faq6");
faq6.addEventListener("click", () => {
    // Check if the answer div already exists
    let answer = faq6.querySelector(".faq-answer");
    let icon = faq6.querySelector(".plus "); // Get the SVG element
    icon.classList.toggle("rotate-icon"); // Toggle rotation class
    if (answer) {
        answer.remove(); // Remove if present
        icon.classList.remove("rotated"); // Remove rotated state
    } else {
        closeAllAnswers()
        let div = document.createElement("div");
        div.className = "faq-answer";
        div.innerHTML = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<div></div>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";
        div.style.backgroundColor = "#2d2d2d";
        faq6.append(div);
         icon.classList.add("rotated"); // Add rotated state
    }
});

