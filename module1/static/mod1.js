function openModal(optId){

    document.getElementById('staticBackdropLabel').innerText = "Business type of the option";
    document.querySelector('#staticBackdrop .modal-body').innerText = "detailed description of the business";
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();

    console.log(`click option of ${optId}`)

}

