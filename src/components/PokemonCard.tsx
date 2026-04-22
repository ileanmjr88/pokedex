import type { Pokemon } from "../types";

type Props = {
  pokemon: Pokemon;
};

const TYPE_COLORS: Record<string, string> = {
  normal: "bg-stone-300 text-stone-800",
  fire: "bg-orange-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-yellow-900",
  grass: "bg-green-500 text-white",
  ice: "bg-cyan-300 text-cyan-900",
  fighting: "bg-red-700 text-white",
  poison: "bg-purple-600 text-white",
  ground: "bg-amber-600 text-white",
  flying: "bg-indigo-300 text-indigo-900",
  psychic: "bg-pink-500 text-white",
  bug: "bg-lime-500 text-white",
  rock: "bg-yellow-700 text-white",
  ghost: "bg-purple-800 text-white",
  dragon: "bg-indigo-700 text-white",
  dark: "bg-stone-700 text-white",
  steel: "bg-slate-400 text-slate-900",
  fairy: "bg-pink-300 text-pink-900",
};

export function PokemonCard({ pokemon }: Props) {
  return (
    <article className="flex flex-col items-center rounded-xl border border-stone-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-700 dark:bg-stone-800">
      <span className="self-end font-mono text-xs text-stone-400">
        #{String(pokemon.id).padStart(3, "0")}
      </span>
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        className="h-24 w-24"
        loading="lazy"
      />
      <h3 className="mt-2 text-lg font-medium capitalize text-stone-900 dark:text-stone-100">
        {pokemon.name}
      </h3>
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`rounded px-2 py-0.5 text-xs font-medium capitalize ${
              TYPE_COLORS[type] ?? "bg-stone-200 text-stone-800"
            }`}
          >
            {type}
          </span>
        ))}
      </div>
    </article>
  );
}
