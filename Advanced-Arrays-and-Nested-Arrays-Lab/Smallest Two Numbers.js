function smallestTwoNumbers(array) {
    let result = [];
    let firstNumber = Number(array[0])

    for (let i = 1; i < array.length; i++) {
        let currentNumber = Number(array[i]);

        if (currentNumber <= firstNumber) {
            firstNumber = currentNumber;
        }

    }

    result.push(firstNumber);

    let index = array.indexOf(firstNumber);
    array.splice(index, 1);

    let secondNumber = Number(array[0])
    for (let i = 1; i < array.length; i++) {
        let currentNumber = Number(array[i]);

        if (currentNumber <= secondNumber) {
            secondNumber = currentNumber;
        }

    }
    result.push(secondNumber);

    console.log(result.join(" "));


}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);