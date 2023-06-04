function deleteByEmail() {
   let typingFieldElement = document.querySelector("input[name = 'email']");
   let emailsElements = document.querySelectorAll("tr td:nth-of-type(2)");
   let targetElement = typingFieldElement.value;
   let result = document.querySelector("#result");

   for(let email of emailsElements){
    result.textContent = "";
    if(email.textContent === targetElement){
        email.parentNode.remove();
        result.textContent = "Deleted.";
    }else{
        result.textContent = "Not found." ;
    }

   }
}