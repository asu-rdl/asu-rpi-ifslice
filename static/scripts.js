// scripts.js
const styledModal = document.getElementById("styledModal");
const successModal = document.getElementById("successModal");
const openStyledModalBtn = document.getElementById("openStyledModalBtn");
const openSuccessBtn = document.getElementById("openSuccessBtn");

openStyledModalBtn.onclick = function() {
    showModal("styledModal");
};
openSuccessBtn.onclick = function(){
    showModal("successModal");
};
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("show");
    modal.classList.remove("hide");
    modal.style.display = "block";

    // Automatically close the modal after 3 seconds (optional)
    setTimeout(() => {
        closeModal(modalId);
    }, 3000); // Adjust the time as needed
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("hide");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500); // Match the duration of the fadeOut animation
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
    }
};
