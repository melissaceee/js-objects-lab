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
    ]
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

