document.getElementById("contactForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Name validation
    const nameInput = document.getElementById("name");
    const nameWarning = document.getElementById("nameWarning");
    if (nameInput.value.trim() === "") {
        nameWarning.style.display = "inline";  // Show the warning
        isValid = false;
    } else {
        nameWarning.style.display = "none";   // Hide the warning
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailWarning = document.getElementById("emailWarning");
    if (emailInput.value.trim() === "") {
        emailWarning.style.display = "inline";
        isValid = false;
    } else {
        emailWarning.style.display = "none";
    }

    // Message validation
    const messageInput = document.getElementById("message");
    const messageWarning = document.getElementById("messageWarning");
    if (messageInput.value.trim() === "") {
        messageWarning.style.display = "inline";
        isValid = false;
    } else {
        messageWarning.style.display = "none";
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault(); // Prevent form submission if fields are invalid
    } else {
        // If valid, show success message at the top
        event.preventDefault();  // Prevent actual form submission for demo purposes
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block"; // Show the success notification

        // Trigger the fade-out animation after 3 seconds
        setTimeout(function () {
            successMessage.style.animation = "fadeOut 1s forwards"; // Apply fade-out animation
        }, 3000);

        // Hide success message after 3 seconds
        setTimeout(function () {
            successMessage.style.display = "none"; // Hide the success notification
        }, 3000);
    }
});

// Hide all warnings when the user starts typing in any field
const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");

inputs.forEach(input => {
    input.addEventListener("input", function () {
        // Hide all warnings when any field is being typed in
        document.querySelectorAll(".warning").forEach(warning => {
            warning.style.display = "none";
        });
    });
});