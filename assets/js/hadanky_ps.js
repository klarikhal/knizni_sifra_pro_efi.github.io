function validateForm1() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();
  if (x.toLowerCase()=="zmizet".toLowerCase()) {
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
  if (x.toLowerCase()=="nikdo není sám".toLowerCase()) {
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
  if (x.toLowerCase()=="cenu jiřího ortena") {
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
    if (x.toLowerCase()=="kosmo") {
      alert("Správně, otevři si obálku s číslem 4!!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 