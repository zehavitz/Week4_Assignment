const Fibonacci = (startingPoint, n) => {
    let arr=[startingPoint,1];
    for(let i=2; i<n; i++) {
        arr[i]=arr[i-1]+arr[i-2];
    }
console.log (arr.join(", "));
} 

Fibonacci(1,10);