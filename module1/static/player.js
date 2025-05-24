// Load player data from sessionStorage if available
let player = JSON.parse(sessionStorage.getItem("playerData")) || {
    businessCategory: null,
    businessType: null,
    businessGoal: null,
    businessName: null,
    businessLocation: null,
    targetMarket: null,
    balance: null,
    repaymentOption: null
};

// Function to update player properties dynamically & save to sessionStorage
function updatePlayerProperty(property, value) {
    if (player.hasOwnProperty(property)) {
        player[property] = value;
        sessionStorage.setItem("playerData", JSON.stringify(player)); // Save to sessionStorage
    } else {
        console.error(`Property "${property}" does not exist in player object.`);
    }
}

// Function to print player info (retrieves fresh data from sessionStorage)
function printPlayerInfo() {
    console.log(JSON.parse(sessionStorage.getItem("playerData"))); // Get latest data
}