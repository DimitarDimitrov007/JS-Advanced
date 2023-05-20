function greatestCommonDivisor(numOne, numTwo) {
    let smallerNum = (numOne >= numTwo) ? numTwo : numOne;
    let greatestDivisor = 0;

    for (let i = 1; i <= smallerNum; i++) {
        let currentDivisor = Number(i);

        if (numOne % currentDivisor === 0 && numTwo % currentDivisor === 0) {
            greatestDivisor = currentDivisor;
        }
    }

    console.log(greatestDivisor);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);