function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Admin' && password === 'Admin') {
        alert('Login successful!');
        window.location.href = ''
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
