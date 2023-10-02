import {classNames} from "shared/lib/classNames/classNames";
import cls from './Answers.module.scss';
import {AnswerI} from "shared/lib/types/ifc";
import {QuestionAnswer} from "entities/QuestionAnswer/QuestionAnswer";

interface AnswersProps {
    className?: string;
    answers: AnswerI[];
}

export const Answers = (props: AnswersProps) => {
    const {
        className,
        answers
    } = props;

    return (
        <div className={classNames(cls.Answers, {}, [className])}>
            <h1 className={cls.header}>Answers</h1>
            {
                answers?.map(answer => (
                    <>
                        {answer.body && <QuestionAnswer answer={answer} key={answer.answer_id}/>}
                    </>
                ))
            }
        </div>
    );
};