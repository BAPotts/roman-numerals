function convertNumerals(input){
  if(Number.isInteger(input)){
    return "true";
  }else {
    return "false";
  }
}



$(document).ready(function(){
  $("form#roman-numerals").submit(function(){
    event.preventDefault();
    const toConvert = parseInt($("#user-input").val());
    const output = convertNumerals(toConvert);

  $("#output").text("output");
  });
});