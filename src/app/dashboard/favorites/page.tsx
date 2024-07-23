import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favorites Pokemons",
  description: "Favorites Pokemons",
};

export default async function FavoritesPage() {
  return (
    <div>
      <h1 className="text-xl mb-2">
        List of Pokemons{"  "}
        <span className="text-sm text-indigo-800">(global state)</span>
      </h1>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}
