import {classNames} from "shared/lib/classNames/classNames";
import cls from './SearchPage.module.scss';
import {Search, Filters} from "features";
import {SearchTable} from "widgets";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getQuestions, getSearchQuery} from "features/Search/model/selectors/getQuestions";

interface SearchPageProps {
    className?: string
}

const SearchPage = (props: SearchPageProps) => {
    const {
        className
    } = props;

    const {search} = useLocation()
    const searchQuery = new URLSearchParams(search).get('q');

    return (
        <div className={classNames(cls.SearchPage, {}, [className])}>
            <div className={cls['SearchPage-top']}>
                <Filters />
                <Search horizontal={true} />
            </div>
            <SearchTable searchQuery={searchQuery} />
        </div>
    );
};

export default SearchPage;