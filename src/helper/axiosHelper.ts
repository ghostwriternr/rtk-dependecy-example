import axios from "axios";
import { store } from "../store";

let defaultAxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
});

defaultAxiosInstance.interceptors.request.use((config) => {
    // Real application modifies the header based on environment (sandbox/prod) present in Redux state
    const { isEvolved } = store.getState().dummySlice;
    if (isEvolved) {
        config.url = "/raichu";
    } else {
        config.url = "/pikachu";
    }
    return config;
});

export { defaultAxiosInstance };
