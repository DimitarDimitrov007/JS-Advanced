function sumTable() {
    let items = document.querySelectorAll("tr td:nth-of-type(2)");


    items = Array.from(items);

    let total = 0

    for (let el of items) {
        total += Number(el.textContent)
    }

    let button = document.getElementById("sum");
    button.textContent = total;
}
sumTable()