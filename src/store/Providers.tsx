"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { setFavorites } from "./pokemonsSlice";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites-pokemons") ?? "{}"
    );
    store.dispatch(setFavorites(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
