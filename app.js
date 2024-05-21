const pokemon = require('./data.js')

// const game = {
//     party: [],
//     gyms: [
//       { location: "Pewter City", completed: false, difficulty: 1 },
//       { location: "Cerulean City", completed: false, difficulty: 2 },
//       { location: "Vermilion City", completed: false, difficulty: 3 },
//       { location: "Celadon City", completed: false, difficulty: 4 },
//       { location: "Fuchsia City", completed: false, difficulty: 5 },
//       { location: "Saffron City", completed: false, difficulty: 6 },
//       { location: "Cinnabar Island", completed: false, difficulty: 7 },
//       { location: "Viridian City", completed: false, difficulty: 8 },
//     ],
//     items: [
//       { name: "potion", quantity: 4 },
//       { name: "pokeball", quantity: 8 },
//       { name: "rare candy", quantity: 99 },
//     ],
//     difficulty: [
//         {level: "easy"},
//         {level: "medium"},
//         {level: "difficult"}
//     ]
// }

  
//   console.dir(pokemon, { maxArrayLength: null })

// exercise 1
//   console.log (pokemon[58])


//   exercise 2
//   console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

const game = {
    party: [],
     gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
        {level: "easy"},
        {level: "medium"},
        {level: "difficult"}
    ],
    catchPokemon(pokemonObj) {
        let pokeballIndex = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === 'pokeball') {
                pokeballIndex = i;
                break;
            }
        }
        if (pokeballIndex !== -1 && this.items[pokeballIndex].quantity > 0) {
            this.items[pokeballIndex].quantity--;
            this.party.push(pokemonObj);
        }
    },
    gymStatus: function () {
        const gymTally = { completed: 0, incomplete: 0 };

        this.gyms.forEach(gym => {
            if (gym.completed) {
                gymTally.completed++;
            } else {
                gymTally.incomplete++;
            }
        });

        console.log(gymTally);
    },
    partyCount: function (){
        return game.party.length;
    }
}

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/



const starterPokemon = pokemon.find(p => p.starter);
game.party.push(starterPokemon);
console.log(game);




/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


const selectedPokemon1 = pokemon.find(p => p.type === 'fire');
const selectedPokemon2 = pokemon.find(p => p.type === 'electric'); 
const selectedPokemon3 = pokemon.find(p => p.type === 'normal'); 

game.party.push(selectedPokemon1, selectedPokemon2, selectedPokemon3);

console.log(game.party);



/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/


const hp = [45, 39, 25, 49]
hp.sort ();
console.log (hp);


// /*
// Exercise 7
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


// Solve Exercise 7 here:
// */


for (const gym of game.gyms) {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
}

console.log(game.gyms)




// /*
// Exercise 8
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?

// Hint: 
//   - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
//   - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
//   - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
//   - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

// More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

// Solve Exercise 8 here:
// */


// Iterate through the party array to find the starter Pokémon that needs to evolve


function starterTrue (pokemon) {
    const evolutionOccur = {
        1: { evolvedNumber: 2, evolvedName: 'Ivysaur', hp: 60 },
        4: { evolvedNumber: 5, evolvedName: 'Charmeleon', hp: 58 },
        25: { evolvedNumber: 26, evolvedName: 'Raichu', hp: 60 }
    };

    const evolution = evolutionOccur[pokemon.number];
    if (evolution && pokemon.starter) {
        return {
            number: evolution.evolvedNumber,
            name: evolution.evolvedName,
            type: pokemon.type,
            hp: evolution.hp,
            starter: false
        };
    }
    return pokemon;
}

game.party = game.party.map(pokemon => starterTrue(pokemon));
console.log(game.party)


/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/

// Using a for loop

// for (let i = 0; i < game.party.length; i++) {
//     console.log(game.party[i].name);
// }



/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/

pokemon.forEach(pokemon => {
    if (pokemon.starter === true) {
        console.log(pokemon.name);
    }
});


/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:

*/


// catchPokemon(pokemonObj) {
//     this.party.push(pokemonObj);

// const pokemonToCatch = {
//     number: 11,
//     name: "Metapod",
//     type: "bug",
//     hp: 50,
//     starter: false
// };

// game.catchPokemon(pokemonToCatch);


/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

// catchPokemon(pokemonObj) {
// this.party.push(pokemonObj);
// }  



// catchPokemon(pokemonObj) {
//     let pokeballIndex = -1;
//     for (let i = 0; i < this.items.length; i++) {
//         if (this.items[i].name === 'pokeball') {
//             pokeballIndex = i;
//             break;
//         }
//     }
//     if (pokeballIndex !== -1 && this.items[pokeballIndex].quantity > 0) {
//         this.items[pokeballIndex].quantity--;
//         this.party.push(pokemonObj);

const pokemonToCatch = {
    number: 1,
    name: "Bulbasaur",
    type: "grass",
    hp: 45,
    starter: true
};

game.catchPokemon(pokemonToCatch);
console.log("Remaining pokeballs:", game.items[1].quantity);

/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/



// for (const gym of game.gyms) {
//     if (gym.difficulty < 3) {
//         gym.completed = true;
//     }
// }

// console.log(game.gyms)




game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});

console.log(game.gyms);


/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/

// gymStatus: function () {
//     const gymTally = { completed: 0, incomplete: 0 };

//     this.gyms.forEach(gym => {
//         if (gym.completed) {
//             gymTally.completed++;
//         } else {
//             gymTally.incomplete++;
//         }
//     });

//     console.log(gymTally);
// }
// }

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:

*/


// partyCount: function (){
//     return game.party.length;

game.catchPokemon(pokemonToCatch);
console.log("Number of Pokémon in party:", game.partyCount());


/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/

game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

console.log(game.gyms);


/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/

console.log(game);

