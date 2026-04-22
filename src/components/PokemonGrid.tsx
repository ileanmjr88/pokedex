import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonCard } from "./PokemonCard";

export function PokemonGrid() {
  const { pokemon, loading, error } = usePokemon();
  const [searchName, setSearchName] = useState("");
  const [selectedType, setSelectedType] = useState("");

  if (loading) {
    return (
      <p className="py-16 text-center text-stone-500 dark:text-stone-400">
        Loading Pokédex…
      </p>
    );
  }
  if (error) {
    return (
      <p className="py-16 text-center text-red-600 dark:text-red-400">
        Error: {error}
      </p>
    );
  }
  if (pokemon.length === 0) {
    return (
      <p className="py-16 text-center text-stone-500 dark:text-stone-400">
        No Pokémon found
      </p>
    );
  }

  const allTypes = Array.from(new Set(pokemon.flatMap((p) => p.types))).sort();

  const filtered = pokemon.filter((p) => {
    const matchesName = p.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesType = !selectedType || p.types.includes(selectedType);
    return matchesName && matchesType;
  });

  return (
    <div className="px-4">
      <div className="mx-auto mb-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search by name…"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="flex-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm capitalize text-stone-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
        >
          <option value="">All types</option>
          {allTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-stone-500 dark:text-stone-400">
          No Pokémon match your filters
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 pb-8">
          {filtered.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>
      )}
    </div>
  );
}
