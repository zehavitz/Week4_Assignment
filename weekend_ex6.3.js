const longest = (a, b) => {
    c = a.concat(b);
    let obj = {};
    c.toLowerCase().split("").forEach((char) => {
        obj[char] = obj[char] ? obj[char] + 1 : 1
    })
    let arr = [];
    Object.keys(obj).forEach((key) => {
        arr.push(key);
    }
    )
    return arr.sort().join("");
}

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b));