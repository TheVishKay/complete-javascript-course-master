'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

const gk = players1[0];
const fieldPlayers = players1.slice(1);
console.log(gk, fieldPlayers);

const allPlayers = players1.concat(players2);
console.log(allPlayers);

const players1Final = players1.concat(['Thiago', 'Coutinho', 'Periscic']);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
console.log(team1, draw, team2);

const printGoals = function () {
  const players = Array.from(arguments);
  console.log(players);
  console.log(players.length + ' goals were scored');
};

printGoals.apply(null, game.scored);

if (team1 < team2) {
  console.log('Team 1 is more likely to win');
}
if (team1 > team2) {
  console.log('Team 2 is more likely to win');
}
