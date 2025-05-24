document.addEventListener('DOMContentLoaded', function() {
    // oldLoadSessionData();
    // loadSessionData();
    printPlayerInfo();
    // Add redirect logic for summary cards
    // cardRedirect();
});

function oldLoadSessionData() {
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

    // Retrieve stored values from sessionStorage
    const option1 = sessionStorage.getItem('option1'); // Business type index
    const businessGoal = sessionStorage.getItem('option2'); // Business goal
    const businessName = sessionStorage.getItem('option3'); // Business name
    const businessLocation = sessionStorage.getItem('businessLocation'); // Location type
    const targetMarket = sessionStorage.getItem('targetMarket'); // Target market
    const maxEmployees = sessionStorage.getItem('maxEmployees'); // Max employees

    // Retrieve player data from sessionStorage
    let storedPlayer = JSON.parse(sessionStorage.getItem("playerData"));
    const userName = "User";
    const businessType = option1 !== null && businessTypes[parseInt(option1)] ? businessTypes[parseInt(option1)] : "Not Selected";

    console.log("Retrieved Values:");
    console.log("Session Storage:", sessionStorage);
    console.log("Stored Player Data:", storedPlayer);
    // remove comment if player is updated for every page
    //console.log("Location:", storedPlayer.businessLocation);
    console.log("Location:", location);
    console.log("Target Market:", targetMarket);

    const userNameElements = document.querySelectorAll('h2');
    const businessNameElements = document.querySelectorAll('p');

    userNameElements.forEach(el => {
        if (el.innerText.includes('{user name}')) {
            el.innerText = el.innerText.replace('{user name}', userName);
        }
    });

    businessNameElements.forEach(p => {
        if (p.innerText.includes('{businessName}')) {
            console.log("Replacing business name with:", businessName || "Not Selected");
            p.innerText = p.innerText.replace('{businessName}', storedPlayer.businessName || "Not Selected");
            p.classList.add('business-name');
        }
        if (p.innerText.includes('{businessLocation}')) {
            p.innerText = p.innerText.replace('{businessLocation}', location || "Not Selected");
            p.classList.add('business-location');
        }
        if (p.innerText.includes('{businessType}')) {
            p.innerText = p.innerText.replace('{businessType}', storedPlayer.businessType);
            p.classList.add('business-type');
        }
        if (p.innerText.includes('{targetMarket}')) {
            p.innerText = p.innerText.replace('{targetMarket}', location || "Not Selected");
            p.classList.add('target-market');
        }
        if (p.innerText.includes('{businessGoal}')) {
            p.innerText = p.innerText.replace('{businessGoal}', storedPlayer.businessGoal || "Not Selected");
            p.classList.add('business-goal');
        }
        if (p.innerText.includes('{maxEmployee}')) {
            p.innerText = p.innerText.replace('{maxEmployee}', location || "Not Selected");
            p.classList.add('max-employee');
        }
    });

}

function loadSessionData() {
    location_map = {
        "home-based": {
            "targetMarket": "Teens and young adults, Small businesses, Event organizers",
            "maxEmployee": 3
        },
        "physical-store": {
            "targetMarket": "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
            "maxEmployee": 10
        },
        "commercial-space": {
            "targetMarket": "Working professionals, Stress-relief seekers, Health-conscious individuals",
            "maxEmployee": 20
        }
    }
    // const player = sessionStorage.getItem("playerData");
    const businessName = player ? JSON.parse(player).businessName : null; 
    // const businessLocation = player ? JSON.parse(player).businessLocation.location : null;
    // const businessType = player ? JSON.parse(player).businessType : null;
    // const targetMarket = player ? JSON.parse(player).businessLocation.targetMarket : null;
    // const businessGoal = player ? JSON.parse(player).businessGoal : null; // empty
    // const maxEmployee = player ? JSON.parse(player).businessLocation.maxEmployee : null;
    
    replaceText(businessName, "company-name");
    // replaceText(businessLocation, "business-location");
    // replaceText(businessType, "business-type");
    // replaceText(targetMarket, "target-market");
    // replaceText(businessGoal, "business-goal");
    // replaceText(maxEmployee, "max-employee");
}

function replaceText(value, parentId) {
    const parent = document.getElementById(parentId);
    if (!parent) return;
    // Get all <p> children inside the parent
    const pElements = parent.querySelectorAll('p');
    // Only update the last two <p> elements
    pElements.forEach((el, idx) => {
        // if (idx === pElements.length - 2 || idx === pElements.length - 1) {
        if (idx === pElements.length - 1) {
            if (value) {
                el.textContent = value;
            } else {
                el.textContent = "N/A";
            }
        }
    });
}

// moved unused function
function cardRedirect() {
    document.querySelectorAll('.summary-card').forEach(function(card) {
        card.addEventListener('click', function() {
            const url = card.getAttribute('data-redirect');
            if (url) {
                window.location.href = url;
            }
        });
    });
}

function reset() {
    fetch("reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken") // Ensure CSRF token is included
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        sessionStorage.clear();
        window.location.href = "login";
    })
    .catch(error => console.error("Error:", error));
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function proceed() {
    window.location.href = "mod4t1";
}