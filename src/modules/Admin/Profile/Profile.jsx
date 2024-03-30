import cls from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { HeaderText } from 'components/HeaderText';
export const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('auth'));

  const lists = [
    {
      id: "first_name",
      label: "Имя",
      input: userData?.userData?.data?.first_name,
    },
    {
      id: "last_name",
      label: "Фамилия",
      input: userData?.userData?.data?.last_name,
    },
    {
      id: "email",
      label: "Электронный адрес",
      input: userData?.userData?.data?.email,
    },
    {
      id: "phone_number",
      label: "Телефон номер",
      input: userData?.userData?.data?.phone_number,
    }
  ]

  return (
    <Box className={cls.wrapper}>
      <HeaderText title="Профиль" />
        <Box className={cls.content}>
          <Box className={cls.contentLeft}>
            <img className={cls.avatar} src={userData?.userData?.data?.photo} alt="" width="135px" height="135px" />
            <Link to="detail" className={cls.link}>Изменить данные</Link>
          </Box>
          <dl className={cls.list}>
            {lists?.map((item, index) => (
              <div className={cls.item} key={index}>
                <dt className={cls.label}>{item?.label}</dt>
                <dd className={cls.text}>{item?.input}</dd>
              </div>
            ))}
          </dl>
        </Box>
    </Box>
  );
};
