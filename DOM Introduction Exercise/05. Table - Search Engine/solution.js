function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById("searchField");
      let rows = Array.from(document.querySelectorAll("tbody tr"));

      for(let row of rows){
         row.classList.remove("select");

         if(searchField.value !== "" && row.textContent.includes(searchField.value)){
            row.classList.add("select");
         }
      }

      searchField.value = "";

   }
}