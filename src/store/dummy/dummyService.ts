import { defaultAxiosInstance } from "../../helper/axiosHelper";
import { PokemonResponse } from "./types";

const getPikachu = () =>
    defaultAxiosInstance.get<PokemonResponse>("pokemon/pikachu");

export const dummyService = {
    getPikachu,
};
