import {classNames} from "shared/lib/classNames/classNames";
import cls from './MainPage.module.scss';
import React from "react";
import {Search} from "features";

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Search />
        </div>
    );
};

export default MainPage;
