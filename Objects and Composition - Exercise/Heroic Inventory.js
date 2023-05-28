function heroicInventory(array) {
    let result = [];

    for (el of array) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);

        if (!items) {
            items = [];
        }else{
            items = items.split(", ");
        }

        result.push({ name, level, items });
    }

    result = JSON.stringify(result);

    console.log(result);

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);