let current_open_modal_id = ""
    function openModal(id) {
        current_open_modal_id = id
        console.log(id)
        const modal = document.getElementById(id);
        const resultDiv = modal.querySelector("#result-div");
        const dummyDiv = modal.querySelector("#dummy-div");
        const cancelButton = modal.querySelector("#closebtn");
        const proceedButton = modal.querySelector("#submitbtn");

        document.getElementById("businessLocation").value = current_open_modal_id
        let nameField = document.getElementById("name");

        document.getElementById("name").classList.add("hidden")
        document.getElementById("name").removeAttribute("required");

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
        const cancelButton = modal.querySelector("#closebtn");
        const proceedButton = modal.querySelector("#submitbtn");
        
        modal.classList.add("hidden");             
        dummyDiv.classList.remove("hidden");       
        resultDiv.classList.add("hidden");         
        
        document.getElementById("name").classList.add("hidden")
        document.getElementById("name").removeAttribute("required");

        cancelButton.disabled = true;
        proceedButton.disabled = true;
        cancelButton.classList.add("opacity-50", "cursor-not-allowed");
        proceedButton.classList.add("opacity-50", "cursor-not-allowed");
    }
        
    function continueAction() {
        // Map modal IDs to location types and target markets
        const locationData = {
            "home-based-modal": {
                location: "Home-Based",
                targetMarket: "Teens and young adults, Small businesses, Event organizers",
                maxEmployees: 3
            },
            "physical-store-modal": {
                location: "Physical Store",
                targetMarket: "Professionals needing bespoke suits, Fashion-forward individuals, High-income earners",
                maxEmployees: 10
            },
            "commercial-space-modal": {
                location: "Commercial Space",
                targetMarket: "Working professionals, Stress-relief seekers, Health-conscious individuals",
                maxEmployees: 20
            }
        };
        // Store the selected location and target market in sessionStorage
        const selectedLocationData = locationData[current_open_modal_id];
        sessionStorage.setItem('businessLocation', selectedLocationData.location);
        sessionStorage.setItem('targetMarket', selectedLocationData.targetMarket);
        sessionStorage.setItem('maxEmployees', selectedLocationData.maxEmployees);
        
        // Store the selected location in player data
        updatePlayerProperty("businessLocation", selectedLocationData.location);

        // remove comment if player is updated for every page
        //updatePlayerProperty("businessLocation", selectedLocationData.location);
        console.log("Continue action triggered.");
        closeModal();  // Close the modal after the action
        printPlayerInfo()
        window.location.href = "mod2t4";
    }