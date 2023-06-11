function create(words) {
   let allElements = document.getElementById("content");

   for (let string of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.style.display = "none";
      let text = document.createTextNode(string);
      p.appendChild(text);
      div.appendChild(p);
      div.addEventListener("click", displayChange);
      allElements.appendChild(div);
   }

   function displayChange(event) {
      event.target.children[0].style.display = "inline";

   }

}