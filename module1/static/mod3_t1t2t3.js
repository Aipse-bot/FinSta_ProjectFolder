// let current_open_modal_id = ""
// function openModal(id) {
//     current_open_modal_id = id
//     console.log(id)
//     const modal = document.getElementById(id);
//     const resultDiv = modal.querySelector("#result-div");
//     const dummyDiv = modal.querySelector("#dummy-div");
//     const cancelButton = modal.querySelector("#closebtn");
//     const proceedButton = modal.querySelector("#submitbtn");

//     document.getElementById("businessLocation").value = current_open_modal_id
//     let nameField = document.getElementById("name");

//     document.getElementById("name").classList.add("hidden")
//     document.getElementById("name").removeAttribute("required");

//     cancelButton.disabled = true;
//     proceedButton.disabled = true;
//     cancelButton.classList.add("opacity-50", "cursor-not-allowed");
//     proceedButton.classList.add("opacity-50", "cursor-not-allowed");
    
//     modal.classList.remove("hidden");  
//     resultDiv.classList.add("hidden"); 
    
//     setTimeout(() => {
//         dummyDiv.classList.add("hidden");
//         resultDiv.classList.remove("hidden"); // Reveal after delay
//         cancelButton.disabled = false;
//         proceedButton.disabled = false;
//         cancelButton.classList.remove("opacity-50", "cursor-not-allowed");
//         proceedButton.classList.remove("opacity-50", "cursor-not-allowed");
//     }, 2000);
// }
    
// // Function to close the modal
// function closeModal() {
//     const modal = document.getElementById(current_open_modal_id);
//     const resultDiv = modal.querySelector("#result-div");
//     const dummyDiv = modal.querySelector("#dummy-div");
//     const cancelButton = modal.querySelector("#closebtn");
//     const proceedButton = modal.querySelector("#submitbtn");
    
//     modal.classList.add("hidden");             
//     dummyDiv.classList.remove("hidden");       
//     resultDiv.classList.add("hidden");         
    
//     document.getElementById("name").classList.add("hidden")
//     document.getElementById("name").removeAttribute("required");

//     cancelButton.disabled = true;
//     proceedButton.disabled = true;
//     cancelButton.classList.add("opacity-50", "cursor-not-allowed");
//     proceedButton.classList.add("opacity-50", "cursor-not-allowed");
// }

// // function continueAction() {
// //     // Map modal IDs to location types and target markets
// //     const locationData = {
// //         "home-based-modal": {
// //             location: "Home-Based",
// //             targetMarket: "Teens and young adults, Small businesses, Event organizers",
// //             maxEmployees: 3
// //         },
// //         "physical-store-modal": {
// //             location: "Physical Store",
// //             targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
// //             maxEmployees: 10
// //         },
// //         "commercial-space-modal": {
// //             location: "Commercial Space",
// //             targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals",
// //             maxEmployees: 20
// //         }
// //     };
// //     // Store the selected location and target market in sessionStorage
// //     const selectedLocationData = locationData[current_open_modal_id];
// //     sessionStorage.setItem('businessLocation', selectedLocationData.location);
// //     sessionStorage.setItem('targetMarket', selectedLocationData.targetMarket);
// //     sessionStorage.setItem('maxEmployees', selectedLocationData.maxEmployees);
    
// //     // Store the selected location in player data
// //     updatePlayerProperty("businessLocation", selectedLocationData.location);

// //     // remove comment if player is updated for every page
// //     //updatePlayerProperty("businessLocation", selectedLocationData.location);
// //     console.log("Continue action triggered.");
// //     closeModal();  // Close the modal after the action
// //     printPlayerInfo()
// //     window.location.href = "mod2t4";
// // }

// // JS handler before form submission
// document.getElementById('marketResearchForm').addEventListener('submit', function(event) {
//     let savedLocationData = {
//         "home-based": {
//             location: "Home-Based",
//             targetMarket: "Teens and young adults, Small businesses, Event organizers",
//             maxEmployee: 3
//         },
//         "physical-store": {
//             location: "Physical Store",
//             targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
//             maxEmployee: 10
//         },
//         "commercial-space": {
//             location: "Commercial Space",
//             targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals",
//             maxEmployee: 20
//         }
//     };
//     // Store selected location data in player object
//     const selectedLocationData = savedLocationData[current_open_modal_id];
//     updatePlayerProperty("businessLocation", selectedLocationData);
//     addOption1ToPlayerObject();
//     printPlayerInfo();
//     event.preventDefault();
// });

// // Moves information from sessionStorage to player object
// function addOption1ToPlayerObject() {
//     // Define business types (same as in mod1_t1_t2.js)
//     const businessTypes = [
//         "Tech Repair and Support Service",
//         "IoT Device Development",
//         "Web Development Services",
//         "Specialty Coffee Shop",
//         "Artisan Bakery",
//         "Food Truck Business",
//         "Custom Tailored Clothing Service",
//         "Activewear Line",
//         "Online T-Shirt Printing",
//         "Spa and Massage Center",
//         "Home Cleaning Service",
//         "Interior Design and Home Staging"
//     ];
//     const option1 = sessionStorage.getItem('option1'); // Business type index
//     const businessType = option1 !== null && businessTypes[parseInt(option1)] ? businessTypes[parseInt(option1)] : "Not Selected";
//     updatePlayerProperty("businessType", businessType);
// }

// // Card Element height adjustment
// function adjustCardHeights() {
//     const descs = document.querySelectorAll('.desc-preview');
//     const lists = document.querySelectorAll('.list-disc');
//     let pMaxHeight = 0;
//     let lMaxHeight = 0;

//     // Reset heights to auto and find the tallest for <p>
//     descs.forEach(p => {
//         p.style.height = 'auto';
//         const h = p.offsetHeight;
//         if (h > pMaxHeight) pMaxHeight = h;
//     });
//     descs.forEach(p => {
//         p.style.height = pMaxHeight + 'px';
//     });

//     // Reset heights to auto and find the tallest for <ul>
//     lists.forEach(ul => {
//         ul.style.height = 'auto';
//         const h = ul.offsetHeight;
//         if (h > lMaxHeight) lMaxHeight = h;
//     });
//     lists.forEach(ul => {
//         ul.style.height = lMaxHeight + 'px';
//     });
// }
// document.addEventListener('DOMContentLoaded', adjustCardHeights);
// window.addEventListener('resize', adjustCardHeights);