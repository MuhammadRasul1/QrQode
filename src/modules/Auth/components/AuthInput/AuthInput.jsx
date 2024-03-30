import React, { useRef } from "react";
import cls from "./styles.module.scss";
import clsx from "clsx";
import { Box } from "@chakra-ui/react";
import Error from "assets/img/icon/error.svg";

export const AuthInput = React.forwardRef((
    {
        name, 
        error, 
        rest,
        minLength,
        required,
        alt,
        src,
        register = () => {},
        placeholder,
        type,
        label,
        id,
        ref,
        ...props
    }) => {

    return (
        <Box className={cls.wrapper}>
            <Box display="flex" flexDirection="column">
                <label className={cls.label} htmlFor={id}>
                    {label} 
                    <span className={cls.required}>*</span>
                </label>
                <Box className={cls.inputWrapper}>
                    <img src={src} alt={alt} width={24} height={24}/>
                    <input
                        className={clsx(cls.input, { [cls.error]: !!error?.message })}
                        {...rest}
                        ref={ref}
                        {...register(name)}
                        {...props}
                        type={type}
                        id={id}
                        minLength={minLength ? minLength : 2}
                        placeholder={placeholder}
                        required={required} 
                    />
                </Box>
            </Box>
            { error?.message && 
             <Box display="flex" alignItems="center" marginTop="8px">
                <img src={Error} alt="error" width={16} height={16}/>
                <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
             </Box>
            }
        </Box>
    )
})
