document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        alert('Login successful!');
        // Redirect to the quiz page or perform other actions upon successful login
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});
