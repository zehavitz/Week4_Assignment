const centuryFromYear = (year) => year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;

console.log(centuryFromYear(2021));