import cls from "./styles.module.scss";

export const CopyRight = (props) => {
    return (
        <span className={cls.text}>{props.text ? props.text : 'Copyright © URecruit. Все права защищены'}</span>
    )
}