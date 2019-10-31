// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      dataCheck(userData);
      if (data = false){
         // preventDefault();
         alert("Invalid Data");
      }
   });
});
let userData = document.getElementsByName(text)
function dataCheck (text){
   data = null
   return (text !== "" ? data = true: data = false);

}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
