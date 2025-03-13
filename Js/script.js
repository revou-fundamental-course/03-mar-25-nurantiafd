// Function to update username greeting
function updateUsername() {
    let nameInput = document.getElementById("nameInput").value;
    let usernameSpan = document.getElementById("username");
    
    if (nameInput.trim() !== "") {
        usernameSpan.textContent = nameInput;
    } else {
        usernameSpan.textContent = "Guest";
    }
}

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let output = document.getElementById("formOutput");
    
    if (name === "" || email === "" || phone === "" || message === "") {
        output.style.color = "red";
        output.textContent = "Please fill out all fields.";
    } else {
        output.style.color = "green";
        output.textContent = `Thank you, ${name}! Your message has been received.`;
        document.getElementById("contactForm").reset();
    }
}
