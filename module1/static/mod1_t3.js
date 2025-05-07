let redirectUrl = "";
let selectedGoal = "";

function showConfirmationModal() {
    const goals = {
        "goal-opt1": "Increase Market Reach",
        "goal-opt2": "Optimize Operations",
        "goal-opt3": "Boost Profitability"
    };

    const elem = event.currentTarget; // Get the clicked element
    const goalId = elem.id;
    selectedGoal = goals[goalId];

    // Update modal text with the selected goal
    const modalText = document.querySelector("#confirmationModal p");
    modalText.innerHTML = `Are you sure you want to choose <strong>"${selectedGoal}"</strong>?`;

    redirectUrl = elem.getAttribute("data-url");
    document.getElementById("confirmationModal").classList.remove("hidden");
}

function confirmRedirect() {
    // Store the selected goal in sessionStorage as option2
    sessionStorage.setItem('option2', selectedGoal);
    updatePlayerProperty("businessGoal", selectedGoal)
    printPlayerInfo()
    window.location.href = redirectUrl;
}

function closeModal() {
    document.getElementById("confirmationModal").classList.add("hidden");
}