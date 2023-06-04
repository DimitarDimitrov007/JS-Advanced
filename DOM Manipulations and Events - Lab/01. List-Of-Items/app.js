function addItem() {
    let typingField = document.getElementById("newItemText").value;
    let newItem = document.createElement("li");
    newItem.textContent = typingField;
    let allItems = document.getElementById("items");
    allItems.appendChild(newItem);
}