let modal = document.getElementById("pitch-modal")
let content = modal.querySelector("#content")
let str = "";
let amount = 0;

function offer() {
    let amountInput = document.getElementById("amount").value;
    // Convert input values to numbers
    let yourOffer = parseFloat(amountInput);
    console.log(amount)
    let currentAmount = amount; // Example predefined amount
    let random = Math.random() * 100
    let Success = true
    if (!yourOffer || yourOffer <= 0) {
        alert("Please enter a valid offer amount.");
        return;
    }
    if(random <=50){
        random + 20
    }
    if (yourOffer < currentAmount) {
        if(random>=20){
            // alert("Success! Your offer is accepted. Congratulations");
            content.textContent = "Please wait..."
            setTimeout(() => {
                content.textContent = `Now they are offering you $${yourOffer}. Congratulations!`
            }, 2000);
        }else{
            Success = false
            amount = 0
            alert(`Your offer $${yourOffer} is too low for them to give you that amount. Try again`)
        }
    } else {
        if(random>=70){
            content.textContent = "Please wait..."
            setTimeout(() => {
                content.textContent = `Now they are offering you $${yourOffer}. Congratulations!`
            }, 2000);
        }
        else{
            Success = false
            amount = 0
            alert(`Your offer $${yourOffer} is too high for them to give you that amount. Try again`)
        }
    }
    if(Success){
        document.getElementById('negotiate-option').classList.add('hidden');
        document.getElementById('button-holder').classList.remove('hidden');
        document.getElementById('counter-offer').classList.add('hidden');
        document.getElementById('negotiateButton').classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
const checkboxes = document.querySelectorAll(".form-checkbox");
const pitchButton = document.getElementById("pitch-btn")
// Disable button initially
pitchButton.disabled = true;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            // Uncheck all other checkboxes
            checkboxes.forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
            // Enable the button if one is checked, disable if none are checked
            // Enable or disable button based on checkbox selection
            if (this.checked) {
                console.log(str)
                str =  pitch(this.id)
                console.log(str)
                pitchButton.disabled = false;
                pitchButton.classList.remove("bg-gray-400");
                pitchButton.classList.add("hover:bg-blue-600","bg-blue-400"); // Add hover effect
            } else {
                str =  pitch(null)
                pitchButton.disabled = true;
                pitchButton.classList.add("bg-gray-400");
                pitchButton.classList.remove("hover:bg-blue-600","bg-blue-400"); // Remove hover effect
            }
        });
    });
});

document.getElementById("pitch-btn").addEventListener("click", function () {

  modal.classList.remove("hidden"); // Show the modal
  content.innerHTML = "Loading..."
  setTimeout(() => {
      content.innerHTML = str
  }, 1500); // 2000ms = 2 seconds
       
});

function pitch(id){
    let random = Math.random() * 100
    switch(id){
        case "1":
            if(random > 50){
                amount = 10000
                return "Success! Your Bank offers you a Micro Loan worth $10,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
        case "2":
            amount = 20000
            if(random > 50){
                return "Success! Your Bank offers you a Equipment Financing worth $20,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
        case "3":
            amount = 30000
            if(random > 50){
                return "Success! Your Bank offers you a CDFI Loan worth $30,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
        case "4":
            amount = 5000
            return "Best of Luck!"
        case "5":
            amount = 10000
            if(random > 50){
                return "Success! An investor wants to invest in your business worth $10,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
        case "6":
            amount = 15000
            if(random > 50){
                return "Success! A Small Private investor wants to invest in your business worth $15,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
        case "7":
            amount = 25000
            if(random > 50){
                return "Success! An Angel investor wants to invest in your business worth $25,000. Congratulations!" 
            }
            return "You Failed your pitch. They wont offer you a Loan"
    }
}

// JavaScript for Modal Functionality 
    let description = [
        "A microloan is a small loan designed for individuals or small businesses, particularly those with limited access to traditional financial services. It's often used for starting or expanding businesses, managing daily expenses, or addressing urgent financial needs.",
        "Equipment financing is a method where businesses secure funding to purchase or lease necessary equipment, machinery, or technology assets without needing to pay the full cost upfront",
        "CDFI loans, from Community Development Financial Institutions, are a type of financing that focuses on serving underserved communities with flexible terms and often lower requirements than traditional banks. They help support community development by providing funds for affordable housing, community facilities, and small businesses, particularly in low-income areas.",
        "Well, that is self explanatroy. It is the money from your own pocket",
        "A family investor generally refers to an individual who invests money from their own personal resources, often with the goal of generating income, wealth, or other financial benefits for their family. This can encompass a range of activities, from direct investments in businesses or assets to managing a family's overall financial portfolio through a family office or other investment vehicles.",
        "A small private investor refers to an individual or group that invests relatively small amounts of their own money, typically in a business venture or other asset, without seeking capital from larger institutional investors. They are often individuals or groups investing their own capital, potentially including friends and family, who commit smaller amounts of capital to a business.",
        "An angel investor is an individual who invests their own money in a private company, usually a startup, in exchange for equity or convertible debt. They often provide capital in the early stages of a business's development, before venture capitalists are involved. Angel investors may also offer mentorship, advice, and connections to help the business grow."
    ]
    function showDescription(n) {
        let modal = document.getElementById("result-modal");
        let paragraphs = modal.querySelectorAll("p"); // Select all <p> tags inside the modal
        
        // Ensure the modal is visible
        modal.classList.remove("hidden");
    
        // Set text content of the first <p> tag to the selected description
        if (n >= 1 && n <= description.length) {
            paragraphs[0].textContent = description[n - 1]; // Assign based on the passed index
        } else {
            paragraphs[0].textContent = "Invalid selection"; // Fallback for out-of-range values
        }
    }
  
    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("result-modal").classList.add("hidden");
    });
    function deal(){
        if(amount == 0){
            console.log("balance 0")
            return
        }
        updatePlayerProperty("balance",amount)
        
        window.location.href = "mod3t4"
    } 
    function closeModal(){
      document.getElementById("pitch-modal").classList.add("hidden");
      document.getElementById('negotiate-option').classList.add('hidden');
      document.getElementById('button-holder').classList.remove('hidden');
      document.getElementById('counter-offer').classList.add('hidden');
      document.getElementById('negotiateButton').classList.remove('hidden');
  }
  // Show the hidden modal body when the Negotiate button is clicked
  document.getElementById('negotiateButton').addEventListener('click', function() {
      document.getElementById('negotiate-option').classList.remove('hidden');
      document.getElementById('button-holder').classList.add('hidden');
      document.getElementById('counter-offer').classList.remove('hidden');
  });