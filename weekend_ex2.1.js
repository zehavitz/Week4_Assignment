function arrSmallestSum (arr) {
    let sum=0;
    arr.sort((a,b)=>a-b);
    sum=arr[0]+arr[1];
    console.log(`Sum of the two smallest numbers is: ${sum}`)
}

let arr=[10, 343445353, 3453445, 3453545353453];
arrSmallestSum(arr);
