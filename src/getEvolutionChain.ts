import axios from "axios";
import { Chain } from "./types";

export async function getEvolutionChain(pokemonName: string) {
	pokemonName = pokemonName.toLowerCase();
	try {
		// get pokemon species information
		const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`;
		const speciesResponse = await axios.get(speciesUrl);
		const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

		// get evolution chain data
		const evolutionResponse = await axios.get(evolutionChainUrl);
		const chain = evolutionResponse.data.chain as Chain;

		// process the chain to match the desired format
		let processedChain = processChain(chain);

		// convert the result to a JSON string and return
		return JSON.stringify(processedChain);
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
}

export function processChain(chain: Chain) {
	let result = {
		name: chain.species.name,
		variations: chain.evolves_to.map(evolution => processChain(evolution)),
	};
	return result;
}
