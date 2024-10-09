// var generateName = require('sillyname');

import generateName from "sillyname";

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// Superheroes name

import {randomSuperhero} from "superheroes";

var heroName = randomSuperhero();

console.log(`My superhero name is ${heroName} and I am badass!🌚`);