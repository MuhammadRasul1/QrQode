import cls from './styles.module.scss';

export const HeaderText = ({
  title,
}) => {
  return (
    <header className={cls.header}>
        <h1 className={cls.title}>{title}</h1>
    </header>
  );
};
