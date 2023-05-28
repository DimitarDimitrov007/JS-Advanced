function carFactory(obj) {
    let order = obj;
    let result = {};

    result.model = order.model;

    if (order.power <= 90) {
        result.engine = {
            power: 90,
            volume: 1800,
        }
    } else if (order.power <= 120) {
        result.engine = {
            power: 120,
            volume: 2400,
        }
    } else if (order.power <= 200) {
        result.engine = {
            power: 200,
            volume: 3500,
        }
    }


    if (order.carriage === "hatchback") {
        result.carriage = {
            type: "hatchback",
            color: order.color,
        }
    } else if (order.carriage === "coupe") {
        result.carriage = {
            type: "coupe",
            color: order.color,
        }
    }


    if (order.wheelsize % 2 === 0) {
        size = order.wheelsize - 1;
        result.wheels = [size, size, size, size];
    } else {
        size = order.wheelsize;
        result.wheels = [size, size, size, size];
    }

    return result;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));