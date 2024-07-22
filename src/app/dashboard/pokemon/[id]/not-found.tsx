import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <h2 className="text-9xl font-bold">404</h2>
      <p className="bg-[#f75959] p-1 rounded-md rotate-6 -translate-y-16 text-xs">
        Pokemon not found
      </p>
      <Link
        href="/dashboard/pokemons"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Return to list
      </Link>
    </div>
  );
}
