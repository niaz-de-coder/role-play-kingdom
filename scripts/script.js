/* scripts/script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // Form Toggle Functionality (Sign In <-> Sign Up)
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const formCards = document.querySelectorAll('.form-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Update active states for buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active states for form cards
            formCards.forEach(card => {
                card.classList.remove('active');
                if (card.id === targetId) {
                    card.classList.add('active');
                }
            });
        });
    });

    // Password Visibility Toggle
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetInput = document.querySelector(icon.getAttribute('toggle'));
            if (targetInput) {
                if (targetInput.type === 'password') {
                    targetInput.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    targetInput.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        });
    });

    // Helper Functions for Validation
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const setFieldError = (inputElement, message) => {
        const group = inputElement.closest('.input-group');
        group.classList.remove('success');
        group.classList.add('error');
        const errorSpan = group.querySelector('.error-msg');
        if (errorSpan) errorSpan.textContent = message;
    };

    const setFieldSuccess = (inputElement) => {
        const group = inputElement.closest('.input-group');
        group.classList.remove('error');
        group.classList.add('success');
        const errorSpan = group.querySelector('.error-msg');
        if (errorSpan) errorSpan.textContent = '';
    };

    // Sign In Form Validation & Handling
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        const emailInput = document.getElementById('signin-email');
        const passwordInput = document.getElementById('signin-password');

        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Email check
            if (!emailInput.value.trim()) {
                setFieldError(emailInput, 'Email address is required.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                setFieldError(emailInput, 'Please enter a valid email format.');
                isValid = false;
            } else {
                setFieldSuccess(emailInput);
            }

            // Password check
            if (!passwordInput.value) {
                setFieldError(passwordInput, 'Password is required.');
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                setFieldError(passwordInput, 'Password must be at least 6 characters.');
                isValid = false;
            } else {
                setFieldSuccess(passwordInput);
            }

            if (isValid) {
                alert('Sign In data validated successfully! Proceeding to empire dashboard...');
                signinForm.reset();
                document.querySelectorAll('.input-group').forEach(g => g.classList.remove('success', 'error'));
            }
        });
    }

    // Sign Up Form Validation & Handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        const fullNameInput = document.getElementById('signup-name');
        const emailInput = document.getElementById('signup-email');
        const genderInput = document.getElementById('signup-gender');
        const dobInput = document.getElementById('signup-dob');
        const passwordInput = document.getElementById('signup-password');
        const confirmPasswordInput = document.getElementById('signup-confirmpassword');

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Full Name check
            if (!fullNameInput.value.trim()) {
                setFieldError(fullNameInput, 'Full name is required.');
                isValid = false;
            } else if (fullNameInput.value.trim().length < 3) {
                setFieldError(fullNameInput, 'Name must be at least 3 characters.');
                isValid = false;
            } else {
                setFieldSuccess(fullNameInput);
            }

            // Email check
            if (!emailInput.value.trim()) {
                setFieldError(emailInput, 'Email address is required.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                setFieldError(emailInput, 'Please enter a valid email format.');
                isValid = false;
            } else {
                setFieldSuccess(emailInput);
            }

            // Gender check
            if (!genderInput.value) {
                setFieldError(genderInput, 'Please select your gender.');
                isValid = false;
            } else {
                setFieldSuccess(genderInput);
            }

            // Date of Birth check
            if (!dobInput.value) {
                setFieldError(dobInput, 'Date of birth is required.');
                isValid = false;
            } else {
                // Optional: Check if user is at least 13 years old
                const dobDate = new Date(dobInput.value);
                const today = new Date();
                let age = today.getFullYear() - dobDate.getFullYear();
                const m = today.getMonth() - dobDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
                    age--;
                }
                if (age < 13) {
                    setFieldError(dobInput, 'You must be at least 13 years old to play.');
                    isValid = false;
                } else {
                    setFieldSuccess(dobInput);
                }
            }

            // Password check
            if (!passwordInput.value) {
                setFieldError(passwordInput, 'Password is required.');
                isValid = false;
            } else if (passwordInput.value.length < 8) {
                setFieldError(passwordInput, 'Password must be at least 8 characters long.');
                isValid = false;
            } else {
                setFieldSuccess(passwordInput);
            }

            // Confirm Password check
            if (!confirmPasswordInput.value) {
                setFieldError(confirmPasswordInput, 'Please confirm your password.');
                isValid = false;
            } else if (confirmPasswordInput.value !== passwordInput.value) {
                setFieldError(confirmPasswordInput, 'Passwords do not match.');
                isValid = false;
            } else {
                setFieldSuccess(confirmPasswordInput);
            }

            if (isValid) {
                alert('Sign Up data validated successfully! Welcome to Role Play Empirez.');
                signupForm.reset();
                document.querySelectorAll('.input-group').forEach(g => g.classList.remove('success', 'error'));
            }
        });
    }

    // Modal Popups for Footer Buttons & Forgot Password
    const modalOverlay = document.getElementById('genericModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');

    const openModal = (title, htmlContent) => {
        modalTitle.textContent = title;
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Footer Modals Content Binding
    const contactBtn = document.getElementById('contactModalBtn');
    const aboutBtn = document.getElementById('aboutModalBtn');
    const reviewsBtn = document.getElementById('reviewsModalBtn');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            openModal('Contact Support', '<p>Need assistance or have queries regarding your empire? Reach out to our grand chancellors at <strong>support@roleplayempirez.com</strong>.</p>');
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            openModal('About Role Play Empirez', '<p>Role Play Empirez is an immersive text-based strategy web game where diplomacy, tactical warfare, and economic dominance determine the ultimate ruler of the realm.</p>');
        });
    }

    if (reviewsBtn) {
        reviewsBtn.addEventListener('click', () => {
            openModal('Ruler Reviews', '<p>"An absolute masterpiece of text strategy! The minimalist UI keeps you focused purely on grand tactics." - <em>Emperor Alex</em><br><br>"Managing resources has never felt this engaging." - <em>Queen Sarah</em></p>');
        });
    }

    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('Recover Password', '<p>Enter your account email address, and our royal couriers will dispatch a secure password reset scroll to your inbox.</p><div class="input-group" style="margin-top:1rem;"><div class="input-field-wrap"><i class="fa-regular fa-envelope"></i><input type="email" id="recovery-email" placeholder="Enter your email"></div></div><button class="submit-btn" style="margin-top:1rem;" onclick="alert(\'Recovery scroll sent if email exists.\');">Send Recovery Scroll</button>');
        });
    }

});
