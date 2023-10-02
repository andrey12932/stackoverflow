import {classNames} from "shared/lib/classNames/classNames";
import cls from './CommentBlock.module.scss';
import {CommentI} from "shared/lib/types/ifc";
import {QuestionComment} from "entities/QuestionComment/QuestionComment";

interface CommentBlockProps {
    className?: string;
    comments?: CommentI[];
}

export const CommentBlock = (props: CommentBlockProps) => {
    const {
        className,
        comments
    } = props;

    return (
        <div className={classNames(cls.CommentBlock, {}, [className])}>
            {comments?.map(comment => (
               <>
                    { comment.body &&
                        <QuestionComment comment={comment} key={comment.post_id}/>
                    }
                </>
            ))}
        </div>
    );
};