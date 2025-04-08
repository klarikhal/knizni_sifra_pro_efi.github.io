function validateForm1() {
  let x = document.forms["myForm"]["fname"].value;
  if (x.toLowerCase()=="Zmizet".toLowerCase()) {
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
  if (x.toLowerCase()=="Nikdo není sám".toLowerCase()) {
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
  if (x.toLowerCase()=="Cenu Jiřího Ortena".toLowerCase()) {
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
    if (x.toLowerCase()=="Kosmo".toLowerCase()) {
      alert("Správně, otevři si obálku s číslem 4!!");
      return false;
    }
    else{
      alert("Špatně, zkus to znovu.");
      return false;
    }
    } 