function colorize() {
    let rows = document.getElementsByTagName("tr");
    rows = Array.from(rows);

    rows.forEach((row, index) => {
        if (index % 2 !== 0) {
            row.style.backgroundColor = "teal";

        }
    })
}