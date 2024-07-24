"use client";
import { useAppSelector } from "@/store/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { Card } from "@/components/ui/card";
import { HeartOffIcon } from "lucide-react";

export const FavoritesPokemons = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);
  const pokemons = Object.values(favorites);
  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className=" w-full h-full p-10 flex flex-col justify-center items-center">
        <HeartOffIcon size={100} className="text-red-600 pb-5" />
        <h2>There is not favorites</h2>
      </Card>
    </div>
  );
};
