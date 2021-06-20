//Business Logic
  
//UserInterface Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    $('#python').hide();
    $('#go').hide();
    $('#java').hide();
    $('#noSuggestion').hide();
    
    const scriptingCompiled = $("#scriptingCompiled").val();
    const coffee = $("#coffee").val();
    const gophers =  $("#gophers").val();
    const monty = $("#monty").val();
    const semiColons = $("#semiColons").val();

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