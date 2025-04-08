
jmena = ["percival","wulfric","brian"]

function showHadanka() {
  alert("Here's your hadanka!");
}
// NAPOVEDY
function help1() {
  var x = document.getElementById("help1") 
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function help2() {
  var x = document.getElementById("help2") 
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

//HADANKY
function validateForm1() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();
  if (jmena.includes(x)) {
    alert("Správně, pokračuj k další hádance!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
} 

function validateForm2() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();
  if (x=="errol") {
    alert("Správně, pokračuj k další hádance!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
  } 

function validateForm3() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();
  if (x=="greyfriars kirkyard") {
    alert("Správně, pokračuj k další hádance!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
  } 

  function validateForm4() {
    let x = document.forms["myForm"]["fname"].value.toLowerCase();
    if (x=="tichošlápek") {
      alert("Správně, pokračuj k další hádance!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 

    function validateForm5() {
      let x = document.forms["myForm"]["fname"].value.toLowerCase();
      if (x=="draco dormiens nunquam titillandus") {
        alert("Správně, otevři si obálku s číslem 2!");
        return false;
      }
      else{
        alert("Špatně, zkus to znovu.");
        return false;
      }
      } 