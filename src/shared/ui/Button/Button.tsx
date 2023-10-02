import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import { ReactNode, ButtonHTMLAttributes} from "react";
import {ButtonColorT, ButtonSizeT} from "shared/lib/types/UiTypes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children?: ReactNode;
    color?: ButtonColorT;
    size?: ButtonSizeT;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        color = ButtonColorT.ORANGE,
        size = ButtonSizeT.LARGE,
        ...otherProps
    } = props;

    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[color], cls[size]])}>
            {children}
        </button>
    );
};