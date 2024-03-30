import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { DetailHeader } from "components/DetailHeader"
import { useGroupsDetailProps } from "./useGroupsDetailProps"
import cls from "./styles.module.scss"
import UploadFile from "components/UploadFile/UploadFile"
import { CustomTable } from "components/CustomTable"

export const GroupsDetail = () => {

    const { 
        activeGroupDetail, 
        list,
        data,   
        columns, 
    } = useGroupsDetailProps()
    
    return (
        <Box className={cls.wrapper}>
            <DetailHeader title={activeGroupDetail?.name} />
            <Box className={cls.content}>
                <Box className={cls.contentLeft}>
                    <UploadFile 
                        // uploadPhoto={uploadPhoto}
                        // handleChange={handleChange}
                        // handleClick={handleClick}
                        // fileInputRef={fileInputRef}
                        // videoUrl={videoUrl}
                        // progress={progress}
                    />
                    <h2 className={cls.title}>{activeGroupDetail?.name}</h2>
                    <ul className={cls.list}>
                        {list?.map((item, index) => (
                            <li className={cls.item} key={index}>
                                <span className={cls.subtitle}>{item?.title}:</span>
                                <span className={cls.value}>{item?.value}</span>
                            </li>
                        ))}
                    </ul>
                    <Box className={cls.wrapperTime}>
                        <Box className={cls.time}>
                            <span className={cls.subtitle}>Время:</span>
                            <span className={cls.value}>{activeGroupDetail?.time}</span>
                        </Box>
                        <Box className={cls.item}>
                            <span className={cls.subtitle}>Дни:</span>
                            <span className={cls.value}>{activeGroupDetail?.days}</span>
                        </Box>
                    </Box>
                </Box>
                <Box className={cls.contentRight}>
                    <Tabs>
                        <TabList>
                            <Tab className={cls.tab}>Студенты</Tab>
                            <Tab className={cls.tab}>Посещаемость</Tab>
                            <Tab className={cls.tab}>Материалы</Tab>
                            <Tab className={cls.tab}>Оплата</Tab>
                            <Tab className={cls.tab}>Экзамены</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <CustomTable columns={columns} data={data} />
                            </TabPanel>
                            <TabPanel>
                                Посещаемость
                            </TabPanel>
                            <TabPanel>
                                Материалы
                            </TabPanel>
                            <TabPanel>
                                Оплата 
                            </TabPanel>
                            <TabPanel>
                                Экзамены
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Box>
    )
}