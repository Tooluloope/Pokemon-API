import { processChain } from "./getEvolutionChain";

describe("processChain", () => {
	test("should correctly process a simple chain", () => {
		const inputChain = {
			species: {
				name: "caterpie",
			},
			evolves_to: [
				{
					species: {
						name: "metapod",
					},
					evolves_to: [
						{
							species: {
								name: "butterfree",
							},
							evolves_to: [],
						},
					],
				},
			],
		};

		const expectedOutput = {
			name: "caterpie",
			variations: [
				{
					name: "metapod",
					variations: [
						{
							name: "butterfree",
							variations: [],
						},
					],
				},
			],
		};

		expect(processChain(inputChain)).toEqual(expectedOutput);
	});

	test("should correctly process a chain with multiple variations", () => {
		const inputChain = {
			species: {
				name: "eevee",
			},
			evolves_to: [
				{
					species: {
						name: "vaporeon",
					},
					evolves_to: [],
				},
				{
					species: {
						name: "jolteon",
					},
					evolves_to: [],
				},
			],
		};

		const expectedOutput = {
			name: "eevee",
			variations: [
				{
					name: "vaporeon",
					variations: [],
				},
				{
					name: "jolteon",
					variations: [],
				},
			],
		};

		expect(processChain(inputChain)).toEqual(expectedOutput);
	});
});
