import {  Box, FormControl} from "@chakra-ui/react"
import { AddModal } from "components/AddModal"
import { CustomTable } from "components/CustomTable"
import { DeleteModal } from "components/DeleteModal"
import { EditModal } from "components/EditModal"
import { Inputs } from "components/Input"
import { Pagination } from "components/Pagination"
import { SecondHeader } from "components/SecondHeader"
import { useRoomsProps } from "./useRoomsProps"
import cls from "./styles.module.scss"

export const Rooms = () => {

    const {
        activeRoom,
        handleOpen,
        nPages,
        currentPage,
        setCurrentPage, 
        isOpen, 
        isOpenEdit,
        isOpenDelete,
        handleEditClose,
        handleDeleteClose,
        handleClose, 
        columns, 
        data,
        handleSubmit,
        handleCreateRoom,
        handleUpdateRoom, 
        handleDeleteRoom,
        register,
    } = useRoomsProps();

    return (
        <Box className={cls.content}>
            <SecondHeader 
                title="Кабинет"
                onOpen={handleOpen}
                isOpen={isOpen}
                onClose={handleClose}
                register={register}
            />
            <Box className={cls.contentWrapper}>
                <CustomTable columns={columns} data={data} />
            </Box>
            <Pagination 
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {/*  Modals  */}
            <AddModal title="Создать кабинет" handleAccept={handleSubmit(handleCreateRoom)} register={register} isOpen={isOpen} onClose={handleClose} >
                <FormControl as='form'>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Номер кабинета"
                            register={register}
                            name="name"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Вместимость" 
                            register={register}
                            name="capacity"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Площадь(м2)" 
                            register={register}
                            name="area"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Арендная плата(сумм)" 
                            register={register}
                            name="sum_of_room"  
                        />
                    </Box>
                </FormControl>
            </AddModal>
            <EditModal title="Изменение данные кабинета" handleAccept={handleSubmit(handleUpdateRoom)} isOpen={isOpenEdit} register={register} onClose={handleEditClose}>
                <FormControl  as='form'>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Номер кабинета"
                            register={register}
                            name="name"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Вместимость" 
                            register={register}
                            name="capacity"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Площадь(м2)" 
                            register={register}
                            name="area"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Арендная плата(сумм)" 
                            register={register}
                            name="sum_of_room"  
                        />
                    </Box>
                </FormControl>
            </EditModal>
            <DeleteModal title="Удалить данные ученика" handleDelete={handleDeleteRoom} isOpen={isOpenDelete} register={register} onClose={handleDeleteClose}>
                <ul className={cls.infoList}>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Номер кабинета</span>
                        <p>{activeRoom?.name}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Вместимость</span>
                        <p>{activeRoom?.capacity}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Площадь(м2)</span>
                        <p>{activeRoom?.area}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Арендная плата(сумм)</span>
                        <p>{activeRoom?.sum_of_room}</p>      
                    </li>
                </ul>
            </DeleteModal>
        </Box>
    )
}