// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${i + 1} days `);
  }
}
const arrr = [17, 21, 23];
printForecast(arrr);
