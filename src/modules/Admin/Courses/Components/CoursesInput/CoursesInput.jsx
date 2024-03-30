import React from 'react';
import cls from './styles.module.scss';
import { Box, Input } from '@chakra-ui/react';

export const CoursesInput = React.forwardRef(({
    name, 
    required, 
    register = () => {}, 
    placeholder, 
    type, 
    label, 
    id, 
    ref, 
    ...props
}) => {
    
    const { ...rest } = props

    return (
        <Box className={cls.wrapper}>
            <label 
                className={cls.label} 
                htmlFor={id}
            >
                {label}
            </label>
            <Input
                className={cls.input}
                {...rest}
                ref={ref}
                {...register(name)}
                {...props}
                type={type}
                id={id}
                placeholder={placeholder}
                required={required} 
            />
        </Box>
    )
})