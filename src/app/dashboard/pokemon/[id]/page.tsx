import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const static151Pokemons = Array.from({ length: 151 }).map(
    (v, i) => `${i + 1}`
  );

  return static151Pokemons.map((id) => ({ id: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name, id } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `${name} pokemon page`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (res) => res.json()
    );

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1 className="capitalize text-xl">Pokemon {pokemon.name}</h1>
      <Card className="flex flex-row">
        <CardHeader className="h-full">
          <CardTitle className="capitalize">{pokemon.name}</CardTitle>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="pokemon"
            width={200}
            height={200}
          />
          <Link
            href={"/dashboard/pokemons"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Back
          </Link>
        </CardHeader>
        <CardContent className="mt-5">
          <CardDescription>
            <span className="font-bold block">Moves</span>
            {pokemon.moves.map((a) => a.move.name)}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
