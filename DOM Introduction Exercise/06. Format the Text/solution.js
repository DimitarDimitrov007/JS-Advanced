function solve() {
  let textArea = document.getElementById("input").value;
  let result = document.getElementById("output");

  let textArr = textArea.split(".").filter(x => x !== "");


  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join(".") + ".";
    let p = document.createElement("p");
    p.textContent = text;
    result.appendChild(p);
  }

}