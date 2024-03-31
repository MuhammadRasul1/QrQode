import { Box } from "@chakra-ui/react"
import cls from "./styles.module.scss"
import { TiTick } from "react-icons/ti";

export const PageSuccess = () => {

    return (
        <div className={cls.tickContainer}>
            <div className={cls.tick}>
                <TiTick size={100} color="green" />
                <h2 className={cls.title}>Siz muvafaqiyatli ro'yxatdan o'tdingiz</h2>
            </div>
        </div>
    )
}