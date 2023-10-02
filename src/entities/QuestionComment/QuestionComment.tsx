import {classNames} from "shared/lib/classNames/classNames";
import cls from './QuestionComment.module.scss';
import {getUserLink} from "shared/lib/getLinks/getLinks";
import {CommentI} from "shared/lib/types/ifc";
import {NavLink} from "react-router-dom";
import {User} from "shared/ui";

interface QuestionCommentProps {
    className?: string;
    comment: CommentI;
}

export const QuestionComment = (props: QuestionCommentProps) => {
    const {
        className,
        comment
    } = props;

    return (
        <div className={classNames(cls.QuestionComment, {}, [className])}>
            <User owner={comment.owner} />
            <p dangerouslySetInnerHTML={{__html: comment.body}}></p>
        </div>
    );
};