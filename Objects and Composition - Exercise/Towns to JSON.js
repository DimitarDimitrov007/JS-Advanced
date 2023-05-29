function townsToJSON(array) {
    let result = [];

    array.shift();

    for(let line of array){
        line = line.split(/\s*\|\s*/g);
        let town = line[1];
        let latitude = Number(line[2]).toFixed(2);
        let longitude = Number(line[3]).toFixed(2);

        let obj = {
            Town : town,
            Latitude : Number(latitude),
            Longitude : Number(longitude),
        }

        result.push(obj);
    }

    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

    townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
    )