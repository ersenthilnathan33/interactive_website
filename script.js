// Welcome Message
function welcomeMessage() {
    alert("Welcome to Our Interactive Website!");
}

// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark");
}

// Dynamic Time Display
function showTime() {
    let time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}