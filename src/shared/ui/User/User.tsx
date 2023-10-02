import {classNames} from "shared/lib/classNames/classNames";
import cls from './User.module.scss';
import {NavLink} from "react-router-dom";
import {getUserLink} from "shared/lib/getLinks/getLinks";
import {OwnerI} from "shared/lib/types/ifc";

interface UserProps {
    className?: string;
    owner: OwnerI;
}

export const User = (props: UserProps) => {
    const {
        className,
        owner
    } = props;

    const userLink = getUserLink(owner.user_id)

    return (
        <NavLink className={cls.user} to={userLink}>
            <img className={cls.avatar} src={owner.profile_image} alt="" />
            <span>{owner.display_name}</span>
        </NavLink>
    );
};