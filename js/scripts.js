//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const scriptingCompiled = $("#scriptingCompiled").val();
    console.log(scriptingCompiled);
    const coffee = $("#coffee").val();
    console.log(coffee);
    const gophers =  $("#gophers").val();
    console.log(gophers);
    const monty = $("#monty").val();
    console.log(monty);
    const semiColons = $("#semiColons").val();
    console.log(semiColons);

  if (scriptingCompiled === "Scripting" && coffee === "No" && gophers === "No" && monty === "Yes" && semiColons === "No") {
    $('#python').show();
  } else if (scriptingCompiled === "Compiled" && coffee === "Yes" && gophers === "No" && monty === "No" && semiColons === "Yes") {
    $('#java').show(); 
  } else if (scriptingCompiled === "Compiled" && coffee === "No" && gophers === "Yes" && monty === "No" && semiColons === "Yes") {
    $('#go').show();
  } else {
    $('#noSuggestion').show();
  }
    event.preventDefault();
  });
});