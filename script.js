document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
        alert('Error: Both fields are required.');
        return;
    }
    if (!email.includes('@')) {
        alert('Error: Email must contain "@".');
        return;
    }
    alert('Success! Form submitted.');
});
