const findUniq = (arr) => {
    arr.sort((a, b) => a - b);
    arr[0] == arr[1] ?
        console.log(`Unique num is ${arr[arr.length - 1]}`)
        :
        console.log(`Unique num is ${arr[0]}`);
}

let arr = [1, 1, 0.55, 1, 1];
findUniq(arr);


