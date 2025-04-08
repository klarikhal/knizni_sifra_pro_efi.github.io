
jmena = ["Percival","Wulfric","Brian"]

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
  let x = document.forms["myForm"]["fname"].value;
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
  let x = document.forms["myForm"]["fname"].value;
  if (x=="Errol") {
    alert("Správně, pokračuj k další hádance!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
  } 

function validateForm3() {
  let x = document.forms["myForm"]["fname"].value;
  if (x=="Greyfriars Kirkyard") {
    alert("Správně, pokračuj k další hádance!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
  } 

  function validateForm4() {
    let x = document.forms["myForm"]["fname"].value;
    if (x=="Tichošlápek") {
      alert("Správně, pokračuj k další hádance!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 

    function validateForm5() {
      let x = document.forms["myForm"]["fname"].value;
      if (x=="Draco Dormiens Nunquam Titillandus") {
        alert("Správně, otevři si obálku s číslem 2!");
        return false;
      }
      else{
        alert("Špatně, zkus to znovu.");
        return false;
      }
      } 