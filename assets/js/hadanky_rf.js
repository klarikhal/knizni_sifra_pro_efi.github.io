


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
  if (x=="Jára Cimrman") {
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
  if (x=="Kréta") {
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
  if (x=="Každý den odpoledne si zdřímni.") {
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
    if (x=="2017") {
      alert("Správně, otevři si balíček číslo 3!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 
