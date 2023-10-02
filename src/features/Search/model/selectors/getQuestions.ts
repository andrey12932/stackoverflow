import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import dayjs from "dayjs";

export const getQuestions = (state: StateSchema) => state.search.questions;

export const getSearchQuery = (state: StateSchema) => state.search.searchQuery;

export const getFilters = (state: StateSchema) => {
    return {
        dateStart: state.search.filters.dateStart?.length ? dayjs(state.search.filters.dateStart).valueOf() / 1000 : '',
        dateEnd: state.search.filters.dateEnd?.length ? dayjs(state.search.filters.dateEnd).valueOf() / 1000 : '',
        tag: state.search.filters.tag,
    }
};

export const getOrder = (state: StateSchema) => state.search.order;