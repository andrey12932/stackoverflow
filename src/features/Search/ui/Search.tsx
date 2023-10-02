import {classNames} from "shared/lib/classNames/classNames";
import cls from './Search.module.scss';
import {Button, SearchInput} from "shared/ui";
import React, {useState, useCallback} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchActions} from "features/Search/model/slice/SearchSlice";

interface SearchProps {
    className?: string;
    horizontal?: boolean;
}

export const Search = (props: SearchProps) => {
    const {
        className,
        horizontal = false
    } = props;

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const inputHandler = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    }, [])

    const submitSearch = useCallback(() => {
        dispatch(searchActions.setSearchQuery(search))
    }, [search])

    return (
        <div className={classNames(cls.Search, {
            [cls.horizontal]: horizontal
        }, [className])}>
            <SearchInput onInput={inputHandler} />
            <NavLink to={`/search?q=${search}`}>
                <Button disabled={!search.length} onClick={submitSearch}>
                    Поиск
                </Button>
            </NavLink>
        </div>
    );
};