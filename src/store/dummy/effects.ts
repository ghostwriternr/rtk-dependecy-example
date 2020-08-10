import { createAsyncThunk } from "@reduxjs/toolkit";
import { dummyService } from "./dummyService";

export const fetchApiResponse = createAsyncThunk(
    "dummy/fetchApiResponse",
    async () => {
        const response = await dummyService.getPikachu();
        return { apiResponse: response.data };
    }
);
