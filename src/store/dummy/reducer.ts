import { createReducer } from "@reduxjs/toolkit";
import { toggleEvolved, fetchPokemon } from "./effects";
import { PokemonResponse } from "./types";

const initialState: {
    isEvolved: boolean;
    pokemon: PokemonResponse | undefined;
} = {
    isEvolved: false,
    pokemon: undefined,
};

export const dummyReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(fetchPokemon.fulfilled, (draft, action) => {
            const { apiResponse } = action.payload;
            draft.pokemon = apiResponse;
        })
        .addCase(toggleEvolved, (draft) => {
            if (draft.pokemon) {
                draft.isEvolved = !draft.isEvolved;
            }
        })
);
