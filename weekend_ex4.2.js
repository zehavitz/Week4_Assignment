const Tribonacci = (startingPoint, n) => {
    let arr=[startingPoint,startingPoint,1];
    for(let i=3; i<n; i++) {
        arr[i]=arr[i-1]+arr[i-2]+arr[i-3];
    }
console.log (arr.join(", "));
} 

Tribonacci(1,10);