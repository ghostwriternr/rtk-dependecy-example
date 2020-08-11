import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { pokemonService } from "./pokemonService";

const toggleEvolved = createAction("dummy/togglePokemon");

const fetchPokemon = createAsyncThunk("dummy/fetchApiResponse", async () => {
    const response = await pokemonService.getPokemon();
    return { apiResponse: response.data };
});

export { toggleEvolved, fetchPokemon };
