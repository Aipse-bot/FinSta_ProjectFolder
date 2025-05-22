// Currently a copy of the internal js in mod3_t1t2t3.html

// let locationData = {
//     "home-based": {
//         location: "Home-Based",
//         maxNumberOfWorkers: 3,
//         research_adv: "✅ Over 69% of home-based businesses earn at least $50,000 annually, showing strong potential for growth and profitability.",
//         research_disadv: "⚠️ Over 50% of home-based businesses fail due to factors like cash flow issues and ineffective marketing strategies."
//     },
//     "physical-store": {
//         location: "Physical Store",
//         maxNumberOfWorkers: 10,
//         research_adv: "✅ Over 55% of consumers still prefer to shop in physical stores engage products before purchasing.",
//         research_disadv: "⚠️ Over 20% of physical stores businesses fail because of high overhead costs, poor location choices, and shifting consumer behavior toward online shopping"
//     },
//     "commercial-space": {
//         location: "Commercial Space",
//         maxNumberOfWorkers: 20,
//         research_adv: "✅ Over 20-35% increase in customer acquisition compared to home-based operations, primarily due to increased visibility, foot traffic, and client trust.",
//         research_disadv: "⚠️ Over 40% of businesses in commercial spaces fail because of high rent costs, bad location selection, and low demand factors."
//     }
// };
// function openModal(id) {
//     const selectedLocationData = locationData[id];

//     console.log(locationData[id])

//     let modal = document.getElementById("modal");
//     let adv = modal.querySelector("#adv").textContent = selectedLocationData.research_adv;
//     let disadv = modal.querySelector("#disadv").textContent = selectedLocationData.research_disadv;

//     let resultDiv = modal.querySelector("#result-div");
//     let dummyDiv = modal.querySelector("#dummy-div");
//     let cancelButton = modal.querySelector("#closebtn");
//     let proceedButton = modal.querySelector("#submitbtn");

//     document.getElementById("businessLocation").value = selectedLocationData.location;
//     document.getElementById("maxNumberOfWorkers").value = selectedLocationData.maxNumberOfWorkers;

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
//     const modal = document.getElementById("modal");

//     const resultDiv = modal.querySelector("#result-div");
//     const dummyDiv = modal.querySelector("#dummy-div");
//     const cancelButton = modal.querySelector("#closebtn");
//     const proceedButton = modal.querySelector("#submitbtn");

//     modal.classList.add("hidden");             
//     dummyDiv.classList.remove("hidden");       
//     resultDiv.classList.add("hidden");         

//     document.getElementById("name").removeAttribute("required");

//     cancelButton.disabled = true;
//     proceedButton.disabled = true;
//     cancelButton.classList.add("opacity-50", "cursor-not-allowed");
//     proceedButton.classList.add("opacity-50", "cursor-not-allowed");
// }

// async function fetchBusinessData(field) {
//     let str = "";

//     try {
//         const response = await fetch(`get_business_data/?field=${field}`);
//         const data = await response.json();
        
//         console.log(`Requested ${field}:`, data);

//         let category = data.data.businessCategory;

//         switch (category) {
//             case "Tech":
//                 document.querySelectorAll("ul li").forEach(item => {
//                     item.innerText = "Businesses and professionals looking for tech services.";
//                 });
//                 str = "Businesses and professionals looking for tech services.";
//                 break;
//             case "Food":
//                 document.querySelectorAll("ul li").forEach(item => {
//                     item.innerText = "People seeking convenient and affordable meal options.";
//                 });
//                 str = "People seeking convenient and affordable meal options.";
//                 break;
//             case "Clothing":
//                 document.querySelectorAll("ul li").forEach(item => {
//                     item.innerText = "Young adults and fashion-conscious consumers.";
//                 });
//                 str = "Young adults and fashion-conscious consumers.";
//                 break;
//             case "Expert":
//                 document.querySelectorAll("ul li").forEach(item => {
//                     item.innerText = "People seeking professional services.";
//                 });
//                 str = "People seeking professional services.";
//                 break;
//         }
//         document.getElementById("targetMarket").value = str;
//         return str;

//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return "Error fetching data";
//     }
// }
// fetchBusinessData("businessCategory");  // Fetch business category
// // Force reflow on the <ul> container for md sized screens
// const ul = document.querySelectorAll(".list-disc");
// ul.style.display = "none";
// ul.offsetHeight;
// ul.style.display = "block";

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
//     const titles = document.querySelectorAll('.location-title')
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