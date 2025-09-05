// script.js: Handles all interactivity and validation

// 1. Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleThemeBtn.textContent = 'Switch to Dark Mode';
    }
});

// 2. Counter Game
const countSpan = document.getElementById('count');
let count = 0;
document.getElementById('increment').addEventListener('click', function() {
    count++;
    countSpan.textContent = count;
});
document.getElementById('decrement').addEventListener('click', function() {
    count--;
    countSpan.textContent = count;
});
document.getElementById('reset').addEventListener('click', function() {
    count = 0;
    countSpan.textContent = count;
});

// 3. Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// 4. Form Validation
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper: Validate email with regex
function isValidEmail(email) {
    return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Helper: Validate password (min 6 chars, at least 1 number)
function isValidPassword(password) {
    return /^(?=.*\d).{6,}$/.test(password);
}

// Validate on submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    // Name validation
    if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters.';
        valid = false;
    }
    // Email validation
    if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }
    // Password validation
    if (!isValidPassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters and contain a number.';
        valid = false;
    }
    if (valid) {
        formSuccess.textContent = 'Sign up successful!';
        form.reset();
    }
});

// Live validation on input
nameInput.addEventListener('input', function() {
    nameError.textContent = nameInput.value.trim().length < 2 ? 'Name must be at least 2 characters.' : '';
});
emailInput.addEventListener('input', function() {
    emailError.textContent = isValidEmail(emailInput.value.trim()) ? '' : 'Please enter a valid email address.';
});
passwordInput.addEventListener('input', function() {
    passwordError.textContent = isValidPassword(passwordInput.value) ? '' : 'Password must be at least 6 characters and contain a number.';
});

// --- End of script.js ---
