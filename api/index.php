<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Search</title>
    <link rel="stylesheet" href="index.css">
    <link rel="shortcut icon" href="./images/logoblue.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space Grotesk">
    <script src="functions.js"></script>
</head>
<body>
    <div class="navbar">
        <div class="logo_div">
            <img class="logo" src="./images/logoblue.jpg" alt="">
            <p>E-CLINIC</p>
        </div>
        <div class="links">
            <div onclick="redirectTo('index.php')">Home</div>
            <div onclick="redirectTo('search.php')">Find a Doctor</div>
            <div onclick="redirectTo('login.php')">Login</div>
        </div>
    </div>

    <header>
        <div class="header_text">
            <h1>Find the Right Doctor for Your Medical Needs</h1>
        </div>
        <p id="header_desc">Whether you're looking for a specialist or a general practitioner, Doctor Search is your one-stop solution for finding the perfect medical professional to address your health concerns. Our platform connects you with skilled doctors from various specialties.</p>
        <div class="arrow_div" onclick="scrollToKeyFeatures()"> 
            <div class="arrow_left"></div>
            <div class="arrow_right"></div>
        </div>
        <div class="line"></div>
    </header>

    <h2 id="key-features">Key Features</h2>
    <section class="feature_div">
        <div class="feature_card ">
            <h3 class="feature_card_header">Comprehensive Doctor Search</h3>
            <p class="feature_card_desc">Easily search and browse through a diverse database of doctors to find the one that suits your needs.</p>
            <button onclick="redirectTo('search.php')" class="feature_card_button">Try Now!</button>
        </div>

        <div class="feature_card ">
            <h3 class="feature_card_header">Patient Reviews and Ratings</h3>
            <p class="feature_card_desc">Read genuine patient reviews and ratings to make informed decisions about your healthcare provider.</p>
            <button onclick="redirectTo('search.php')" class="feature_card_button">Try Now!</button>
        </div>

        <div class="feature_card ">
            <h3 class="feature_card_header">Online Appointments</h3>
            <p class="feature_card_desc">Book appointments with your chosen doctor online at your convenience.</p>
            <button class="feature_card_button">Try Now!</button>
        </div>
    </section>

    <section id="start">
        <h2 id="start_text">Ready to Find the Right Doctor?</h2>
        <div id="start_button" onclick="redirectTo('signup.php')">Create an account</div>
    </section>
</body>
</html>
