import {SearchSchema} from "features/Search/model/types/SearchSchema";
import {stackOverflowApi} from "shared/api/StackOverflowApi";
import {AnyAction, Reducer} from "@reduxjs/toolkit";

export interface StateSchema {
    [stackOverflowApi.reducerPath]: any;
    search: SearchSchema;
}
