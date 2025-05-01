document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    checkInput();
});

function checkInput() {
    const input = document.getElementById('businessNameInput');
    const nameOptions = document.querySelectorAll('.name-option');
    
    if (input.value.trim() !== '') {
        nameOptions.forEach(option => {
            option.classList.add('opacity-50', 'pointer-events-none');
        });
    } else {
        nameOptions.forEach(option => {
            option.classList.remove('opacity-50', 'pointer-events-none');
        });
    }
}

let selectedBusinessName = ""; // temp var kay di jd mo sud

function selectBusinessName(name) {
    selectedBusinessName = name; // Store the name temporarily
    const modal = document.getElementById("businessNameModal");
    const text = document.getElementById("businessNameText");
    text.innerHTML = `"<strong>${name}</strong>". Proceed?`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function proceedToNextPhase() {
    if (selectedBusinessName) {
        // Store the business name in sessionStorage only when the user confirms
        sessionStorage.setItem('option3', selectedBusinessName);
        console.log("Business name stored:", selectedBusinessName);
    }
    window.location.href = "mod2t1t2t3";
}

function closeBusinessNameModal() {
    const modal = document.getElementById("businessNameModal");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    selectedBusinessName = ""; // Clear the temporary variable if the user cancels
}

function submitCustomName() {
    const input = document.getElementById('businessNameInput');
    const name = input.value.trim();
    
    if (name !== '') {
        selectedBusinessName = name; // Store the custom name temporarily
        const modal = document.getElementById("businessNameModal");
        const text = document.getElementById("businessNameText");
        text.innerHTML = `"<strong>${name}</strong>". Proceed?`;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    } else {
        alert('Please enter a business name');
    }
}