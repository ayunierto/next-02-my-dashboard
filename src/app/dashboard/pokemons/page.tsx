import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "List of Pokemons",
  description: "Pokemons page",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  // throw new Error("This is a error...");

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div>
      <h1 className="text-xl mb-2">
        List of Pokemons{"  "}
        <span className="text-sm text-indigo-800">(static)</span>
      </h1>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
