// Write your JavaScript code here!
let submitButton = document.getElementById("formSubmit");
let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");


submitButton.addEventListener("click",function isBlank(){
   if (pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value === ""|| cargoMassInput.value === ""){
      alert("Invalid Data, Must Fill Out All Fields");
      event.preventDefault();
   }
});
submitButton.addEventListener("click",function isNumber(){
   if (isNaN(fuelLevelInput.value)  === true  || isNaN(cargoMassInput.value) === true ){
      alert("Invalid Data, Fuel Level and Cargo Mass Must Be Numbers");
      event.preventDefault();
   }
});

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
