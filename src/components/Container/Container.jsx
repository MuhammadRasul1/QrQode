import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Container = ({ children }) => {

    return (
        <Box className={cls.container}>
            {children}
        </Box>
    )
}