let redirectUrl = "";

function showConfirmationModal() {
  const elem = document.getElementById("goal-opt1");
  redirectUrl = elem.getAttribute("data-url");
  document.getElementById("confirmationModal").classList.remove("hidden");
}

function confirmRedirect() {
  window.location.href = redirectUrl;
}


function closeModal() {
    document.getElementById("confirmationModal").classList.add("hidden");
}
  