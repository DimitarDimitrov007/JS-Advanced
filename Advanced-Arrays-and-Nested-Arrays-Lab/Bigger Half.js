function biggerHalf(array) {
    let result = [];

    array.sort((a, b) => a - b);

    let start = Math.floor(array.length / 2);
    
    for(let i = start; i < array.length; i++){
       
        let currentNumber = array[i];
        result.push(Number(currentNumber));

    }
    
    console.log(result);

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);