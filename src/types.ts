// src/types.ts

export type Pokemon = {
    id: number;
    name: string;
    sprite: string;
    types: string[];
};

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};

export type PokemonDetailResponse = {
    id: number;
    name: string;
    sprites: {
        front_default: string | null;
    };
    types: {
        type: {
            name: string;
        };
    }[];
};