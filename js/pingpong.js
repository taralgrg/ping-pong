$(document).ready(function(){
  console.log("first something");

$( "#pingpong-button" ).click(function(event) {
  event.preventDefault();
var value=$("#value").val();
console.log(value);
for (i=1; i<=value; i++){
  if(i%3===0 && i%5===0) {
     $(".result").append("<li>pingpong</li>")
      console.log("something")
      }
    else if (i%3===0) {
      $(".result").append("<li>ping</li>")
      }
    else if (i%5===0) {
      $(".result").append("<li>pong</li>")
      }
    else {
      $(".result").append("<li>"+i+"</li>")
      }
  }

});
});
