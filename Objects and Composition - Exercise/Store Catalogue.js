function storeCatalogue(array) {
    let firstChar = "";
    let sortedArray = array.sort((a,b) => a.localeCompare(b));
    for(let line of sortedArray){
        let [item,price] = line.split(" : ");

        if(firstChar !== item[0]){
            firstChar = item[0];
            console.log(firstChar);
        }

        console.log(`  ${item}: ${price}`);


    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);