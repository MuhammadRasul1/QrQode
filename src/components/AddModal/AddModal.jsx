import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
export const AddModal = ({
    isOpen, 
    onClose = () => {},
    title="Добавить",
    cancelText = "Отменить",
    text = "Отправить",
    handleAccept = () => {}, 
    size,
    children
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
                <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>{cancelText}</Button>
                <Button onClick={handleAccept} type="submit" backgroundColor="#0067F4" color="white">{text}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}