'use strict'

let destinations = ['the Moon', 'Mars', 'Venus', 'Earth', 'Jupiter', 'Saturn', 'Neptune', 'Uranus'];
let restaurants = ['the Milky Way Diner', 'Pete\'s Pasta', 'Vanessa\'s Veggies'];
let transports = ['teleporter', 'spaceship', 'wormhole'];
let entertainments = ['movie', 'spaceball game', 'museum', 'concert'];

let currentDestination = generateRandomSelection(destinations);
let currentRestaurant = generateRandomSelection(restaurants);
let currentTransport = generateRandomSelection(transports);
let currentEntertainment = generateRandomSelection(entertainments);

let answer = '';

alert(`Your currently chosen day trip is to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);

while(answer != 'complete') {
    answer = prompt('Type destination/restaurant/transport/entertainment to get another random selection. If you\'re satisfied, type complete.');
    if (answer === 'destination') {
        currentDestination = generateRandomSelection(destinations);
        alert(`Your currently chosen day trip is to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
    }
    if (answer === 'restaurant') {
        currentRestaurant = generateRandomSelection(restaurants);
        alert(`Your currently chosen day trip is to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
    }
    if (answer === 'transport') {
        let currentTransport = generateRandomSelection(transports);
        alert(`Your currently chosen day trip is to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
    }
    if (answer === 'entertainment') {
        let currentEntertainment = generateRandomSelection(entertainments);
        alert(`Your currently chosen day trip is to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
    }
    if (answer === 'complete') {
        alert(`You chose a day trip to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
        console.log(`You chose a day trip to ${currentDestination} via ${currentTransport}. 
You will be eating at ${currentRestaurant} and going to a ${currentEntertainment}.`);
    }
}

function generateRandomSelection(array) {
    let randomNumber = Math.floor(Math.random() * Math.floor(array.length));
    return array[randomNumber];
}