function addAndRemoveElements(array) {
    let initialNum = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "add") {
            result.push(initialNum);

        } else if (array[i] === "remove") {
            result.pop()
        }

        initialNum++;
    }
    if (result.length > 0) {

        console.log(result.join("\n"));
    }else{
        console.log("Empty");
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']); 

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)

addAndRemoveElements(['remove', 
'remove', 
'remove']);