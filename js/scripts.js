//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const scriptingCompiled = $("#scriptingCompiled").val();
    console.log(scriptingCompiled);
    const coffeeTea = $("#coffeeTea").val();
    console.log(coffeeTea);
    const gophers =  $("#gophers").val();
    console.log(gophers);
    const monty = $("#monty").val();
    console.log(monty);
    const semiColons = $("#semiColons").val();
    console.log(semiColons);

  if (scriptingCompiled === "Scripting" && coffeeTea !== "Coffee" && gophers !== "Yes" && monty === "Yes" && semiColons !== "Yes") {
    alert("May we suggest Python");
  } else if (scriptingCompiled === "Compiled" && coffeeTea === "Coffee" && gophers !== "Yes" && monty !== "Yes" && semiColons === "Yes") {
    alert("May we suggest Java");
  } else {
    alert("Continue On");
  }

    // $("#output").text(result);

    event.preventDefault();
  });
});