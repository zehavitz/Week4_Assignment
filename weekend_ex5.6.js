const maskify =(str) => 
    str.trim()
    .split("")
    .map((char,i) => i<str.length-4 ? "#" : char)
    .join("");


console.log(maskify("Nananananananananananananananana Batman!"));