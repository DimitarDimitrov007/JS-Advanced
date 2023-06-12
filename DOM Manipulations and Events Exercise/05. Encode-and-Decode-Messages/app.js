function encodeAndDecodeMessages() {

    let buttons= Array.from(document.querySelectorAll("button"));
    
    let textAreasElements = Array.from(document.querySelectorAll("textarea"));
   
    buttons[0].addEventListener("click", encodeAndSend());
    buttons[1].addEventListener("click", decodeAndRead());

    function encodeAndSend(){
        let text = textAreasElements[0].value;
        let finishedMessage = "";

        for(let i = 0 ; i < text.length; i++){
            let currentChar = text[i];
            finishedMessage += String.fromCharCode(currentChar.charCodeAt(0) + 1);
        
        }

        textAreasElements[1].value = finishedMessage;
        textAreasElements[0].value = "";
  
    }

    function decodeAndRead(){
        let text = textAreasElements[1].value;
        let finishedMessage = "";

        for(let i = 0 ; i < text.length; i++){
            let currentChar = text[i];
            finishedMessage += String.fromCharCode(currentChar.charCodeAt(0) - 1);
        
        }
        textAreasElements[1].value = finishedMessage;
    }
}

 