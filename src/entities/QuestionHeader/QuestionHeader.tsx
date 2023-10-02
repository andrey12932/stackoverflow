import {classNames} from "shared/lib/classNames/classNames";
import cls from './QuestionHeader.module.scss';
import {NavLink} from "react-router-dom";
import {getUserLink} from "shared/lib/getLinks/getLinks";
import {QuestionI} from "shared/lib/types/ifc";
import {User} from "shared/ui";

interface QuestionHeaderProps {
    className?: string;
    question: QuestionI;
}

export const QuestionHeader = (props: QuestionHeaderProps) => {
    const {
        className,
        question
    } = props;

    const userLink = getUserLink(question.owner.user_id);

    return (
        <div className={classNames(cls.QuestionHeader, {}, [className])}>
            <h1>{question.title}</h1>
            <User
                owner={question.owner}
            />
        </div>
    );
};