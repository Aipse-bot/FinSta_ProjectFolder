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

// // todo 4-6 done
// document.addEventListener('DOMContentLoaded', function() {
//     // todo 4.) After clicking the colored boxes it should redirect to 'mod1t4.html'
//     const goalOptions = document.querySelectorAll('#goal-opt1, #goal-opt2, #goal-opt3');
    
//     goalOptions.forEach(option => {
//         option.addEventListener('click', function() {
//             window.location.href = '/mod1t4';
//         });
//         option.style.cursor = 'pointer';
//     });

//     const nameOptionElements = document.querySelectorAll('.goal-icon');
//     const businessNameInput = document.querySelector('.businessNameInput');
    
//     // todo 5.) If one of the following is click create a alert to simulate the next phase of the game
//     if (nameOptionElements.length > 0 && businessNameInput) {
//         nameOptionElements.forEach(nameOption => {
//             nameOption.style.cursor = 'pointer';
//             nameOption.addEventListener('click', function() {
//                 alert("Business name selected, moving to the next phase...");
//             });
//         });
        
//         // todo 6.) if the input field is not empty, goal-icons div should not be clickable (disabled)
//         businessNameInput.addEventListener('input', function() {
//             const inputValue = this.value.trim();
            
//             if (inputValue !== '') {
//                 nameOptionElements.forEach(nameOption => {
//                     nameOption.style.pointerEvents = 'none';
//                     nameOption.style.opacity = '0.5';
//                 });
//             } else {
//                 nameOptionElements.forEach(nameOption => {
//                     nameOption.style.pointerEvents = 'auto';
//                     nameOption.style.opacity = '1';
//                 });
//             }
//         });
        
//         businessNameInput.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter' && this.value.trim() !== '') {
//                 alert("Custom business name '" + this.value + "' selected, moving to the next phase...");
//             }
//         });
//     }
// });





// mod t4 script


// document.addEventListener('DOMContentLoaded', function() {
//     feather.replace();
// });

// function checkInput() {
//     const input = document.getElementById('businessNameInput');
//     const nameOptions = document.querySelectorAll('.name-option');
    
//     if (input.value.trim() !== '') {
//         nameOptions.forEach(option => {
//             option.classList.add('opacity-30', 'pointer-events-none');
//         });
//     } 
// }

// function selectBusinessName(namecustome) {
//     alert('You selected: ' + namecustome + '\nMoving to the next phase...');
// }

// function submitCustomName() {
//     const input = document.getElementById('businessNameInput');
//     const namecustome = input.value.trim();
    
//     if (namecustome !== '') {
//         alert('You entered: ' + namecustome + '\nMoving to the next phase...');
//     } 
// }