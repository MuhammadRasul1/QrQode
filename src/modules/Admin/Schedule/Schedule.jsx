import { useScheduleProps } from "./useScheduleProps"
import cls from './styles.module.scss'
import { Box } from "@chakra-ui/react"
import { Container } from "components/Container"


export const Schedule = () => {

       const { text } = useScheduleProps()

       return <Box className={cls.schedule}>
                     <header className={cls.header}>
                            <Container>
                                   <h1 className={cls.title}>Расписание преподавателей</h1>
                            </Container>
                     </header>
       </Box>
}
