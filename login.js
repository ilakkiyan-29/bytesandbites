console.log("login.js loaded");
if (!localStorage.getItem('initialized')) {
    localStorage.setItem('isLoggedIn', 'false'); // Set default login status
    localStorage.setItem('initialized', 'true'); // Mark initialization as done
    console.log("Initialization complete: isLoggedIn set to false");
}

const users = {
    "balaji.240014@cce.ritchennai.edu.in": "codecrusaders"

};

// Function to handle login
function checkLogin() {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    // Check if the email exists in the local data and the password matches
    if (users[email] && users[email] === password) {
        localStorage.setItem('isLoggedIn', 'true');
        console.log(localStorage.getItem('isLoggedIn'));
        localStorage.setItem('userEmail', email); // Store the logged-in user's email
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the index page
    } else {
        
        console.log(localStorage.getItem('isLoggedIn'));
        alert("Invalid email or password. Please try again.");
    }
}

// Function to log out
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    console.log(localStorage.getItem('isLoggedIn'));
    localStorage.removeItem('userEmail');
    window.location.href = "login.html";
}
function checkLoginStatus() {
    console.log("Checking login status...",);
    return localStorage.getItem('isLoggedIn');}