function setAttenuatorValues(){
  var chan = 0
  var rfout = document.getElementById('rfout_atten_val')
  rfin = document.getElementById('rfin_atten_val')
  console.log(rfout.value)
  console.log(rfin.value)
  var response = fetch("/atten",  {
    method: "POST",
    body: JSON.stringify({rfout: rfout.value, rfin: rfin.value}),
    headers: {
      "Content-Type": "application/json"
    }
  
  })
}
function setValon(){
  var power = document.getElementById('synthesizer-power')
  var freq = document.getElementById('synthesizer-frequency')
  console.log(power.value)
  console.log(freq.value)
  var response = fetch("/synth/",  {
    method: "POST",
    body: JSON.stringify({power: power.value, frequency: freq.value}),
    headers: {
      "Content-Type": "application/json"
    }
  
  })
}

