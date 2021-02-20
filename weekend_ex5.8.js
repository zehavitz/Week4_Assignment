const longest =(str) => {
    let maxLength=str.split(" ")[0].length;
    let longestWord=str.split(" ")[0];
    str.split(" ")
       .forEach(element => (element.length>maxLength) && (maxLength=element.length, longestWord=element));
       return longestWord;
    }
    
    
    console.log(longest("the warrior is dannyuuu")); 