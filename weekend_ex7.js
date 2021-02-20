//ForEach
const forEach2 = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func();
    }
}

forEach2([0, 0], () => console.log("hey"));

//Map
const map2 = (arr, func) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(func(arr[i]));
    }
    return arr2;
}

console.log(map2([4, 8], (i) => { return i * 2 }));

//Filter
const filter2 = (arr, func) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}

console.log(filter2([2, 7, 9, 5], (num) => num != 9));

