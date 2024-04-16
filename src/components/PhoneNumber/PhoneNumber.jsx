import { Box, Input, InputGroup, InputLeftAddon, Select, Stack } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import clsx from "clsx";
import Error from "assets/img/icon/error.svg";

export const PhoneNumber = ({
    register = () => {}, 
    name, 
    id, 
    isRequired,
    error,
    label,
    placeholder,
    ...props
}) => {

    return (
        <Box className={cls.wrapper}>
            <Box className={cls.content}>
                <label className={cls.label} htmlFor={id}>{label}<span className={cls.required}>*</span></label>
                <Stack className={clsx(cls.stack, { [cls.error]: !!error?.message })} spacing={4}>
                    <InputGroup>
                    <InputLeftAddon>+998</InputLeftAddon>
                    <Input
                        className={cls.input}
                        type="text"
                        id={id}
                        {...register(name, { isRequired: {value: isRequired, message: 'Заполните это поле'}})}
                        placeholder={placeholder} 
                        maxLength={9}
                        {...props}
                    />
                    </InputGroup>
                </Stack>
            </Box>
            { error?.message && 
             <Box display="flex" alignItems="center" marginTop="8px">
                <img src={Error} alt="error" width={16} height={16}/>
                <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
             </Box>
            }
        </Box>
    );
}