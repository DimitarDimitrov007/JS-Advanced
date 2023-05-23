function arrayRotation(array, rotationCount) {
    let newArray = [];
    for (let i = 0; i < rotationCount; i++) {
        let lastElement = array.pop();
        for (let j = 0; j < array.length ; j++) {
            let currentElement = array[j];
            newArray.push(currentElement);
        }

        newArray.unshift(lastElement);
        array = newArray;
        newArray = [];
       
    }

    console.log(array.join(" "));
}
arrayRotation(['1',
    '2',
    '3',
    '4'],
    2);
arrayRotation(	['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)
  