function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x=="Muriel") {
    alert("Správně, máš hotovo!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
} 

