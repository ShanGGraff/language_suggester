//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const scriptingCompiled = $("#scriptingCompiled").val().toUpperCase();
    console.log(scriptingCompiled);
    const coffeeTea = $("#coffeeTea").val().toUpperCase();
    console.log(coffeeTea);
    const gophers =  $("#gophers").val().toUpperCase();
    console.log(gophers);
    const monty = $("#monty").val().toUpperCase();
    console.log(monty);
    const semiColons = $("#semiColons").val().toUpperCase();
    console.log(semiColons);

    event.preventDefault();
  });
});