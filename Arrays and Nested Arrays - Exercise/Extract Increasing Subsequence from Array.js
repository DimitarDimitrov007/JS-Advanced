function subsequence(array) {

    let result = [];
    let biggestOne = Number(array[0]);

    for(number of array){
        if(number >= biggestOne){
            biggestOne = number;
            result.push(number);
        }else{
            continue;
        }

    }

    return result;

}
subsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
    

    subsequence([1, 
        2, 
        3,
        4]
        )