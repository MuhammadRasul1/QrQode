import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
export const DeleteModal = ({
    isOpen, 
    onClose,
    title="Удалить данные",
    cancelText = "Отменить",
    DeleteBtn = "Удалить",
    handleDelete = () => {},
    children
    }) => {
      
    return (
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader borderBottom="1px solid #7E807E">{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p className={cls.text}>Внимание: будут удалены все связанные элементы!</p>
                {children}
            </ModalBody>
            <ModalFooter borderTop="1px solid #7E807E" marginTop="20px">
                <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                    {cancelText}
                </Button>
                <Button onClick={handleDelete} backgroundColor="transparent" border="1px solid #CF0000" color="#CF0000">{DeleteBtn}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}