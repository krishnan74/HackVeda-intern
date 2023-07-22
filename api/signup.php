<!DOCTYPE html>
<html>
<head>
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="login.css">
  <script src="functions.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space Grotesk">
  <link rel="shortcut icon" href="./images/logoblue.jpg" type="image/x-icon">
  

</head>
<body>
  <div class="navbar">
    <div class="logo_div"><img class="logo" src="./images/logoblue.jpg" alt="">
      <p>E-CLINIC</p>
    </div>
    <div class="links">
      <div onclick="redirectTo('index.php')">Home</div>
      <div onclick="redirectTo('search.php')">Find a Doctor</div>
      <div onclick="redirectTo('login.php')">Login</div>
    </div>
    
  </div>
  <div class="line">.</div>
  <form id="loginForm">
    <h1>Sign Up</h1>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <label for="password">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="password" required>
    <button type="submit">SignUp</button>
  </form>

  <p id="account_text">Already have an account? <a href="login.php">Login here</a></p>

</body>
<script src="signup.js"></script>
</html>