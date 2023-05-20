function fruit(fruit,weightInGrams,pricePerKilo){
    let weightInKg = weightInGrams / 1000;
    let cost = weightInKg * pricePerKilo;

    console.log(`I need $${cost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);