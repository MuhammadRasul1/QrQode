import { Outlet } from 'react-router-dom';
import { Box, } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { Sidebars } from 'components/Sidebars';
export const MainLayout = () => {
  return (
    <Box className={cls.content}>
      <Sidebars />
      <Box className={cls.wrapper} id="outlet">
        <Outlet className={cls.outlet} />
      </Box>
    </Box>
  );
};
