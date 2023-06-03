function search() {
   let typingFieldText = document.getElementById("searchText").value;
   let resultField = document.getElementById("result");
   let list = Array.from(document.getElementsByTagName("li"));
   
   let counter = 0;

   for(let town of list){
      if(town.textContent.includes(typingFieldText)){
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline"
         counter ++;

      }else{
         town.style.fontWeight = "normal";
         town.style.textDecoration = "none"
      }
   }

   resultField.textContent = `${counter} matches found`;

   
}
