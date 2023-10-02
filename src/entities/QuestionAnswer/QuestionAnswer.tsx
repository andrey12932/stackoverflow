import {classNames} from "shared/lib/classNames/classNames";
import cls from './QuestionAnswer.module.scss';
import {AnswerI} from "shared/lib/types/ifc";
import {getUserLink} from "shared/lib/getLinks/getLinks";
import {NavLink} from "react-router-dom";
import {User} from "shared/ui";

interface QuestionAnswerProps {
    className?: string;
    answer: AnswerI;
}

export const QuestionAnswer = (props: QuestionAnswerProps) => {
    const {
        className,
        answer
    } = props;

    const userLink = getUserLink(answer.owner.user_id);

    return (
        <div className={classNames(cls.QuestionAnswer, {}, [className])}>
            <User owner={answer.owner} />
            <p className={cls.answer} dangerouslySetInnerHTML={{__html: answer.body}}></p>
        </div>
    );
};