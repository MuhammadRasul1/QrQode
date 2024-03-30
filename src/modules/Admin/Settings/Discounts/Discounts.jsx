import {  Box, FormControl, Select} from "@chakra-ui/react"
import { AddModal } from "components/AddModal"
import { CustomTable } from "components/CustomTable"
import { DeleteModal } from "components/DeleteModal"
import { EditModal } from "components/EditModal"
import { Inputs } from "components/Input"
import { Pagination } from "components/Pagination"
import { SecondHeader } from "components/SecondHeader"
import cls from "./styles.module.scss"
import { useDiscountsProps } from "./useDiscountsProps"


export const Discounts = () => {

    const {
        activeDiscount,
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
        handleCreateDiscount,
        handleUpdateDiscount, 
        handleDeleteDiscount,
        register,
    } = useDiscountsProps();

    return (
        <Box className={cls.content}>
            <SecondHeader 
                title="Скидки"
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
            <AddModal title="Добавить скидку" handleAccept={handleSubmit(handleCreateDiscount)} register={register} isOpen={isOpen} onClose={handleClose} >
                <FormControl as='form'>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="text"
                            placeholder="Название"
                            register={register}
                            name="name"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Select className={cls.select} {...register("type")}>
                            <option value="" disabled selected>Тип</option>
                            <option value="Фиксированная">Фиксированная</option>
                            <option value="Процент">Процент</option>
                        </Select>
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Процент скидки" 
                            register={register}
                            name="amount"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Применение" 
                            register={register}
                            name="usage"  
                        />
                    </Box>
                </FormControl>
            </AddModal>
            <EditModal title="Изменение данные ученика" handleAccept={handleSubmit(handleUpdateDiscount)} isOpen={isOpenEdit} register={register} onClose={handleEditClose}>
                <FormControl  as='form'>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="text"
                            placeholder="Название"
                            register={register}
                            name="name"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Select className={cls.select} {...register("type")}>
                            <option value="" disabled selected>Тип</option>
                            <option value="Фиксированная">Фиксированная</option>
                            <option value="Процент">Процент</option>
                        </Select>
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Процент скидки" 
                            register={register}
                            name="amount"  
                        />
                    </Box>
                    <Box className={cls.wrapper}>
                        <Inputs
                            type="number"
                            placeholder="Применение" 
                            register={register}
                            name="usage"  
                        />
                    </Box>
                </FormControl>
            </EditModal>
            <DeleteModal title="Удалить данные ученика" handleDelete={handleDeleteDiscount} isOpen={isOpenDelete} register={register} onClose={handleDeleteClose}>
                <ul className={cls.infoList}>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Название</span>
                        <p>{activeDiscount?.name}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Тип</span>
                        <p>{activeDiscount?.type}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Процент %</span>
                        <p>{activeDiscount?.amount}</p>      
                    </li>
                    <li className={cls.infoItem}>
                        <span className={cls.infoText}>Применение</span>
                        <p>{activeDiscount?.usage}</p>      
                    </li>
                </ul>
            </DeleteModal>
        </Box>
    )
}