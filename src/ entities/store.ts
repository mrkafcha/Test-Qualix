import { configureStore } from "@reduxjs/toolkit";
import {requestsReducer} from "./requestsSlice.ts";

export default configureStore({
    reducer: {
        requests: requestsReducer,
    },
})

export type RootState = ReturnType<typeof configureStore.getState>;
export type AppDispatch = typeof configureStore.dispatch