const duplicateCheck = (str) => {
    let obj = {};
    str.toLowerCase().split("").forEach((char) => {
        obj[char] = obj[char] ? obj[char] + 1 : 1 
    })
    let str1="";
    let counter=0;
    Object.keys(obj).forEach((key) => {
        obj[key] > 1 && (str1+=`${key} occurs ${obj[key]} times `, counter++)
    }
    )
    console.log(`${counter} # ${str1}`)
    
}
duplicateCheck("Indivisibilities");