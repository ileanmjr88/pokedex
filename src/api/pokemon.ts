// src/api/pokemon.ts
import type { Pokemon, PokemonListResponse, PokemonDetailResponse } from '../types';

const BASE = 'https://pokeapi.co/api/v2';

export async function fetchAllPokemon(): Promise<Pokemon[]> {
    const response = await fetch(`${BASE}/pokemon?limit=151`);
    const data: PokemonListResponse = await response.json();

    const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData: PokemonDetailResponse = await detailResponse.json();
            return {
                id: detailData.id,
                name: detailData.name,
                sprite: detailData.sprites.front_default || '',
                types: detailData.types.map((t) => t.type.name),
            };
        })
    );

    return pokemonDetails;
}

