let current_open_modal_id = "";
let locationData = {
    "home-based": {
        location: "Home-Based",
        targetMarket: "Teens and young adults, Small businesses, Event organizers",
        research_adv: "✅ Over 69% of home-based businesses earn at least $50,000 annually, showing strong potential for growth and profitability.",
        research_disadv: "⚠️ Over 50% of home-based businesses fail due to factors like cash flow issues and ineffective marketing strategies."
    },
    "physical-store": {
        location: "Physical Store",
        targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
        research_adv: "✅ Over 55% of consumers still prefer to shop in physical stores engage products before purchasing.",
        research_disadv: "⚠️ Over 20% of physical stores businesses fail because of high overhead costs, poor location choices, and shifting consumer behavior toward online shopping"
    },
    "commercial-space": {
        location: "Commercial Space",
        targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals",
        research_adv: "✅ Over 20-35% increase in customer acquisition compared to home-based operations, primarily due to increased visibility, foot traffic, and client trust.",
        research_disadv: "⚠️ Over 40% of businesses in commercial spaces fail because of high rent costs, bad location selection, and low demand factors."
    }
};

function openModal(id) {
    current_open_modal_id = id;
    const selectedLocationData = locationData[id];
    console.log(locationData[id]);

    let modal = document.getElementById("modal");
    let  adv = modal.querySelector("#adv").textContent = selectedLocationData.research_adv;
    let disadv = modal.querySelector("#disadv").textContent = selectedLocationData.research_disadv;

    let resultDiv = modal.querySelector("#result-div");
    let dummyDiv = modal.querySelector("#dummy-div");
    let cancelButton = modal.querySelector("#closebtn");
    let proceedButton = modal.querySelector("#submitbtn");

    document.getElementById("businessLocation").value = selectedLocationData.location
    document.getElementById("name").removeAttribute("required");
    cancelButton.disabled = true;
    proceedButton.disabled = true;
    cancelButton.classList.add("opacity-50", "cursor-not-allowed");
    proceedButton.classList.add("opacity-50", "cursor-not-allowed");

    modal.classList.remove("hidden");  
    resultDiv.classList.add("hidden"); 

    setTimeout(() => {
        dummyDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden"); // Reveal after delay
        cancelButton.disabled = false;
        proceedButton.disabled = false;
        cancelButton.classList.remove("opacity-50", "cursor-not-allowed");
        proceedButton.classList.remove("opacity-50", "cursor-not-allowed");
    }, 2000);
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");

    const resultDiv = modal.querySelector("#result-div");
    const dummyDiv = modal.querySelector("#dummy-div");
    const cancelButton = modal.querySelector("#closebtn");
    const proceedButton = modal.querySelector("#submitbtn");

    modal.classList.add("hidden");             
    dummyDiv.classList.remove("hidden");       
    resultDiv.classList.add("hidden");         

    document.getElementById("name").removeAttribute("required");

    cancelButton.disabled = true;
    proceedButton.disabled = true;
    cancelButton.classList.add("opacity-50", "cursor-not-allowed");
    proceedButton.classList.add("opacity-50", "cursor-not-allowed");
}

// JS handler before form submission
document.getElementById('marketResearchForm').addEventListener('submit', function(event) {
    let savedLocationData = {
        "home-based": {
            location: "Home-Based",
            targetMarket: "Teens and young adults, Small businesses, Event organizers",
            maxEmployee: 3
        },
        "physical-store": {
            location: "Physical Store",
            targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
            maxEmployee: 10
        },
        "commercial-space": {
            location: "Commercial Space",
            targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals",
            maxEmployee: 20
        }
    };
    // Store selected location data in player object
    const selectedLocationData = savedLocationData[current_open_modal_id];
    updatePlayerProperty("businessLocation", selectedLocationData);
    addOption1ToPlayerObject();
    printPlayerInfo();
    // event.preventDefault();
});

// Moves information from sessionStorage to player object
function addOption1ToPlayerObject() {
    // Define business types (same as in mod1_t1_t2.js)
    const businessTypes = [
        "Tech Repair and Support Service",
        "IoT Device Development",
        "Web Development Services",
        "Specialty Coffee Shop",
        "Artisan Bakery",
        "Food Truck Business",
        "Custom Tailored Clothing Service",
        "Activewear Line",
        "Online T-Shirt Printing",
        "Spa and Massage Center",
        "Home Cleaning Service",
        "Interior Design and Home Staging"
    ];
    const option1 = sessionStorage.getItem('option1'); // Business type index
    const businessType = option1 !== null && businessTypes[parseInt(option1)] ? businessTypes[parseInt(option1)] : "Not Selected";
    updatePlayerProperty("businessType", businessType);
}

// Card Element height adjustment
function adjustCardHeights() {
    const descs = document.querySelectorAll('.desc-preview');
    const lists = document.querySelectorAll('.list-disc');
    let pMaxHeight = 0;
    let lMaxHeight = 0;

    // Reset heights to auto and find the tallest for <p>
    descs.forEach(p => {
        p.style.height = 'auto';
        const h = p.offsetHeight;
        if (h > pMaxHeight) pMaxHeight = h;
    });
    descs.forEach(p => {
        p.style.height = pMaxHeight + 'px';
    });

    // Reset heights to auto and find the tallest for <ul>
    lists.forEach(ul => {
        ul.style.height = 'auto';
        const h = ul.offsetHeight;
        if (h > lMaxHeight) lMaxHeight = h;
    });
    lists.forEach(ul => {
        ul.style.height = lMaxHeight + 'px';
    });
}
document.addEventListener('DOMContentLoaded', adjustCardHeights);
window.addEventListener('resize', adjustCardHeights);


// (Unused) Modal for full description
// document.querySelectorAll('.desc-preview').forEach(function(p) {
//     p.addEventListener('click', function() {
//         const card = p.closest('.location-card');
//         const title = card ? card.querySelector('.location-title').textContent : '';
//         document.getElementById('desc-modal-title').textContent = title;
//         document.getElementById('desc-modal-text').textContent = p.textContent;
//         document.getElementById('desc-modal').classList.remove('hidden');
//     });
// });
// function closeDescModal() {
//     document.getElementById('desc-modal').classList.add('hidden');
// }