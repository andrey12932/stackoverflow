import {classNames} from "shared/lib/classNames/classNames";
import cls from './Badge.module.scss';
import {ReactNode} from "react";

interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: ReactNode;
}

export const Badge = (props: BadgeProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button {...otherProps} className={classNames(cls.Badge, {}, [className])}>
            {children}
        </button>
    );
};