'use strict';
const country = "India";
const continent = "Asia";
let population = 1500000000;
console.log(country);
console.log(continent);
console.log(population);
let isIsland = false;
let language;
language = 'English';
console.log(typeof continent);
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
const peopleInHalf = population / 2;
console.log(peopleInHalf);
const morePeopleThanFinland = population > 6000000;
console.log(morePeopleThanFinland);
let avgPopulation = 33000000;
let greaterThanAvg = false;
if (population > avgPopulation) greaterThanAvg = true;
console.log(greaterThanAvg);


// const description = country + " is in " + continent + ", its " + population / 1000000 + " million people speak " + language;
const description = `${country} is in ${continent}, its ${population / 1000000} million people speak ${language}`;
console.log(description);
if (population > avgPopulation) { console.log(`${country}'s population is ${(population - avgPopulation) / 1000000} million above average`) }
else if (avgPopulation > population) { console.log(`${country}'s population is ${(population - avgPopulation) / 1000000} million below average`) }
// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> 617
// console.log('19' - '13' + 17); // -> -11
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 117
// numNeighbour = Number(prompt('How many neighbour countries does your contry have?'));
// if (numNeighbour === 1) { console.log("Only 1 border") }
// else if (numNeighbour > 1) { console.log("More than 1 border") }
// else {
//     console.log("No neighbour")
// }
switch (language) {
    case 'Mandarin':
        console.log("Most number of native speakers");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'English':
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("Number 4");
        break;
    default:
        console.log("Great language too!");
}
console.log(`${country}'s population is ${population > avgPopulation ? 'above' : 'below'} average.`)

    `${Jonas.firstname} has ${jonas.friends.length} and his fav is ${jonas.friend[0]}`