// Write your JavaScript code here!

let submitButton = document.getElementById("formSubmit");
let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
let faultyItems = document.getElementById("faultyItems")
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let launchStatus = document.getElementById("launchStatus")
let launchStatusCheck = true;
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

         response.json().then(function(json) {
       const div = document.getElementById('missionTarget');
       // Add HTML that includes the JSON Data
            div.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                              <li>Name: ${json[0].name}</li>
                              <li>Diameter: ${json[0].diameter}</li>
                              <li>Star: ${json[0].star}</li>
                              <li>Distance from Earth: ${json[0].distance}</li>
                              <li>Number of Moons: ${json[0].moons}</li>
                           </ol> 
                           <img src="${json[0].image}">
                         `;         
             console.log(json);
         });
      });
   form.addEventListener("submit", function () {
      launchStatusCheck = true
      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         launchStatusCheck = false
         alert("Invalid Data, Fuel Level and Cargo Mass Must Be Numbers");
         event.preventDefault();
         
      }
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         launchStatusCheck = false
         alert("Invalid Data, Must Fill Out All Fields");
         event.preventDefault();
         
      }
      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         launchStatusCheck = false
         alert("Invalid Data, Pilot Names must not contain numbers");
         event.preventDefault();
      }
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = ` Pilot ${pilotName.value} is ready`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready`;
         fuelStatus.innerHTML = "Not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle is not ready for launch";
         document.getElementById('launchStatus').style.color = 'red';
         event.preventDefault();
         launchStatusCheck = false

      }

      if (cargoMass.value > 10000) {
         launchStatusCheck = false
         faultyItems.style.visibility = "visible";
         pilotStatus = pilotStatus += pilotName
         copilotStatus = copilotStatus += copilotName
         cargoStatus.innerHTML = "Too much mass for the shuttle to launch";
         document.getElementById('launchStatus').innerHTML = "Shuttle is not ready for launch";
         document.getElementById('launchStatus').style.color = 'red';
         event.preventDefault();
      }

      if (launchStatusCheck === true) {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = ` Pilot ${pilotName.value} is ready`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready`;
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         document.getElementById('launchStatus').style.color = 'green';
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         event.preventDefault();
      }
      
   });
});

