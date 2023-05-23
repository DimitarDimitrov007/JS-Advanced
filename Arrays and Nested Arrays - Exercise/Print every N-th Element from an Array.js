function nElement(array,step){
    let result = [];

    for(let i = 0; i < array.length; i+= step){
        result.push(array[i]);

    }

    return result;
}
nElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

nElement(	['dsa',
'asd', 
'test', 
'tset'], 
2

)