import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import {SearchPage} from "pages/SearchPage";
import {QuestionPage} from "pages/QuestionPage";

export enum AppRoutes {
    MAIN = 'main',
    SEARCH = 'search',
    QUESTION = 'question'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.QUESTION]: '/question/:question_id'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <SearchPage />
    },
    [AppRoutes.QUESTION]: {
        path: RoutePath.question,
        element: <QuestionPage />
    }
}
