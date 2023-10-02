import {classNames} from "shared/lib/classNames/classNames";
import cls from './QuestionRow.module.scss';
import {QuestionRowI} from "shared/lib/types/ifc";
import {Badge} from "shared/ui";
import {NavLink} from "react-router-dom";

interface QuestionRowProps {
    className?: string;
    questionInfo: QuestionRowI;
}

export const QuestionRow = (props: QuestionRowProps) => {
    const {
        className,
        questionInfo
    } = props;

    return (
        <NavLink className={cls.question__link} to={`/question/${questionInfo.question_id}`}>
            <div className={classNames(cls['question-row'], {}, [className])}>
                <div className={cls.question__cell} dangerouslySetInnerHTML={{__html: questionInfo.owner.display_name}} />
                <div className={cls.question__cell} dangerouslySetInnerHTML={{__html: questionInfo.title}}/>
                <div className={cls.question__cell}>{questionInfo.answer_count}</div>
                <div className={classNames(cls.question__cell, {}, [cls.badge])}>
                    {questionInfo.tags.map(tag => (
                        <Badge key={tag}>{tag} </Badge>
                    ))}
                </div>
            </div>
        </NavLink>
    );
};