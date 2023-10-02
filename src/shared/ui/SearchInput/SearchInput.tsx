import {classNames} from "shared/lib/classNames/classNames";
import cls from './SearchInput.module.scss';
import {InputHTMLAttributes} from 'react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string
}

export const SearchInput = (props: SearchInputProps) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.SearchInput, {}, [className])}>
            <input {...otherProps} type="text" className={cls.search__input} placeholder="Поиск по StackOverflow"/>
            <svg className={cls.search__icon} width="18"
                 height="18" viewBox="0 0 18 18">
                <path
                    d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
            </svg>
        </div>
    );
};
