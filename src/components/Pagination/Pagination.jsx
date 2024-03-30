import { Container } from 'components/Container';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

  const pageNumbers = Array.from(Array(nPages + 1).keys());
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Box className={cls.footer}>
      <nav className={cls.nav}>
        <ul className={cls.navList}>
          <li className={cls.arrow}>
            <a className={cls.pageArrow} onClick={goToPrevPage} href="#">
              < FaChevronLeft />
            </a>
          </li>
          {pageNumbers.slice(1).map((pgNumber) => (
            <li key={pgNumber} className={`${cls.pageItem} ${currentPage == pgNumber ? 'active' : ''} `}>
              <a onClick={() => setCurrentPage(pgNumber)} className="page-link" href="#">
                {pgNumber}
              </a>
            </li>
          ))}
          <li className={cls.pageArrow}>
            <a className="page-link" onClick={goToNextPage} href="#">
              <FaChevronRight />
            </a>
          </li>
        </ul>
      </nav>
    </Box>
  );
};