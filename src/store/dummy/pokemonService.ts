import { defaultAxiosInstance } from "../../helper/axiosHelper";
import { PokemonResponse } from "./types";

const getPokemon = () => defaultAxiosInstance.get<PokemonResponse>("");

export const pokemonService = { getPokemon };
