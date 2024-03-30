import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Select = ({register = () => {}, name, value1, value2, value3, value4, value5, text1, text2, text3, text4, text5, id}) => {
    return (
        <Box className={cls.wrapper}>
            <select className={cls.select}  {...register(name)} id={id} >
                <option value={value1}>{text1}</option>
                <option value={value2}>{text2}</option>
            </select>
        </Box>
    );
}