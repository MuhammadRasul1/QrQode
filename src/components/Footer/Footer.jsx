import { Box, Icon } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import UserAvatar from "assets/img/icon/userAvatar.svg";

export const Footer = ({auth}) => {

  return(
    <footer className={cls.footer} id="footer">
        <Box className={cls.profileWrapper}>
          <Box className={cls.userProfile}>
            <img className={cls.userAvatar} src={UserAvatar} alt="user_avatar" width="32px" height="32px" />
            <Icon className={cls.status} viewBox='0 0 200 200' color='green'>
              <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
              />
            </Icon>
          </Box>
          <Box>
            <Box className={cls.userWrapper}>
              <span className={cls.userFirstName}>{auth?.userData?.data?.first_name}</span>
              <span className={cls.userLastName}>{auth?.userData?.data?.last_name}</span>
            </Box>
            <span className={cls.email}>{auth?.userData?.data?.email}</span>
          </Box>
        </Box>
    </footer>
  ) 
};
