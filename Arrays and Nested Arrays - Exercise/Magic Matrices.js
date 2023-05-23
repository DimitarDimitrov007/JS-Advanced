function magicMatrices(array) {
    let rowSum = array[0].reduce((a,b) => a + b);

    for(let i = 0; i < array[0].length; i++){
        let currentColSum = 0;

        for(let y = 0; y < array.length; y ++){
            currentColSum += array[y][i];
        }

        if(rowSum !== currentColSum){
            return false;
        }
    }
    
    return true;

}
magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]
]);