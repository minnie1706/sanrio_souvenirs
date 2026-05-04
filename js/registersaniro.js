document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('register-form').addEventListener('submit', function (e) {
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Clear all previous errors
    document.getElementById('fullname-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    let hasError = false;

    if (!fullname) {
      document.getElementById('fullname-error').textContent = 'Full name is required';
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById('email-error').textContent = 'Invalid email format';
      hasError = true;
    }

    if (!password) {
      document.getElementById('password-error').textContent = 'Password is required';
      hasError = true;
    }

    if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').textContent = 'Password confirmation does not match';
      hasError = true;
    }

    if (hasError) {
      e.preventDefault(); // Prevent form from submitting
    }
  });
});
