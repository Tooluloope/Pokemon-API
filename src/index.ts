import { getEvolutionChain } from "./getEvolutionChain";

const pokemonName = process.argv[2];

if (pokemonName) {
	getEvolutionChain(pokemonName)
		.then(chain => console.log(chain))
		.catch(error => console.error(`An error occurred: ${error}`));
} else {
	console.log("Please provide a pokemon name as a command-line argument.");
}
