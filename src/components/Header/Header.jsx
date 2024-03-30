import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';
import { SearchInput } from 'components/SearchInput';
import { BtnSubmit } from 'components/BtnSubmit';
import { BtnDownload } from 'components/BtnDownload';

export const Header = ({
  onOpen = () => {},
  title,
  onChange = () => {},
}) => {
  return (
    <header className={cls.header}>
      <Box className={cls.wrapper}>
        <h1 className={cls.title}>{title}</h1>
        <Box className={cls.wrapperLeft}>
          <BtnDownload />
          <SearchInput onChange={onChange} className={cls.searchInput} />
          <BtnSubmit className={cls.btnAdd} text="+ Добавить" onClick={onOpen} />
        </Box>
      </Box>
    </header>
  );
};
