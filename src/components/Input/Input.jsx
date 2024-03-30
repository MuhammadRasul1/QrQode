
import { Input } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Inputs = ({name, required, maxLength, register = () => {}, placeholder, type, ariaLabel, id, ...props}) => {

    return(
        <Input
            // className={cls.input} 
            type={type} 
            id={id}
            maxLength={maxLength}
            placeholder={placeholder}
            aria-label={ariaLabel}
            {...register(name)}
            required={required} 
            {...props}
        />
    )
}
