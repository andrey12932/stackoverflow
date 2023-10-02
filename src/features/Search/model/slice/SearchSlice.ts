import {Filters, OrderT, SearchSchema} from "features/Search/model/types/SearchSchema";
import {createSlice} from "@reduxjs/toolkit";

const initialState: SearchSchema = {
    questions: [],
    searchQuery: '',
    filters: {
        dateStart: '',
        dateEnd: '',
        tag: '',
    },
    order: OrderT.ASC
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setFilters: (state, action: {payload: Filters}) => {
            state.filters = action.payload
        },
        setOrder: (state, action: {payload: OrderT}) => {
            state.order = action.payload
        },
    }
});

export const { actions: searchActions } = searchSlice;

export const { reducer: searchReducer } = searchSlice;