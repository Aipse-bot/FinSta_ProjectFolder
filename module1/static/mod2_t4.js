document.addEventListener('DOMContentLoaded', function() {
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
    const location = sessionStorage.getItem('location'); // Location type
    const targetMarket = sessionStorage.getItem('targetMarket'); // Target market

    // Retrieve player data from sessionStorage
    let storedPlayer = JSON.parse(sessionStorage.getItem("playerData"));
    const userName = "User";

    const businessType = option1 !== null && businessTypes[parseInt(option1)] ? businessTypes[parseInt(option1)] : "Not Selected";

    console.log("Retrieved Values:");
    console.log("Option1 (Business Type Index):", storedPlayer.businessType);
    console.log("Business Goal (option2):", storedPlayer.businessGoal);
    console.log("Business Name (option3):", storedPlayer.businessName);
    console.log("Location:", storedPlayer.businessLocation);
    console.log("Target Market:", targetMarket);

    const userNameElements = document.querySelectorAll('h2');
    const businessNameElements = document.querySelectorAll('p');

    userNameElements.forEach(el => {
        if (el.innerText.includes('{user name}')) {
            el.innerText = el.innerText.replace('{user name}', userName);
        }
    });

    businessNameElements.forEach(p => {
        if (p.innerText.includes('{business name}')) {
            console.log("Replacing business name with:", businessName || "Not Selected");
            p.innerText = p.innerText.replace('{business name}', storedPlayer.businessName || "Not Selected");
            p.classList.add('business-name');
        }
        if (p.innerText.includes('{home-based/physical store/commercial space}')) {
            p.innerText = p.innerText.replace('{home-based/physical store/commercial space}', storedPlayer.businessLocation || "Not Selected");
            p.classList.add('location');
        }
        if (p.innerText.includes('{business type}')) {
            p.innerText = p.innerText.replace('{business type}', storedPlayer.businessType);
            p.classList.add('business-type');
        }
        if (p.innerText.includes('{target market}')) {
            p.innerText = p.innerText.replace('{target market}', targetMarket || "Not Selected");
            p.classList.add('target-market');
        }
        if (p.innerText.includes('{business goal}')) {
            p.innerText = p.innerText.replace('{business goal}', storedPlayer.businessGoal || "Not Selected");
            p.classList.add('business-goal');
        }
    });

    const businessNameElement = document.querySelector('.business-name');
    if (!businessNameElement) {
        console.error("Business name element not found in the DOM!");
    }
});

function reset() {
    sessionStorage.clear();
    window.location.href = "mod1t1t2";
}

function proceed() {
    window.location.href = "mod3t1t2t3";
}