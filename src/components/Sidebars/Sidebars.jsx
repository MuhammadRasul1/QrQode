import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cls from './styles.module.scss';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from '@chakra-ui/react';
import { Footer } from 'components/Footer';
import Logout from 'assets/img/icon/exit_to_app.svg';
import { authStore } from 'store/auth.store';
import { useState } from 'react';
import MenuOpen from "assets/img/icon/menu_open.svg";
import Logo from "assets/img/icon/logo.svg";
import { DashboardIcon, CourseIcon, GroupsIcon, StudentsIcon, PaymentIcon, ReportIcon, InfoIcon, Schedule, Settings } from 'assets/icons/icons';
import clsx from 'clsx';

export const Sidebars = () => {
  const links = [
    { title: 'Дашборд', path: 'admin/dashbord', src: DashboardIcon },
    { title: 'Курсы', path: 'admin/courses', src: CourseIcon },
    { title: 'Группы', path: 'admin/groups', src: GroupsIcon },
    { 
      title: 'Расписание',  
      src: Schedule,
      children: [
        { title: 'По аудиториям', path: 'admin/schedule/audience' },
        { title: 'По преподавателям', path: 'admin/schedule/teachers' },
      ] 
    },
    { title: 'Ученики', path: 'admin/students', src: StudentsIcon },
    { title: 'Менторы', path: 'admin/mentors', src: StudentsIcon },
    { title: 'Платежи', path: 'admin/payments', src: PaymentIcon },
    { title: 'Отчеты', path: 'admin/reports', src: ReportIcon },
    { 
      title: 'Настройки',  
      src: Settings,
      children: [
        { title: 'Кабинет', path: 'admin/settings/rooms' },
        { title: 'Скидки', path: 'admin/settings/discounts' },
      ] 
    },
    { title: 'Профиль', path: 'admin/profile', src: InfoIcon },
  ];

  const auth = JSON.parse(localStorage.getItem('auth'));
  const { pathname } = useLocation();

  const handleLogOut = () => {
    localStorage.clear();
    authStore.logout();
  };

  const [sidebarClosed, setSidebarClosed] = useState(false)

  return (
    <Box className={clsx(cls.sidebar, {[cls.closed]: sidebarClosed})}>
      <Box className={cls.wrapper}>
        {!sidebarClosed && (
          <Link to={'/admin/dashbord'} className={cls.logo}>
            <img className={cls.logoimg} src={Logo} alt="edumind" width={32} height={32} />
            <span className={cls.logoText}>EduMind</span>
          </Link>
        )}
        <button type="button">
          <button className={cls.closeBtn} onClick={() => setSidebarClosed(!sidebarClosed)}>
            <img src={MenuOpen} alt="menuopen" width={20} height={20} />
          </button>
        </button>
      </Box>

      <nav className={`${cls.navbar} ${sidebarClosed ? cls.open : ''}`}>
        <ul className={cls.navList}>
          {links?.map((link) => {
            if(link?.children) {
              return (
                <li key={link.path} >
                  <Accordion allowToggle>
                    <AccordionItem className={cls.accardionItem} border="none">
                      <h2>
                        <AccordionButton className={cls.navItem}>
                          <Box className={cls.accardion}>
                            {
                              link.src && <link.src color={pathname.includes(link?.path) ? "#fff": '#2B65EB'} />
                            }
                            {!sidebarClosed && <span className={cls.navText}>{link?.title}</span>}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link
                          className={`${cls.navLink} ${pathname.includes(link?.children[0]?.path) ? cls.active : ''}`}
                          to={link?.children[0]?.path}
                        >
                          <span className={cls.navText}>{link?.children[0]?.title}</span>
                        </Link>
                        <Link
                          className={`${cls.navLink} ${pathname.includes(link?.children[1]?.path) ? cls.active : ''}`}
                          to={link?.children[1]?.path}
                        >
                          <span className={cls.navText}>{link?.children[1]?.title}</span>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </li>
              )
            } else {
              return(  
                <li key={link.path} className={cls.navItem}>
                  <Link
                    className={`${cls.navLink} ${pathname.includes(link.path) ? cls.active : ''}`}
                    to={link.path}
                  >
                    {
                      link.src && <link.src color={pathname.includes(link.path) ? "#fff": '#2B65EB'} />
                    }
                    {!sidebarClosed && <span className={cls.navText}>{link.title}</span>}
                  </Link>
                </li>
              )
            }
          })}
          <li className={cls.navItem}>
            <button className={cls.navLink} onClick={handleLogOut}>
              <img src={Logout} alt="logout" width={20} height={20} />
              {!sidebarClosed && <span className={cls.navText}>Выход</span>}
            </button>
          </li>
        </ul>
      </nav>
      {!sidebarClosed ? <Footer auth={auth} /> : ""}
    </Box>
  );
};
