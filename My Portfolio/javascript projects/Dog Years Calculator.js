//Dog Years Calculater
//This my current age
const myAge = 28;
//First 2 years of a dogs age
let earlyYears = 2;
earlyYears = earlyYears *10.5;
laterYears = myAge - 2;
//After the first 2 years in dog years is equal to years multiplied by 4
laterYears*=4;
console.log(`My early years are ${earlyYears} and my later years are ${laterYears}`)
//dog years are my age in early years plus later years
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Anisa Mohamed'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
