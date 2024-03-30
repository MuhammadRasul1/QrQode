import { Box } from '@chakra-ui/react'
import cls from "./styles.module.scss";
import { useDashbordProps } from "./useDashbordProps";
import { Statistic } from './Components/Statistic';
import { ResponsiveLines } from './Components/ResponsiveLines';
import { HeaderText } from 'components/HeaderText';

export const Dashbord = () => {

    const {
      lineData,
      data,
      list,
    } = useDashbordProps();

    return (
      <Box className={cls.wrapper}>
        <HeaderText
            title="Дашборд"
        />
        <Box className={cls.content}>
            <ul className={cls.list}>
                {
                    list?.map((item, index) => (
                        <li className={cls.item} key={index}> 
                            <Box className={cls.wrapperText}>
                                <span className={cls.count}>{item?.count}</span>
                                <h2 className={cls.subtitle}>{item?.title}</h2>
                            </Box>
                            <img src={item?.src} alt={item?.alt} width={64} height={64} />
                        </li>
                    ))
                }
            </ul>
            <Box className={cls.info}>
                <Box className={cls.infoLeft}>
                    <Statistic data={data} />
                </Box>
                <Box className={cls.infoRight} >
                    <ResponsiveLines />
                </Box>
            </Box>
        </Box>
      </Box>
    )
}
