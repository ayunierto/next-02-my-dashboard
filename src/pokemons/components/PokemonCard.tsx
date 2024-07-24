"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SimplePokemon } from "../interfaces";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Heart, LucideHeartOff } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toogleFavorite } from "@/store/pokemonsSlice";

export const PokemonCard = ({ id, name }: SimplePokemon) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);

  const dispatch = useAppDispatch();

  const onToogle = () => {
    dispatch(toogleFavorite({ id, name }));
  };
  return (
    <Card className="w-44">
      <CardHeader>
        <CardTitle className="text-base text-ellipsis overflow-hidden whitespace-nowrap capitalize text-center">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          className="w-24 h-24"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="pokemon image"
          width={100}
          height={100}
          priority
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        {isFavorite ? (
          <Heart
            onClick={onToogle}
            className="text-indigo-600 cursor-pointer hover:bg-muted p-2 rounded-full duration-200"
            strokeWidth={1.25}
            size={38}
          />
        ) : (
          <LucideHeartOff
            onClick={onToogle}
            className="text-red-500 cursor-pointer hover:bg-muted p-2 rounded-full duration-200"
            strokeWidth={1}
            size={38}
          />
        )}
        <Link
          href={`/dashboard/pokemons/${name}`}
          className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        >
          More ..
        </Link>
      </CardFooter>
    </Card>
  );
};
