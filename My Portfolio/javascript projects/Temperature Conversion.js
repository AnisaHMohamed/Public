//this is the Kelvin variable it cannot be changed
const kelvin = 0;
//Celcuis is 273 degree less than kelvin so this is the kelvin conversion
const celcius = kelvin - 273;
//This is the conversion to farenheit from celcius
let farenheit = celcius *(9/5) + 32;
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);
let newton = celcius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
