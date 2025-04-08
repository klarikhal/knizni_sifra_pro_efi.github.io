function validateForm() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();
  if (x=="muriel") {
    alert("Správně, otevři si poslední balíček! Děkuji, že jsi došla až sem, jsi nejlepší a mám tě ráda!");
    return false;
  }
  else{
    alert("Špatně, zkus to znovu.");
    return false;
  }
} 

