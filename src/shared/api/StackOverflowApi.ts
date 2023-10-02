import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react'
import {QuestionI, QuestionRowI} from "shared/lib/types/ifc";


export const stackOverflowApi = createApi({
    reducerPath: 'stackOverflowApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.stackexchange.com/2.3/' }),
    endpoints: (builder) => ({
        getQuestionsByFilter: builder.query<{items: QuestionRowI[], has_more: boolean}, string>({
            query: (name) => `search?site=stackoverflow&filter=!)6t3h7zqXuPdsHiyeVn8m)LRlkcKI7Y&${name}`
        }),
        getAll: builder.query<QuestionRowI, void>({
            query: () => 'questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=1&order=asc&sort=activity&filter=!-n0dzzX_9.hGlGuA8cVsVjCWxm5VyS9b1yx(Nu*9ydxD*T_xyTdi_p',
        }),
        getQuestionById: builder.query<QuestionI, number>({
            query: (id) =>  `questions/${id}?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=!SBpEoH4K2UVI7_efrohUdGfvc.GGc0msyH)jK46B*)182Hwt0(ZHlHrBGQ9lN*WT`,
            transformResponse: (data: {items: QuestionI[]}) => {
                return data.items[0]
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetQuestionsByFilterQuery,
    useGetAllQuery,
    useGetQuestionByIdQuery
} = stackOverflowApi