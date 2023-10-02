import {classNames} from "shared/lib/classNames/classNames";
import cls from './Filters.module.scss';
import {Button} from "shared/ui";
import {ButtonColorT, ButtonSizeT} from "shared/lib/types/UiTypes";
import {FilterForm} from "features/FilterForm/FilterForm";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {OrderT} from "features/Search/model/types/SearchSchema";
import {searchActions} from "features/Search/model/slice/SearchSlice";

interface FiltersProps {
    className?: string
}

export const Filters = (props: FiltersProps) => {
    const {
        className
    } = props;

    const dispatch = useDispatch();

    const [showFilter, setShowFilter] = useState(false);

    const setOrder = (order: OrderT) => {
        dispatch(searchActions.setOrder(order))
    }

    const toggleFilter = () => {
        setShowFilter(prev => !prev);
    }

    return (
        <div className={classNames(cls.Filters, {}, [className])}>
            <Button onClick={toggleFilter} size={ButtonSizeT.SMALL} color={ButtonColorT.TRANSPARENT}>
                Фильтры
            </Button>
            { showFilter && <FilterForm/>}
            <Button onClick={() => setOrder(OrderT.ASC)} size={ButtonSizeT.SMALL} color={ButtonColorT.TRANSPARENT}>
                &darr;
            </Button>
            <Button onClick={() => setOrder(OrderT.DESC)} size={ButtonSizeT.SMALL} color={ButtonColorT.TRANSPARENT}>
                &uarr;
            </Button>
        </div>
    );
};