import {classNames} from "shared/lib/classNames/classNames";
import cls from './QuestionBody.module.scss';
import {Badge} from "shared/ui";
import {QuestionI} from "shared/lib/types/ifc";
import {CommentBlock} from "widgets/CommentBlock/CommentBlock";
import {useEffect} from "react";
import hljs from 'highlight.js';

interface QuestionBodyProps {
    className?: string;
    question: QuestionI;
}

export const QuestionBody = (props: QuestionBodyProps) => {
    const {
        className,
        question
    } = props;

    useEffect(() => {
        hljs.highlightAll();
    })

    return (
        <div className={classNames(cls.QuestionBody, {}, [className])}>
            <p dangerouslySetInnerHTML={{__html: question.body}}></p>
            <div className={cls.tags}>
                {
                    question.tags?.map(tag => (
                        <Badge key={tag}>{tag}</Badge>
                    ))
                }
            </div>
            <CommentBlock comments={question.comments} />
        </div>
    );
};