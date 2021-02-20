const isIsogram = (str) => {
    let obj = {};
    str.toLowerCase().split("").forEach((char) => {
        obj[char] = obj[char] ? obj[char] + 1 : 1
    })
    let isRepeat = false;
    Object.keys(obj).forEach((key) => obj[key] > 1 && (isRepeat = true))
    return !isRepeat
}

console.log(isIsogram("moOse"));
