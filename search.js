        // const searchButton = document.getElementById("search_btn_div");
        // const locationInput = document.getElementById('location-input');
        // const specialtyInput = document.getElementById('specialty-input');
        // const additionalInput = document.getElementById('additional-input');
        // const doctorsList = document.getElementById('doctors-list');
        
        // searchButton.addEventListener("click", searchDoctors);
        
        // function searchDoctors() {
        //   const location = locationInput.value.trim();
        //   const specialty = specialtyInput.value.trim();

        //   const doctors = [
        //     { name: 'Dr. Ethan Thompson', location: 'New York', specialty: 'Cardiologist' },
        //     { name: 'Dr. Harper Johnson', location: 'San Francisco', specialty: 'Pediatrician' },
        //     { name: 'Dr. Ava Martinez', location: 'London', specialty: 'Dermatologist' },
        //     { name: 'Dr. Noah Wilson', location: 'Sydney', specialty: 'Ophthalmologist' },
        //     { name: 'Dr. Mia Johnson', location: 'Toronto', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. William Smith', location: 'Paris', specialty: 'Neurologist' },
        //     { name: 'Dr. Sophia Taylor', location: 'Tokyo', specialty: 'Psychiatrist' },
        //     { name: 'Dr. Isabella Lee', location: 'Sydney', specialty: 'Pediatrician' },
        //     { name: 'Dr. Ethan Williams', location: 'New York', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. Olivia Martin', location: 'London', specialty: 'Neurologist' },
        //     { name: 'Dr. Daniel Brown', location: 'Tokyo', specialty: 'Psychiatrist' },
        //     { name: 'Dr. Noah Anderson', location: 'Paris', specialty: 'Dermatologist' },
        //     { name: 'Dr. Olivia Thompson', location: 'Toronto', specialty: 'Cardiologist' },
        //     { name: 'Dr. Benjamin White', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Amelia Hernandez', location: 'Berlin', specialty: 'Radiologist' },
        //     { name: 'Dr. Sophia Davis', location: 'Dubai', specialty: 'General Practitioner' },
        //     { name: 'Dr. William Johnson', location: 'Dublin', specialty: 'Dentist' },
        //     { name: 'Dr. Aiden Hernandez', location: 'Chicago', specialty: 'Gastroenterologist' },
        //     { name: 'Dr. Chloe Thompson', location: 'Los Angeles', specialty: 'Oncologist' },
        //     { name: 'Dr. Logan Johnson', location: 'Miami', specialty: 'Gynecologist' },
        //     { name: 'Dr. Benjamin Anderson', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Olivia Anderson', location: 'Berlin', specialty: 'Radiologist' },
        //     { name: 'Dr. Victoria Martin', location: 'Dubai', specialty: 'General Practitioner' },
        //     { name: 'Dr. James Wilson', location: 'Dublin', specialty: 'Dentist' },
        //     { name: 'Dr. Aiden Davis', location: 'Chicago', specialty: 'Gastroenterologist' },
        //     { name: 'Dr. Chloe Hernandez', location: 'Los Angeles', specialty: 'Oncologist' },
        //     { name: 'Dr. Harper Thompson', location: 'Sydney', specialty: 'Pediatrician' },
        //     { name: 'Dr. Ella Brown', location: 'New York', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. Logan Johnson', location: 'London', specialty: 'Neurologist' },
        //     { name: 'Dr. Scarlett White', location: 'Paris', specialty: 'Dermatologist' },
        //     { name: 'Dr. Liam Anderson', location: 'Toronto', specialty: 'Cardiologist' },
        //     { name: 'Dr. Oliver Davis', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Chloe Hernandez', location: 'Berlin', specialty: 'Radiologist' },
        //     { name: 'Dr. John Smith', location: 'New York', specialty: 'Cardiologist' },
        //     { name: 'Dr. Emily Johnson', location: 'San Francisco', specialty: 'Pediatrician' },
        //     { name: 'Dr. Michael Williams', location: 'London', specialty: 'Dermatologist' },
        //     { name: 'Dr. Emma Davis', location: 'Sydney', specialty: 'Ophthalmologist' },
        //     { name: 'Dr. David Johnson', location: 'Toronto', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. Sophia Martinez', location: 'Paris', specialty: 'Neurologist' },
        //     { name: 'Dr. Daniel Taylor', location: 'Tokyo', specialty: 'Psychiatrist' },
        //     { name: 'Dr. Ava Thompson', location: 'Sydney', specialty: 'Pediatrician' },
        //     { name: 'Dr. Ethan Lee', location: 'New York', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. Mia Williams', location: 'London', specialty: 'Neurologist' },
        //     { name: 'Dr. Daniel Taylor', location: 'Tokyo', specialty: 'Psychiatrist' },
        //     { name: 'Dr. Isabella Brown', location: 'Paris', specialty: 'Dermatologist' },
        //     { name: 'Dr. Noah Martinez', location: 'Toronto', specialty: 'Cardiologist' },
        //     { name: 'Dr. Harper Johnson', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Amelia Wilson', location: 'Berlin', specialty: 'Radiologist' },
        //     { name: 'Dr. Sophia Martin', location: 'Dubai', specialty: 'General Practitioner' },
        //     { name: 'Dr. William Anderson', location: 'Dublin', specialty: 'Dentist' },
        //     { name: 'Dr. Emily Davis', location: 'Chicago', specialty: 'Gastroenterologist' },
        //     { name: 'Dr. Lucas Hernandez', location: 'Los Angeles', specialty: 'Oncologist' },
        //     { name: 'Dr. Camila Hernandez', location: 'Miami', specialty: 'Gynecologist' },
        //     { name: 'Dr. Benjamin Anderson', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Olivia Anderson', location: 'Berlin', specialty: 'Radiologist' },
        //     { name: 'Dr. Victoria Martin', location: 'Dubai', specialty: 'General Practitioner' },
        //     { name: 'Dr. James Wilson', location: 'Dublin', specialty: 'Dentist' },
        //     { name: 'Dr. Aiden Davis', location: 'Chicago', specialty: 'Gastroenterologist' },
        //     { name: 'Dr. Chloe Hernandez', location: 'Los Angeles', specialty: 'Oncologist' },
        //     { name: 'Dr. Harper Thompson', location: 'Sydney', specialty: 'Pediatrician' },
        //     { name: 'Dr. Ella Brown', location: 'New York', specialty: 'Orthopedic Surgeon' },
        //     { name: 'Dr. Logan Johnson', location: 'London', specialty: 'Neurologist' },
        //     { name: 'Dr. Scarlett White', location: 'Paris', specialty: 'Dermatologist' },
        //     { name: 'Dr. Liam Anderson', location: 'Toronto', specialty: 'Cardiologist' },
        //     { name: 'Dr. Oliver Davis', location: 'Barcelona', specialty: 'ENT Specialist' },
        //     { name: 'Dr. Chloe Hernandez', location: 'Berlin', specialty: 'Radiologist' },
        // ];
        
        //   const filteredDoctors = doctors.filter(doctor => {
        //     const doctorLocation = doctor.location.toLowerCase();
        //     const doctorSpecialty = doctor.specialty.toLowerCase();

        //     const searchLocation = location.toLowerCase();
        //     const searchSpecialty = specialty.toLowerCase();


        //     return (
        //       (searchLocation === '' || doctorLocation.includes(searchLocation)) &&
        //       (searchSpecialty === '' || doctorSpecialty.includes(searchSpecialty))
        //     );
        //   });

        //   displayDoctors(filteredDoctors);
        //   locationInput.value = '';
        //   specialtyInput.value = '';
        // }

        // function displayDoctors(doctors) {
        //   doctorsList.innerHTML = '';
        
        //   if (doctors.length === 0) {
        //     const noDoctorsMessage = document.createElement('p');
        //     noDoctorsMessage.textContent = 'No doctors found.';
        //     doctorsList.appendChild(noDoctorsMessage);
        //     return;
        //   }
        
        //   doctors.forEach(doctor => {
        //     const doctorCard = document.createElement('div');
        //     doctorCard.classList.add('doctor-card');

        //     const name = document.createElement('h3');
        //     name.textContent = doctor.name;
        
        //     const location = document.createElement('p');
        //     location.textContent = `Location: ${doctor.location}`;
        
        //     const specialty = document.createElement('p');
        //     specialty.textContent = `Specialty: ${doctor.specialty}`;


        
        //     doctorCard.appendChild(name);
        //     doctorCard.appendChild(location);
        //     doctorCard.appendChild(specialty);
        
        //     doctorsList.appendChild(doctorCard);
        //   });
        // }