function area() {
    return Math.abs(this.x * this.y)
}

function vol() {
    return Math.abs(this.x * this.y * this.z)
}

function solve(area, vol, input) {
    let parsedInput = JSON.parse(input);
    let result = [];

    for (let data of parsedInput) {
        result.push({
            area: area.call(data),
            volume: vol.call(data),
        });
    }

    return result
}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);