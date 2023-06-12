function lockedProfile() {
    let buttonElements = Array.from(document.querySelectorAll(".profile button"))
        .forEach(button => button.addEventListener("click", onClick));

    function onClick(event) {
        let currentElement = event.target;
        let parentElement = currentElement.parentElement;
        let isActive = parentElement.querySelector("input[value='unlock']").checked;

        if (isActive) {
            let hiddenFieldsElements = Array.from(event.target.parentElement.querySelectorAll("div"))
                .find(div => div.id.includes("HiddenFields"));

            if (event.target.textContent === "Show more") {
                hiddenFieldsElements.style.display = "inline";
                event.target.textContent = "Hide it";

            } else {
                hiddenFieldsElements.style.display = "none";
                event.target.textContent = "Show more";
            }
        }
    }
    return buttonElements;
}