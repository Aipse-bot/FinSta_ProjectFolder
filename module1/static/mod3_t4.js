document.addEventListener('DOMContentLoaded', function() {
    togglePlanOrigin(1); // 0: sessionStorage, 1: Django, 2: both
    loadSessionData(); // takes data from player object, unused if only django is used
    printPlayerInfo();
    // Add redirect logic for summary cards
    document.querySelectorAll('.summary-card').forEach(function(card) {
        card.addEventListener('click', function() {
            const url = card.getAttribute('data-redirect');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
// from view
// remove comments if location is saved to the database after mod3_t1t2t3
// loc = player.businessLocation
// targetMarket = location_map.get(loc, {}).get("targetMarket", "")
// maxEmployee = location_map.get(loc, {}).get("maxEmployee", "")

// Uncomment if using sessionStorage instead
// const businessNameElement = document.querySelector('.business-name');
// if (!businessNameElement) {
//     console.error("Business name element not found in the DOM!");
// }

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
    const player = sessionStorage.getItem("playerData");
    const businessName = player ? JSON.parse(player).businessName : null; 
    const businessLocation = player ? JSON.parse(player).businessLocation.location : null;
    const businessType = player ? JSON.parse(player).businessType : null;
    const targetMarket = player ? JSON.parse(player).businessLocation.targetMarket : null;
    const businessGoal = player ? JSON.parse(player).businessGoal : null; // empty
    const maxEmployee = player ? JSON.parse(player).businessLocation.maxEmployee : null;
    
    replaceText(businessName, "company-name");
    replaceText(businessLocation, "business-location");
    replaceText(businessType, "business-type");
    replaceText(targetMarket, "target-market");
    replaceText(businessGoal, "business-goal");
    replaceText(maxEmployee, "max-employee");
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

function togglePlanOrigin(showWithDjango) {
    // checks showWithDjango value and toggles the visibility of elements accordingly
    document.querySelectorAll('.using-django').forEach(el => {
        if (showWithDjango === 1 || showWithDjango === 2) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
    document.querySelectorAll('.using-session').forEach(el => {
        if (showWithDjango === 0 || showWithDjango === 2) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

function reset() {
    sessionStorage.clear();
    window.location.href = "intro";
}

function proceed() {
    window.location.href = "mod4t1";
}
