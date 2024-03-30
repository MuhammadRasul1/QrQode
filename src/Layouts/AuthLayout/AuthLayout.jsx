import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"

export const AuthLayout = () => {

  return <>
    <Box className={cls.wrapper}>
      <Box className={cls.wrapperLeft}>
        <h2 className={cls.title}>Learning Management system</h2>
        <img className={cls.img} src={AuthImg} alt="Learning Management system"/>
      </Box>
      <Box className={cls.wrapperContent}>
        <Outlet />
      </Box>
    </Box>
  </>;
};
