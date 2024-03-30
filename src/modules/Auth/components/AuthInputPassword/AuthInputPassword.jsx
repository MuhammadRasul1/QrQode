import React, { useState } from "react";
import cls from "./styles.module.scss";
import clsx from "clsx";
import { Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import Error from "assets/img/icon/error.svg";
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'

export const AuthInputPassword = React.forwardRef(({name, maxLength, error, minLength, required, alt, src, register = () => {}, placeholder, type, label, id, ref, ...props}) => {
    const { ...rest } = props
    
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Box className={cls.wrapper}>
            <Box display="flex" flexDirection="column">
                <label className={cls.label} htmlFor={id}>
                    {label} 
                    <span className={cls.required}>*</span>
                </label>
                <Box className={cls.inputWrapper}>
                    <InputGroup display="flex" alignItems='center' size='md'>
                        <img src={src} alt={alt} width={24} height={24} />
                        <input
                            className={clsx(cls.input, { [cls.error]: !!error?.message })}
                            {...rest}
                            ref={ref}
                            {...register(name)}
                            {...props}
                            type={show ? 'text' : 'password'}
                            id={id}
                            maxLength={maxLength ? maxLength : 20}
                            minLength={minLength ? minLength : 8}
                            placeholder={placeholder}
                            required={required} 
                        />
                        <InputRightElement >
                            <button className={cls.btnEye} type='button' onClick={handleClick}>
                                {
                                    show ? 
                                    <ViewIcon />
                                    : <ViewOffIcon />
                                }
                            </button>
                        </InputRightElement>
                    </InputGroup>
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
