function sameNumbers(num) {
    let sum = 0;
    let numToString = String(num);
    let previousDigit = Number(numToString[0]);
    for (let i = 1; i < numToString.length; i++) {

        let currentDigit = Number(numToString[i]);

        if (previousDigit !== currentDigit) {
            console.log("false");

            for(let i = 0; i < numToString.length; i++){
                sum += Number(numToString[i]);
            }

            console.log(sum);
            return;
          
        }
    }

    console.log("true");

    for(let i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }

    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);