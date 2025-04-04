function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x=="Muriel") {
    alert("Správně, otevři poslední obálku!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
} 

