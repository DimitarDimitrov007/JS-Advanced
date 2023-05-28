function lowestPrice(array) {
    let result = {};

    for(let line of array){
        let [town,product,price] = line.split(" | ");

        if(!result.hasOwnProperty(product)){
            result[product] = {};
           
        }
        result[product][town] = Number(price);
    }

    for(let [product,towns] of Object.entries(result)){
        let sorted = Object.entries(towns)
        sorted = sorted.sort((a,b) => a[1] - b[1]);
        let [town,price] = sorted[0];

        console.log(`${product} -> ${price} (${town})`);
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 1',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
