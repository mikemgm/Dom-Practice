let button = document.querySelector("input[type=submit]");

button.addEventListener("click", function(event) {
    event.preventDefault();
    let textBox = document.querySelector("input"); 
    let newLi = document.createElement("li"); 
    newLi.textContent = textBox.value; 
    document.querySelector("ul").appendChild(newLi); 
    textBox.value = "";
}) 






 document.body.style.backgroundColor = "blue";