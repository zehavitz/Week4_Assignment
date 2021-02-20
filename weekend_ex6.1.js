const accum =(str) =>
str.toLowerCase().split("")
.map((char,i) =>  char[0].toUpperCase().concat(char.repeat(i)))
.join("-");

console.log(accum("RqaEzty"));