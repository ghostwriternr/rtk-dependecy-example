import { AxiosResponse } from "axios";

import { defaultAxiosInstance } from "../../helper/axiosHelper";
import { PokemonResponse } from "./types";

const getPikachu = (): Promise<AxiosResponse<PokemonResponse>> => {
    return defaultAxiosInstance.get("pokemon/pikachu");
};

export const dummyService = {
    getPikachu,
};
