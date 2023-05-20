function cookingByNumbers(number, command1, command2, command3, command4, command5) {
    let num = Number(number);
    let array = [];
    array.push(command1, command2, command3, command4, command5);

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i];

        switch (currentCommand) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;

            case "spice":
                num += 1;
                console.log(num);
                break;

            case "bake":
                num = num * 3;
                console.log(num);
                break;

            case "fillet":
                num = num * 0.8;
                console.log(num.toFixed(1));
                break;
        }
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')