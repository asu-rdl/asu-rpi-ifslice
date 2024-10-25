function setAttenuatorValues(){
  var chan = 0;

  var rfout_element = document.getElementById('rfout_atten_val');
  var rfin_element  = document.getElementById('rfin_atten_val');
  var rfout = parseFloat(rfout_element.value);
  var rfin = parseFloat(rfin_element.value);
  if (!(rfout >= 0 && rfout <= 31.75)){
    rfout.value = "";
    window.alert("Error, please enter a valid range for rfout 0 through 31.75");
    return;
  }
  if (!(rfin >= 0 && rfin <= 31.75)){
    rfin.value = "";
    window.alert("Error, please enter a valid range for rfin 0 through 31.75");
    return;
  }
  var response = fetch("/atten",  {
    method: "POST",
    body: JSON.stringify({rfout: rfout, rfin: rfin}),
    headers: {
      "Content-Type": "application/json"
    }
  
  });
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

