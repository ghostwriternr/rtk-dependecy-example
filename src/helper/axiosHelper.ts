import axios from "axios";

import { store } from "../store";

let defaultAxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

defaultAxiosInstance.interceptors.request.use((config) => {
    // Real application modifies the header based on environment (sandbox/prod) present in Redux state
    if (!store.getState().dummySlice.pokemon) {
        console.log("No pokemon yet");
    }
    return config;
});

export { defaultAxiosInstance };
