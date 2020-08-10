import { createReducer } from "@reduxjs/toolkit";
import { fetchApiResponse } from "./effects";
import { PokemonResponse } from "./types";

const initialState: { pokemon: PokemonResponse | undefined } = {
    pokemon: undefined,
};

export const dummyReducer = createReducer(initialState, (builder) =>
    builder.addCase(fetchApiResponse.fulfilled, (draft, action) => {
        const { apiResponse } = action.payload;
        draft.pokemon = apiResponse;
    })
);
