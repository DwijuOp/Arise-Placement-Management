function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Arise' && password === 'Arise') {
        alert('Login successful!');
        window.location.href = 'StudentsData.html'
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
