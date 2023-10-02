import {classNames} from "shared/lib/classNames/classNames";
import cls from './SearchTable.module.scss';
import {QuestionRow} from "entities/QuestionRow";
import {useEffect, useState, useRef} from "react";
import { useGetQuestionsByFilterQuery} from "shared/api/StackOverflowApi";
import {useDispatch, useSelector} from "react-redux";
import {getFilters, getOrder, getQuestions} from "features/Search/model/selectors/getQuestions";
import {searchActions} from "features/Search/model/slice/SearchSlice";
import {Loader} from "shared/ui";

interface SearchTableProps {
    className?: string;
    searchQuery?: string;
}

export const SearchTable = (props: SearchTableProps) => {
    const {
        className,
        searchQuery
    } = props;

    const [page, setPage] = useState(1);

    const filters = useSelector(getFilters)
    const order = useSelector(getOrder)

    const lastItem = useRef<any>();
    const observerLoader = useRef<IntersectionObserver>();

    const dispatch = useDispatch();

    const actionInSight = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && data?.has_more) {
            setPage(currentPage => currentPage + 1)
        }
    };

    useEffect(() => {
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }

        observerLoader.current = new IntersectionObserver(actionInSight);
        if (lastItem.current) {
            observerLoader.current.observe(lastItem.current);
        }
    }, [lastItem.current]);


    const questions = useSelector(getQuestions);

    const {data, isLoading, refetch} =
        useGetQuestionsByFilterQuery(
            `intitle=${searchQuery}&page=${page}&fromdate=${filters.dateStart}&todate=${filters.dateEnd}&tagged=${filters.tag}&order=${order}`
        );

    useEffect(() => {
        if (data) {
            dispatch(searchActions.setQuestions([...questions, ...data.items]))
        }
    }, [page])

    useEffect(() => {
        if (data) {
            dispatch(searchActions.setQuestions(data.items))
        }
    }, [filters])

    useEffect(() => {
        refetch();
    }, [searchQuery, filters.tag, filters.dateStart, filters.dateEnd])

    useEffect(() => {
        return () => {
            dispatch(searchActions.setQuestions([]))
        }
    }, [])

    return (
        <div className={classNames(cls.table)}>
            <div className={classNames(cls['table-header'], {}, [cls['table-row']])}>
                <div className={cls.table__cell}>Автор вопроса</div>
                <div className={cls.table__cell}>Тема</div>
                <div className={cls.table__cell}>Количество ответов</div>
                <div className={cls.table__cell}>Теги</div>
            </div>
            {
                questions.length ?
                questions.map(item => (
                    <QuestionRow key={item.question_id} questionInfo={item} />
                )) : isLoading ? <Loader className={cls.loader} /> : <span className={cls.notFound}>Ничего не найдено :(</span>
            }
            {
                data?.has_more &&
                    <div className={cls.loader} ref={lastItem}>
                        <Loader />
                    </div>
            }
        </div>
    );
};