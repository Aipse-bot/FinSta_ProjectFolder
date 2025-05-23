/**
 * Modal Management Script
 * Handles modal behavior, selection storage, and UI transitions.
 */

let current_open_modal_id = "";

/**
 * Opens the specified modal, triggers loading animation,
 * and then displays modal content after a delay.
 * @param {string} id - The modal element ID to open.
 */
function openModal(id) {
    current_open_modal_id = id;
    const modal = document.getElementById(id);
    const resultDiv = modal.querySelector("#result-div");
    const dummyDiv = modal.querySelector("#dummy-div");
    const cancelButton = modal.querySelector("button[onclick='closeModal()']");
    const proceedButton = modal.querySelector("button[onclick='continueAction()']");

    // Reset state
    modal.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    dummyDiv.classList.remove("hidden");
    disableButtons(cancelButton, proceedButton);

    // Simulate loading delay
    setTimeout(() => {
        dummyDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden");
        enableButtons(cancelButton, proceedButton);
    }, 2000);
}

/**
 * Closes the currently open modal and resets its state.
 */
function closeModal() {
    const modal = document.getElementById(current_open_modal_id);
    const resultDiv = modal.querySelector("#result-div");
    const dummyDiv = modal.querySelector("#dummy-div");
    const cancelButton = modal.querySelector("button[onclick='closeModal()']");
    const proceedButton = modal.querySelector("button[onclick='continueAction()']");

    modal.classList.add("hidden");
    dummyDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    disableButtons(cancelButton, proceedButton);

    current_open_modal_id = "";
}

/**
 * Continues to the next step after confirmation, storing selected values.
 */
function continueAction() {
    const locationData = {
        "home-based-modal": {
            location: "Home-Based",
            targetMarket: "Teens and young adults, Small businesses, Event organizers"
        },
        "physical-store-modal": {
            location: "Physical Store",
            targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners"
        },
        "commercial-space-modal": {
            location: "Commercial Space",
            targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals"
        }
    };

    const selected = locationData[current_open_modal_id];
    if (!selected) {
        console.error("Unknown modal ID: ", current_open_modal_id);
        return;
    }

    sessionStorage.setItem('location', selected.location);
    sessionStorage.setItem('targetMarket', selected.targetMarket);

    updatePlayerProperty("businessLocation", selected.location);
    console.log(`[INFO] Selected location stored: ${selected.location}`);
    
    closeModal();
    printPlayerInfo();

    // Optional: Redirect
    // window.location.href = "mod2t4";
}

/**
 * Disables action buttons and adds visual indication.
 * @param {HTMLElement} cancelBtn 
 * @param {HTMLElement} proceedBtn 
 */
function disableButtons(cancelBtn, proceedBtn) {
    [cancelBtn, proceedBtn].forEach(btn => {
        btn.disabled = true;
        btn.classList.add("opacity-50", "cursor-not-allowed");
    });
}

/**
 * Enables action buttons and removes visual indication.
 * @param {HTMLElement} cancelBtn 
 * @param {HTMLElement} proceedBtn 
 */
function enableButtons(cancelBtn, proceedBtn) {
    [cancelBtn, proceedBtn].forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("opacity-50", "cursor-not-allowed");
    });
}
