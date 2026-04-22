
import { useEffect, useState } from 'react';
import type { Pokemon } from '../types';
import { fetchAllPokemon } from '../api/pokemon';

export function usePokemon() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPokemon() {
            try {
                const data = await fetchAllPokemon();
                setPokemon(data);
            } catch (err) {
                setError('Failed to load Pokémon');
            } finally {
                setLoading(false);
            }
        }

        loadPokemon();
    }, []);

    return { pokemon, loading, error };
}