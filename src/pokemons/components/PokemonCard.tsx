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
import { Heart } from "lucide-react";

export const PokemonCard = ({ id, name }: SimplePokemon) => {
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
          priority={false}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Heart strokeWidth={1.25} />
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
