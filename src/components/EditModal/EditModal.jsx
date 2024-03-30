import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

export const EditModal = ({
    isOpen, 
    onClose,
    title="Изменить данные ученика",
    cancelText = "Отменить",
    submitText = "Изменить",
    handleAccept=() => {},
    DeleteBtn = "Удалить",
    handleDelete = () => {},
    children,
    size,
    }) => {
      
    return (
        <Modal size={size} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxInlineSize={size}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                    {cancelText}
                </Button>
                <Button onClick={handleAccept} backgroundColor="teal" color="white">{submitText}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}