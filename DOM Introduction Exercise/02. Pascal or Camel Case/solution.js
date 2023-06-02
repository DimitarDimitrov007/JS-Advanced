function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  let button = document.getElementById("result");


  switch (convention) {
    case "Camel Case":

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          let nextElement = text[i + 1].toUpperCase()
          result += nextElement;
          i++;


        } else {
          result += text[i].toLowerCase();
        }

      }
      button.textContent = result;
      break;

    case "Pascal Case":
      result += text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        if (text[i] === " ") {
          let nextElement = text[i + 1].toUpperCase()
          result += nextElement;
          i++

        } else {
          result += text[i].toLowerCase();
        }

      }
      break;

    default:
      result = "Error!";

  }
  button.textContent = result;

}