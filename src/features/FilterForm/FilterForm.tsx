import {classNames} from "shared/lib/classNames/classNames";
import cls from './FilterForm.module.scss';
import {Button} from "shared/ui";
import {useDispatch} from "react-redux";
import {searchActions} from "features/Search/model/slice/SearchSlice";
import dayjs from "dayjs";
import {Filters} from "features/Search/model/types/SearchSchema";

interface FilterFormProps {
    className?: string
}

export const FilterForm = (props: FilterFormProps) => {
    const {
        className
    } = props;

    const dispatch = useDispatch();

    const setFilters = (e: any) => {
        e.preventDefault()
        const filters: Filters = {}
        filters.dateStart = e.target[0].value;
        filters.dateEnd = e.target[1].value;
        filters.tag = e.target[2].value;

        dispatch(searchActions.setFilters(filters))
    }

    return (
        <form onSubmit={setFilters} className={classNames(cls.FilterForm, {}, [className])}>
            <div className={cls.filter__item}>
                <label htmlFor="fromdate">С даты</label>
                <input type="date" name='fromdate'/>
            </div>
            <div className={cls.filter__item}>
                <label htmlFor="todate">До даты</label>
                <input type="date" name='todate'/>
            </div>
            <div className={cls.filter__item}>
                <label htmlFor="tag">Тег</label>
                <input type="text" name='tag'/>
            </div>
            <input className={cls.filter__submit} type='submit'/>
        </form>
    );
};