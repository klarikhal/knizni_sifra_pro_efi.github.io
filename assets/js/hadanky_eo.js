function validateForm1() {
  let x = document.forms["myForm"]["fname"].value;
  if (x=="Čajkovskij") {
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
  if (x=="Filipjevna") {
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
  if (x=="Generál") {
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
    if (x=="Duel") {
      alert("Správně, otevři si první obálku!!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 