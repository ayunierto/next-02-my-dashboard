import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   const FavoritesPokemons = JSON.parse(
//     localStorage.getItem("favorites-pokemons") ?? "{}"
//   );
//   return FavoritesPokemons;
// };

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavorites(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorites-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toogleFavorite, setFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
