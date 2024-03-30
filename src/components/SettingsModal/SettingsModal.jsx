import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

export const SettingsModal = ({
  isOpen,
  onClose,
  btnText2 = "Отменить",
  btnText3 = "Сохранить",
  callback,
  children,
  title,
} ) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minBlockSize={370} maxInlineSize={570}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter display="flex" alignItems="center" justifyContent="flex-end">
          <Box>
            <Button mr={3} onClick={onClose}>{btnText2}</Button>
            <Button colorScheme='blue' onClick={callback}>{btnText3}</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
