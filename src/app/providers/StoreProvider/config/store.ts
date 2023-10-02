import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {stackOverflowApi} from "shared/api/StackOverflowApi";
import {searchReducer} from "features/Search/model/slice/SearchSlice";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            [stackOverflowApi.reducerPath]: stackOverflowApi.reducer,
            search: searchReducer
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            [...getDefaultMiddleware(), stackOverflowApi.middleware]
    })
}
