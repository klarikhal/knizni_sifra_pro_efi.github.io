jmena = ["tchaikovsky","čajkovskij"]

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
  if (x=="filipjevna") {
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
  if (x=="generál") {
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
    if (x=="duel") {
      alert("Správně, otevři si první balíček!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 