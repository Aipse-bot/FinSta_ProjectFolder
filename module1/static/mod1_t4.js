let name = null;
// icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
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

// handle name option selection
function selectBusinessName(str) {
    name = str;
    const modal = document.getElementById("businessNameModal");
    const text = document.getElementById("businessNameText");
    text.innerHTML = `"<strong>${str}</strong>". Proceed?`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeBusinessNameModal() {
    const modal = document.getElementById("businessNameModal");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
}

function proceedToNextPhase() {
    if(name==null){
        console.log("name: null")
        return;
    }
    updatePlayerProperty("businessName",name)
    printPlayerInfo()
    //window.location.href = "{% url 'mod2t1t2t3' %}";
}

// custom name
function submitCustomName() {
    const input = document.getElementById('businessNameInput');
    const str = input.value.trim();
    
    if (str !== '') {
        const modal = document.getElementById("businessNameModal");
        const text = document.getElementById("businessNameText");
        text.innerHTML = `"<strong>${str}</strong>". Proceed?`;
        updatePlayerProperty("businessName",name)
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    } else {
        alert('Please enter a business name');
    }
}