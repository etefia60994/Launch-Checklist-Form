// Write your JavaScript code here!
console.log("Runnning?")
let submitButton = document.getElementById("formSubmit");
let pilotNameInput = document.querySelector("input[name=pilotName]");
submitButton.addEventListener("click",function(){
   if (pilotNameInput.value === ""){
      alert("Invalid Data");
      event.preventDefault();
   }
})

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
