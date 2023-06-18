export interface Chain {
	evolution_details?: any[];
	evolves_to?: EvolvesTo[];
	is_baby?: boolean;
	species?: NameURL;
}

export interface EvolvesTo {
	evolution_details?: EvolutionDetail[];
	evolves_to?: any[];
	is_baby?: boolean;
	species?: NameURL;
}

export interface EvolutionDetail {
	gender: any;
	held_item: any;
	item?: NameURL;
	known_move: any;
	known_move_type?: NameURL;
	location?: NameURL;
	min_affection?: number;
	min_beauty: any;
	min_happiness?: number;
	min_level: any;
	needs_overworld_rain: boolean;
	party_species: any;
	party_type: any;
	relative_physical_stats: any;
	time_of_day: string;
	trade_species: any;
	trigger: NameURL;
	turn_upside_down: boolean;
}

export interface NameURL {
	name?: string;
	url?: string;
}
