import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { EditModal } from "components/EditModal";
import { Inputs } from "components/Input";
import { useMentorsProps } from "./useMentorsProps";
import { Pagination } from "components/Pagination";
import { AddModal } from "components/AddModal";
import SearchImg from "assets/img/icon/search.svg";
import { DeleteModal} from "components/DeleteModal";
import { SecondHeader } from "components/SecondHeader";
import FilterImg from "assets/img/icon/filter.svg";

export const Mentors = () => {

  const {
    onChange,
    activeUser,
    handleOpen,
    groups,
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
    onSubmit,
    handleUpdateUser, 
    handleDeleteUser,
    register,
  } = useMentorsProps()
  console.log(groups)

  return(
    <Box className={cls.content}>
      <SecondHeader
        title="Менторы" 
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        register={register}
      />
      <Box className={cls.wrapperContent}>
        
        <Box className={cls.wrapperFilter}>
          <Box className={cls.wrapperSearch}>
            <img src={SearchImg} alt="search" width={18} height={18} />
            <input className={cls.input} 
              type="search"
              name="search"
              id="search" 
              onChange={onChange}
              aria-label="search" 
              placeholder="Поиск"
            />
          </Box>
          <Box className={cls.filter}>
              <img src={FilterImg} alt="filter" width={20} height={20} />
              <select className={cls.filterSelect} name="filter" id="filter">
                <option value="" disabled selected>Фильтры</option>
                <option value="A-Z">A-Z</option>
                <option value="a-z">a-z</option>
              </select>
          </Box>
        </Box>
        <Box className={cls.table}>
          <CustomTable columns={columns} data={data} />
        </Box>
        <Pagination 
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>

      {/*  Modals  */}
      <AddModal title="Регистрация ментора" handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={handleClose} >
      <FormControl as='form'>
          <Box className={cls.wrapper}>
            <Inputs
              type="text"
              placeholder="Имя"
              register={register}
              name="first_name"  
            />
          </Box>
          <Box className={cls.wrapper}>
            <Inputs
              type="text"
              placeholder="Фамилия"
              register={register}
              name="last_name"  
            />
          </Box>
          <Box className={cls.wrapper}>
            <Select name="gender" id="gender" className={cls.select} {...register("gender")}>
              {/* <option value="" disabled selected>Пол</option> */}
              <option value="Мужчина">Мужской</option>
              <option value="Женщина">Женский</option>
            </Select>
          </Box>
          <Box className={cls.wrapper}>
            <Inputs
              type="date"
              placeholder="Дата рождения"
              register={register}
              name="birthday" 
            />
          </Box>
          <Box className={cls.wrapper}>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon>
                  +998
                </InputLeftAddon>
                <Input
                  type="number"
                  placeholder="Номер телефона"
                  {...register("phone_number")}
                  maxLength="9"
                />
              </InputGroup>
            </Stack>
          </Box>
          <Box className={cls.wrapper}>
            <Select {...register('group_id')}>
              {/* <option value="" disabled selected>Группы</option> */}
              {groups?.groups?.map((item, index) => {
                return (
                  <option key={index} value={item?.id}>
                    {item?.name}
                  </option>
                );
              })}
            </Select>
          </Box>
          <Box className={cls.wrapper}>
            <Textarea
              className={cls.select}
              {...register("comment")}
              id="comment"
              cols="10"
              rows="4"
              placeholder="Комментарий"
            />
          </Box>
          {/* <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border="1px solid #E5E9EB" borderRadius="8px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Добавить родители 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */}
        </FormControl>
      </AddModal>
      <EditModal title="Изменение данные ментора" handleAccept={handleSubmit(handleUpdateUser)} isOpen={isOpenEdit} register={register} onClose={handleEditClose}>
      <FormControl as='form'>
          <Box className={cls.wrapper}>
            <Inputs
              type="text"
              placeholder="Имя"
              register={register}
              name="first_name"  
            />
          </Box>
          <Box className={cls.wrapper}>
            <Inputs
              type="text"
              placeholder="Фамилия"
              register={register}
              name="last_name"  
            />
          </Box>
          <Box className={cls.wrapper}>
            <Select name="gender" id="gender" className={cls.select} {...register("gender")}>
              {/* <option value="" disabled selected>Пол</option> */}
              <option value="Мужчина">Мужской</option>
              <option value="Женщина">Женский</option>
            </Select>
          </Box>
          <Box className={cls.wrapper}>
            <Inputs
              type="date"
              placeholder="Дата рождения"
              register={register}
              name="birthday" 
            />
          </Box>
          <Box className={cls.wrapper}>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftAddon>
                  +998
                </InputLeftAddon>
                <Input
                  type="number"
                  placeholder="Номер телефона"
                  {...register("phone_number")}
                  maxLength="9"
                />
              </InputGroup>
            </Stack>
          </Box>
          <Box className={cls.wrapper}>
            <Select {...register('group_id')}>
              {/* <option value="" disabled selected>Группы</option> */}
              {groups?.groups?.map((item, index) => {
                return (
                  <option key={index} value={item?.id}>
                    {item?.name}
                  </option>
                );
              })}
            </Select>
          </Box>
          <Box className={cls.wrapper}>
            <Textarea
              className={cls.select}
              {...register("comment")}
              id="comment"
              cols="10"
              rows="4"
              placeholder="Комментарий"
            />
          </Box>
          {/* <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border="1px solid #E5E9EB" borderRadius="8px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Добавить родители 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */}
        </FormControl>
      </EditModal>
      <DeleteModal title="Удалить данные ученика" handleDelete={handleDeleteUser} isOpen={isOpenDelete} register={register} onClose={handleDeleteClose}>
        <ul className={cls.infoList}>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Имя</span>
            <p>{activeUser?.first_name}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Фамилия</span>
            <p>{activeUser?.last_name}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Пол</span>
            <p>{activeUser?.gender}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Дата рождения</span>
            <p>{activeUser?.birthday}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Номер телефона</span>
            <p>{activeUser?.phone_number}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Коментарий</span>
            <p>{activeUser?.comment}</p>      
          </li>
        </ul>
      </DeleteModal>
    </Box>
  ) 
}