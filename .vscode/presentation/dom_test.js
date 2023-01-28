// Get the buttons by their ID
let changeTextButton = document.getElementById("changeText");
let addElementButton = document.getElementById("addElement");
let removeElementButton = document.getElementById("removeElement");
let changeColorButton = document.getElementById("changeColor");

// Get the heading by its ID
let myHeading = document.getElementById("myHeading");

// Get the div by its ID
let newDiv = document.getElementById("newDiv");

// Add event listeners to the buttons
changeTextButton.addEventListener("click", function() {
    myHeading.innerHTML = "Hello DOM!";
});
addElementButton.addEventListener("click", function() {
    let newP = document.createElement("p");
    let newContent = document.createTextNode("I'm a new element!");
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
});
removeElementButton.addEventListener("click", function() {
    newDiv.removeChild(newDiv.lastChild);
});
changeColorButton.addEventListener("click", function() {
    myHeading.style.color = "blue";
});
