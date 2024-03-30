"use client"

import { useAudienceProps } from "./useAudienceProps"
import cls from './styles.module.scss'
import { Container } from "components/Container"
import { Box } from "@chakra-ui/react"
import {ScheduleComponent, ViewDirective, ViewsDirective, Inject, Day, Week, Month} from "@syncfusion/ej2-react-schedule"
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
       "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0Rnxbf1x0ZFBMY1hbRnFPIiBoS35RckVgW3tfd3dRRGhUV0N0"
);


export const Audience = () => {


       const {data} = useAudienceProps()

       return (
       <Box className={cls.audience}>
              <header className={cls.header}>
                     <Container>
                            <h1 className={cls.title}>Расписание аудиториям</h1>
                     </Container>
              </header>

              <ScheduleComponent
              className={cls.schedule_table}
              height={700}
              eventSettings={{dataSource: data}}
              selectedDate={new Date(2024, 3, 25)}
              currentView="Week">
                     <ViewsDirective>
                            <ViewDirective option="Day" />
                            <ViewDirective option="Week" />
                            <ViewDirective option="Month" />
                     </ViewsDirective>

                     <Inject services={[Day, Week, Month]} />
              </ScheduleComponent>
       </Box>
       )
}