import React from 'react';
import { Modal } from 'react-bootstrap';
import cls from "./styles.module.scss";
import { Box } from '@chakra-ui/react';

const DotsModal = ({ isOpen, handleClose }) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className={cls.modal}
        overlayClassName={cls.overlay}
      >
        <h2>Модальное окно с иконкой трех точек</h2>
        <p>Содержимое модального окна</p>
        <button onClick={handleClose}>Закрыть</button>
      </Modal>

    );
};

export default DotsModal;