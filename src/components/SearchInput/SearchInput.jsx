import cls from "./styles.module.scss";
import SearchImg from "assets/img/icon/search.svg";

export function SearchInput({ placeholder="Поиск", type="search", id="search", ariaLabel="Search", name="search", onChange = () => {} }) {
    return (
        <div className={cls.wrapper}>
            <img src={SearchImg} alt="Search" width={18} height={18} />
            <input className={cls.input} 
                type={type}
                name={name}
                id={id} 
                aria-label={ariaLabel} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}