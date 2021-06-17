//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const scriptingCompiled = toUpperCase($("#scriptingCompiled").val());
    const coffeeTea = toUpperCase($("#coffeeTea").val());
    const gophers = toUpperCase($("#gophers").val());
    const smonty = toUpperCase($("#monty").val());
    const semiColons = toUpperCase($("#semiColons").val());

    event.preventDefault();
  });
});