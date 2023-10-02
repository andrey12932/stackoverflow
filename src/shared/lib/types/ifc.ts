export interface QuestionRowI {
    tags: Array<string>;
    owner: {
        user_id: number,
        display_name: string
    };
    answer_count: number;
    question_id: number;
    title: string;
}

export interface PostI {
    owner: OwnerI;
    body: string;
}

export interface QuestionI extends PostI {
    tags: Array<string>;
    comments: Array<CommentI>;
    answers: Array<AnswerI>;
    question_id: number;
    title: string;
}

export interface AnswerI extends PostI {
    answer_id: number;
}

export interface CommentI extends PostI {
    post_id: number;
}

export interface OwnerI {
    account_id?: number;
    user_id?: number;
    profile_image?: string;
    display_name: string;
}