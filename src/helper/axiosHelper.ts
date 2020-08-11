import axios from "axios";
import { Store } from "@reduxjs/toolkit";

let defaultAxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

const setupInterceptors = (store: Store) => {
    defaultAxiosInstance.interceptors.request.use((config) => {
        // Real application modifies the header based on environment (sandbox/prod) present in Redux state
        if (!store.getState().dummySlice.pokemon) {
            console.log("No pokemon yet");
        }
        return config;
    });
};

export { defaultAxiosInstance, setupInterceptors };
