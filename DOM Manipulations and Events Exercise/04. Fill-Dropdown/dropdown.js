function addItem() {
    let menuElement = document.getElementById("menu");
    let textElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");

    let newElement = document.createElement("option");
    newElement.textContent = textElement.value;
    newElement.value = valueElement.value;
    menuElement.appendChild(newElement);

    textElement.value = "";
    valueElement.value = "";

}