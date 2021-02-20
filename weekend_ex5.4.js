const toWeirdCase = (str) => 
     str.split("")
        .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
        .join('');


console.log(toWeirdCase("Weird string case")); 