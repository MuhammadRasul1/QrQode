import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { BtnSubmit } from 'components/BtnSubmit';

export const SecondHeader = ({
  onOpen = () => {},
  title,
}) => {
  return (
    <header className={cls.header}>
      <Box className={cls.wrapper}>
        <h1 className={cls.title}>{title}</h1>
        <Box className={cls.wrapperLeft}>
          <BtnSubmit className={cls.btnAdd} text="+ Добавить" onClick={onOpen} />
        </Box>
      </Box>
    </header>
  );  
};
