function addItem() {
    let itemElements = document.getElementById("items");
    let typingFieldElement = document.getElementById("newItemText");

    let newLiItem = document.createElement("li");
    newLiItem.textContent = typingFieldElement.value;
    typingFieldElement.value = "";

    let deleteElement = document.createElement("a");
    deleteElement.href = "#"
    deleteElement.textContent = "[Delete]";

    deleteElement.addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
    });

    newLiItem.appendChild(deleteElement);
    itemElements.appendChild(newLiItem);

}