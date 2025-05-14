let redirectUrl = "";
let selectedGoal = "";

function showConfirmationModal() {
    const goals = {
        "goal-opt1": "Increase Market Reach",
        "goal-opt2": "Optimize Operations",
        "goal-opt3": "Boost Profitability"
    };
    document.getElementById("name").classList.add("hidden")
    document.getElementById("name").removeAttribute("required");
    const elem = event.currentTarget; // Get the clicked element
    const goalId = elem.id;
    selectedGoal = goals[goalId];

    // Update modal text with the selected goal
    const modalText = document.querySelector("#confirmationModal p");
    modalText.innerHTML = `Are you sure you want to choose <strong>"${selectedGoal}"</strong>?`;
    document.getElementById("businessGoal").value = selectedGoal;

    redirectUrl = elem.getAttribute("data-url");
    document.getElementById("confirmationModal").classList.remove("hidden");
}

function closeModal() {
        console.log("asda")
    document.getElementById("confirmationModal").classList.add("hidden");
}