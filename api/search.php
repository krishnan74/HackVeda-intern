<?php

$conn = new mysqli('localhost','root','','doctors');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} 
	

if (isset($_GET['location']) && isset($_GET['specialty'])) {
    $searchLocation = $_GET['location'];
    $searchSpecialty = $_GET['specialty'];

    $sqlquery = "SELECT * FROM doctors_table WHERE location = ? AND specialty = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $searchLocation, $searchSpecialty);
    $stmt->execute();

    $result = $stmt->get_result();

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Search</title>
    <link rel="stylesheet" href="search.css">
    <script src="functions.js"></script>
    <link rel="shortcut icon" href="./images/logoblue.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space Grotesk">
</head>
<body>

    <div class="navbar">
        <div class="logo_div">
            <img class="logo" src="./images/logoblue.jpg" alt="">
            <p>E-CLINIC</p>
        </div>
        <div class="links">
            <div onclick="redirectTo('./index.html')">Home</div>
            <div onclick="redirectTo('search.php')">Find a Doctor</div>
            <div onclick="redirectTo('./login.html')">Login</div>
        </div>
    </div>

    <header>

      <div class="header_text">
        <h1 >Doctor Search</h1>
      </div>
        
        <p id="header_desc">Find doctors based on location and specialty</p>

        <div class="line">.</div>
        
    
        <div class="search-container">
            <input type="text" id="location-input" placeholder="Location" name = "location" list="location-options">
            <datalist id="location-options"> 
                <option value="New York">
                <option value="San Francisco">
                <option value="London">
                <option value="Sydney">
                <option value="Toronto">
                <option value="Paris">
                <option value="Tokyo">
                <option value="Berlin">
                <option value="Dubai">
                <option value="Barcelona">
                <option value="Chicago">
                <option value="Los Angeles">
                <option value="Miami">
                <option value="Vancouver">
                <option value="Melbourne">
                <option value="Dublin">
                <option value="Stockholm">
                <option value="Amsterdam">
                <option value="Oslo">
                <option value="Zurich">
            </datalist>

            
            
            
            
            
    
            
            <input type="text" id="specialty-input" placeholder="Specialty" name = "specialty" list="specialty-options">
            <datalist id="specialty-options">
                <option value="Cardiologist">
                <option value="Dermatologist">
                <option value="Pediatrician">
                <option value="Ophthalmologist">
                <option value="Orthopedic Surgeon">
                <option value="Neurologist">
                <option value="Psychiatrist">
                <option value="Gynecologist">
                <option value="ENT Specialist">
                <option value="Radiologist">
                <option value="General Practitioner">
                <option value="Dentist">
                <option value="Gastroenterologist">
                <option value="Oncologist">
            </datalist>

            
            <div id="search_btn_div">
                <img src="./images/search_icon.png" alt="">
            </div>  
        </div>
    </header>
    
    
    <div class="doctors_div">
        <p id="doctor_header">List of Doctors</p>
        <div id="doctors-list">
        <?php    
            while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                    <div>
                        <h3><?php echo $row['name']; ?></h3>
                        <p>Location: <?php echo $row['location']; ?></p>
                        <p>Speciality: <?php echo $row['speciality']; ?></p>
                    </div>
        <?php
            }
        ?>
        </div>
    </div>
    
      
</body>

</html>
