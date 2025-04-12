checkBusinessNameInput();

// This chunk runs when the user types in the business name input field
const businessNameInput = document.getElementById("businessNameInput");
businessNameInput.addEventListener("input", function() {
    checkBusinessNameInput();
})
function checkBusinessNameInput() {
    const businessNameInput = document.getElementById("businessNameInput");
    const goalIcons = document.getElementsByClassName("goal-icon");
    const isInputEmpty = businessNameInput.value.trim() === "";

    for (let i = 0; i < goalIcons.length; i++) {
        if (isInputEmpty) {
            goalIcons[i].style.cursor = "pointer";
            goalIcons[i].setAttribute("onclick", `goalIconAlert(${i+1})`);
            goalIcons[i].classList.remove("pointer-events-none", "opacity-100");
        } else {
            goalIcons[i].style.cursor = "not-allowed";
            goalIcons[i].removeAttribute("onclick");
            goalIcons[i].classList.add("pointer-events-none", "opacity-0");
        }
    }
}

// This function runs when a goal icon is clicked
function goalIconAlert(id) {
    const businessNameInput = document.getElementById("businessNameInput");
    const isInputEmpty = businessNameInput.value.trim() === "";
    if (!isInputEmpty) {
        return;
    }
    alert("Business Name " + id + " Selected" + "\n");
}