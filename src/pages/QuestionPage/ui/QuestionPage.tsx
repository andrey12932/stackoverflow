import { classNames } from "shared/lib/classNames/classNames";
import cls from './QuestionPage.module.scss';
import {useNavigate, useParams} from "react-router-dom";
import {useGetQuestionByIdQuery} from "shared/api/StackOverflowApi";
import {Button, Loader} from "shared/ui";
import {QuestionHeader} from "entities/QuestionHeader/QuestionHeader";
import {QuestionBody} from "widgets/QuestionBody/QuestionBody";
import {QuestionAnswer} from "entities/QuestionAnswer/QuestionAnswer";
import {Answers} from "widgets/Answers/Answers";

interface QuestionPageProps {
    className?: string
}

const QuestionPage = (props: QuestionPageProps) => {
    const {
        className
    } = props;

    const params = useParams<any>();
    const navigate = useNavigate();

    const goToPreviousPage = () => {
        navigate(-1);
    }

    const {data, isLoading} = useGetQuestionByIdQuery(Number(params.question_id))

    return (
        <div className={classNames(cls.QuestionPage, {}, [className])}>
            {!isLoading ?
                <>
                    <QuestionHeader question={data} />
                    <QuestionBody question={data} />
                    <Answers answers={data.answers} />
                </>
                : <Loader />}
            <Button onClick={goToPreviousPage}>Назад</Button>
        </div>
    );
};

export default QuestionPage;
