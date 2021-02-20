const shortest =(str) => {
let minLength=str.split(" ")[0].length
str.split(" ")
   .forEach(element => (element.length<minLength) && (minLength=element.length));
   return minLength;
}


console.log(shortest("the warrior is danny")); 