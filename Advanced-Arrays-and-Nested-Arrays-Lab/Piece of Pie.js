function pieceOfPie(array, start, end) {
    let result = [];

    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end);

    for (let i = startIndex; i <= endIndex; i++) {
        result.push(array[i]);

    }

    console.log(result);

}
pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)