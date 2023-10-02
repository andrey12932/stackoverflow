import {QuestionRowI} from "shared/lib/types/ifc";

export interface SearchSchema {
    questions: QuestionRowI[];
    searchQuery: string;
    filters: Filters;
    order: OrderT;
}

export interface Filters {
    dateStart?: string;
    dateEnd?: string;
    tag?: string;
}

export enum OrderT {
    ASC = 'asc',
    DESC = 'desc'
}