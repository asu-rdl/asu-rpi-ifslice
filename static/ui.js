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

