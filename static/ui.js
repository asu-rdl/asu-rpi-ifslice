// scripts.js
const failModal = document.getElementById("failModal");
const successModal = document.getElementById("successModal");
const rfout_element = document.getElementById('rfout_atten_val');
const rfin_element  = document.getElementById('rfin_atten_val');
const btn_setatten = document.getElementById('btn_setatten')
const btn_setsynth = document.getElementById('btn_setsynth')
const synth_power_elem = document.getElementById('synthesizer-power')
const synth_freq_elem = document.getElementById('synthesizer-frequency')

//attech enter key event listeners to each box
rfout_element.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
    event.preventDefault();
    btn_setatten.click();
  }
});
rfin_element.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
    event.preventDefault();
    btn_setatten.click();
  }
});
synth_freq_elem.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
      event.preventDefault();
      btn_setsynth.click();
    }
  });
synth_power_elem.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
      event.preventDefault();
      btn_setsynth.click();
    }
  });

btn_setatten.onclick = function(){
  setAttenuatorValues();
};

btn_setsynth.onclick = function(){
  setValon();
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

function setAttenuatorValues(){
  var rfout = parseFloat(rfout_element.value);
  var rfin = parseFloat(rfin_element.value);
  if (!(rfout >= 0 && rfout <= 31.75)){
    rfout_element.value = "";
    document.getElementById("failure_message").innerText = "Please set the RFOUT/DRIVE attenuation to between 0 and 31.75";
    showModal("failModal");
    return;
  }
  if (!(rfin >= 0 && rfin <= 31.75)){
    rfin_element.value = "";
    document.getElementById("failure_message").innerText = "Please set the RFIN/SENSE attenuation to between 0 AND 31.75";
    showModal("failModal");
    return;
  }
  var response = fetch("/atten",  {
    method: "POST",
    body: JSON.stringify({rfout: rfout, rfin: rfin}),
    headers: {
      "Content-Type": "application/json"
    }
  
  });
  //Check if positive response
  showModal("successModal");
}
function setValon(){
  var power = document.getElementById('synthesizer-power');
  var freq = document.getElementById('synthesizer-frequency');
  console.log(power.value);
  console.log(freq.value);
  var response = fetch("/synth/",  {
    method: "POST",
    body: JSON.stringify({power: power.value, frequency: freq.value}),
    headers: {
      "Content-Type": "application/json"
    }
  
  });
}

