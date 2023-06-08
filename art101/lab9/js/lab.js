/**
 * Author:    Liyuan Tan
 * Created:   24.05.2023
 * 
 * (c) Copyright by Blub Corp.
 **/

// get output element
var outputEl = document.getElementById("output");
// create new element
var new1El = document.createElement("h2");
new1El.style.backgroundColor = "#fef7ec";
new1El.style.height = "50px";
new1El.textContent = "Output";

var new2El = document.createElement("p");
new2El.textContent = "Success! I'am a new element";
new2El.style.fontSize = "20px";
// bottom add element
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
// a new element to the top of an element
var new3El = document.createElement("p");
new3El.textContent = "Top element: " + document.characterSet;
new3El.style.backgroundColor = "green";

outputEl.insertBefore(new3El, new2El);