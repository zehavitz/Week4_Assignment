const peopleBus = (arr) => {
    let sum = 0;
    arr.forEach(station => {
        sum = sum + station[0] - station[1]
    });
    return sum;
}

let stations = [[5, 0], [7, 8], [10, 2], [0, 8], [0, 0]] // total in the end == 4

console.log(`Number of people in the bus: ${peopleBus(stations)}`);