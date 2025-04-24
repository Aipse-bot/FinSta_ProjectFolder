    // Function to show the modal
    let current_open_modal_id = ""

    function openModal(id) {
        current_open_modal_id = id
        const modal = document.getElementById(current_open_modal_id);
        const resultDiv = modal.querySelector("#result-div");
        const dummyDiv = modal.querySelector("#dummy-div");
        
    
        modal.classList.remove("hidden");  // Show the modal
        resultDiv.classList.add("hidden"); // Hide the content initially
        
        setTimeout(() => {
        dummyDiv.classList.add("hidden");
        resultDiv.classList.remove("hidden"); // Reveal after delay
        }, 2000);
    }
    
    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById(current_open_modal_id);
        const resultDiv = modal.querySelector("#result-div");
        const dummyDiv = modal.querySelector("#dummy-div");

        modal.classList.add("hidden");             // Hide modal 
        dummyDiv.classList.remove("hidden");       // Reset dummy content
        resultDiv.classList.add("hidden");         // Hide result content
    }
    
    
    // Function to handle the continue action
    function continueAction() {
    // Add your redirect or other action here
    console.log("Continue action triggered.");
    closeModal();  // Close the modal after the action
    window.location.href = "mod2t4"
    }

    