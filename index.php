<!-- index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Role Play Empirez - Sign In & Sign Up</title>
    <!-- Google Fonts for Modern Typography -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

    <!-- Blurred Background Layer -->
    <div class="bg-wrapper">
        <div class="bg-image"></div>
        <div class="bg-overlay"></div>
    </div>

    <!-- Main Container -->
    <div class="page-container">
        
        <!-- Header Section -->
        <header class="site-header">
            <div class="logo-area">
                <img src="assets/logo.png" alt="Role Play Empirez Logo" class="logo-img">
                <span class="logo-text">Role Play Empirez</span>
            </div>
            <div class="slogan-area">
                <p>Rule your empire with text based web game</p>
            </div>
        </header>

        <!-- Main Content Section -->
        <main class="main-content">
            <div class="hero-text-box">
                <h1>Sign in or Sign Up to rule your own empire</h1>
                <p class="subtitle">Conquer territories, manage resources, and forge your legacy.</p>
            </div>

            <!-- Forms Container -->
            <div class="forms-container">
                
                <!-- Toggle Switch for Mobile/Desktop view options if needed -->
                <div class="form-toggle-btns">
                    <button class="toggle-btn active" data-target="signin-card">Sign In</button>
                    <button class="toggle-btn" data-target="signup-card">Sign Up</button>
                </div>

                <!-- Forms Wrapper -->
                <div class="forms-wrapper">
                    
                    <!-- Sign In Form Card -->
                    <div class="form-card active" id="signin-card">
                        <h2>Welcome Back, Ruler</h2>
                        <form id="signinForm" novalidate>
                            <div class="input-group">
                                <label for="signin-email">Email Address</label>
                                <div class="input-field-wrap">
                                    <i class="fa-regular fa-envelope"></i>
                                    <input type="email" id="signin-email" name="email" placeholder="Enter your email" required>
                                </div>
                                <span class="error-msg" id="signin-email-error"></span>
                            </div>

                            <div class="input-group">
                                <label for="signin-password">Password</label>
                                <div class="input-field-wrap">
                                    <i class="fa-solid fa-lock"></i>
                                    <input type="password" id="signin-password" name="password" placeholder="Enter your password" required>
                                    <i class="fa-regular fa-eye toggle-password" toggle="#signin-password"></i>
                                </div>
                                <span class="error-msg" id="signin-password-error"></span>
                            </div>

                            <div class="form-actions-row">
                                <a href="#forgot" id="forgotPasswordBtn" class="forgot-link">Forgot password?</a>
                            </div>

                            <button type="submit" class="submit-btn">Sign In to Empire</button>
                        </form>
                    </div>

                    <!-- Sign Up Form Card -->
                    <div class="form-card" id="signup-card">
                        <h2>Forge Your Dynasty</h2>
                        <form id="signupForm" novalidate>
                            <div class="input-group">
                                <label for="signup-name">Full Name</label>
                                <div class="input-field-wrap">
                                    <i class="fa-regular fa-user"></i>
                                    <input type="text" id="signup-name" name="fullname" placeholder="Enter your full name" required>
                                </div>
                                <span class="error-msg" id="signup-name-error"></span>
                            </div>

                            <div class="input-group">
                                <label for="signup-email">Email Address</label>
                                <div class="input-field-wrap">
                                    <i class="fa-regular fa-envelope"></i>
                                    <input type="email" id="signup-email" name="email" placeholder="Enter your email" required>
                                </div>
                                <span class="error-msg" id="signup-email-error"></span>
                            </div>

                            <div class="form-row-dual">
                                <div class="input-group">
                                    <label for="signup-gender">Gender</label>
                                    <div class="input-field-wrap">
                                        <i class="fa-solid fa-venus-mars"></i>
                                        <select id="signup-gender" name="gender" required>
                                            <option value="" disabled selected>Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <span class="error-msg" id="signup-gender-error"></span>
                                </div>

                                <div class="input-group">
                                    <label for="signup-dob">Date of Birth</label>
                                    <div class="input-field-wrap">
                                        <i class="fa-regular fa-calendar"></i>
                                        <input type="date" id="signup-dob" name="dob" required>
                                    </div>
                                    <span class="error-msg" id="signup-dob-error"></span>
                                </div>
                            </div>

                            <div class="form-row-dual">
                                <div class="input-group">
                                    <label for="signup-password">Password</label>
                                    <div class="input-field-wrap">
                                        <i class="fa-solid fa-lock"></i>
                                        <input type="password" id="signup-password" name="password" placeholder="Create password" required>
                                        <i class="fa-regular fa-eye toggle-password" toggle="#signup-password"></i>
                                    </div>
                                    <span class="error-msg" id="signup-password-error"></span>
                                </div>

                                <div class="input-group">
                                    <label for="signup-confirmpassword">Confirm Password</label>
                                    <div class="input-field-wrap">
                                        <i class="fa-solid fa-shield-halved"></i>
                                        <input type="password" id="signup-confirmpassword" name="confirm_password" placeholder="Confirm password" required>
                                    </div>
                                    <span class="error-msg" id="signup-confirmpassword-error"></span>
                                </div>
                            </div>

                            <button type="submit" class="submit-btn">Create Empire Account</button>
                        </form>
                    </div>

                </div>
            </div>
        </main>

        <!-- Footer Section -->
        <footer class="site-footer">
            <div class="footer-credit">
                <p>This web game site is made by Md. Niaz Al Motin</p>
            </div>
            <div class="footer-nav">
                <button class="footer-link-btn" id="contactModalBtn">Contact</button>
                <button class="footer-link-btn" id="aboutModalBtn">About</button>
                <button class="footer-link-btn" id="reviewsModalBtn">Reviews</button>
            </div>
        </footer>

    </div>

    <!-- Generic Modal for Footer Links / Forgot Password -->
    <div class="modal-overlay" id="genericModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeModal">&times;</button>
            <h3 id="modalTitle">Notice</h3>
            <div id="modalBody">
                <!-- Dynamic content goes here -->
            </div>
        </div>
    </div>

    <!-- Custom JavaScript -->
    <script src="scripts/script.js"></script>
</body>
</html>
