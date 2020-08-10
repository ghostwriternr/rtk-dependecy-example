import { combineReducers } from "@reduxjs/toolkit";
import { dummyReducer } from "./dummy/reducer";

export const rootReducer = combineReducers({ dummySlice: dummyReducer });
export type AppRootState = ReturnType<typeof rootReducer>;
