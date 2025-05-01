// Function to show the modal
let current_open_modal_id = "";

function openModal(id) {
    current_open_modal_id = id;
    const modal = document.getElementById(current_open_modal_id);
    const resultDiv = modal.querySelector("#result-div");
    const dummyDiv = modal.querySelector("#dummy-div");
    const cancelButton = modal.querySelector("button[onclick='closeModal()']");
    const proceedButton = modal.querySelector("button[onclick='continueAction()']");

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
    const modal = document.getElementById(current_open_modal_id);
    const resultDiv = modal.querySelector("#result-div");
    const dummyDiv = modal.querySelector("#dummy-div");
    const cancelButton = modal.querySelector("button[onclick='closeModal()']");
    const proceedButton = modal.querySelector("button[onclick='continueAction()']");

    modal.classList.add("hidden");             
    dummyDiv.classList.remove("hidden");       
    resultDiv.classList.add("hidden");         

    cancelButton.disabled = true;
    proceedButton.disabled = true;
    cancelButton.classList.add("opacity-50", "cursor-not-allowed");
    proceedButton.classList.add("opacity-50", "cursor-not-allowed");
}

function continueAction() {
    console.log("Continue action triggered.");
    closeModal();  // Close the modal after the action
    window.location.href = "mod2t4";
}