import axios from "axios";
import { expect, jest, test } from "@jest/globals";

import { getEvolutionChain } from "./getEvolutionChain";
// Mock axios.get
jest.mock("axios");

let mockedAxios: jest.Mocked<typeof axios.get> =
	axios.get as jest.MockedFunction<typeof axios.get>;

describe("getEvolutionChain", () => {
	beforeEach(() => {
		mockedAxios.mockClear();
	});

	test("should return the correct evolution chain", async () => {
		const mockSpeciesResponse = {
			data: {
				evolution_chain: {
					url: "https://pokeapi.co/api/v2/evolution-chain/1/",
				},
			},
		};

		const mockEvolutionResponse = {
			data: {
				chain: {
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
				},
			},
		};

		mockedAxios
			.mockResolvedValueOnce(mockSpeciesResponse)
			.mockResolvedValueOnce(mockEvolutionResponse);

		const expectedOutput = JSON.stringify({
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
		});

		const actualOutput = await getEvolutionChain("caterpie");
		expect(actualOutput).toEqual(expectedOutput);
	});
});
