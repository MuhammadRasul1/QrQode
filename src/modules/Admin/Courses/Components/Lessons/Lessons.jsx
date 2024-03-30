import cls from "./styles.module.scss";
// import { Container, Draggable } from 'react-smooth-dnd';
import { AddModal } from "components/AddModal";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl } from "@chakra-ui/react";
import { Inputs } from "components/Input";
import { BtnSubmit } from "components/BtnSubmit";
import DragnDrop from "assets/img/icon/dragndrop.svg";
import { EditIcon } from "@chakra-ui/icons";
import React from 'react';
import DownloadIcon from 'assets/img/icon/download.svg';
import { EditModal } from "components/EditModal";
import { Tooltip } from "@chakra-ui/react";

export const Lessons = ({
  handleUpdateLesson = () => {},
  handleDeleteLesson = () => {},
  setActiveLessonId = () => {},
  activeModuleId = '',
  handleUpdateModule = () => {},
  handleDeleteModule = () => {},
  setActiveModuleId = () => {},
  setOpenItem = () => {},
  openItem,
  isOpenModuleAdd,
  isOpenModuleEdit,
  isOpenLessonAdd,
  isOpenLessonEdit,
  handleOpenModuleAdd = () => {},
  handleCloseModuleAdd = () => {},
  handleOpenModuleEdit = () => {},
  handleCloseModuleEdit = () => {},
  handleOpenLessonAdd = () => {},
  handleCloseLessonAdd = () => {},
  handleOpenLessonEdit = () => {},
  handleCloseLessonEdit = () => {},
  navigate = () => {},
  handleCreateModule = () => {},
  modules = [],
  handleClick = () => {},
  handleDragAndDrop = () => {},
  handleCreateLesson = () => {},
  register = () => {},
  lessons = [],
  handleSubmit = () => {},
  fileInputRef = () => {},
}) => {

  console.log(lessons)

  return (
    <Box className={cls.content}>
      <Box className={cls.wrapperTop}>
        <h2 className={cls.title}>Создать модуль</h2>
        <BtnSubmit
          text="Создать модуль"
          onClick={handleOpenModuleAdd}
        />
      </Box>
      {/* <Container onDrop={handleDragAndDrop}> */}
        {
          modules?.modules?.map((item, index) => (
            // <Draggable key={item?.id}>
              <Accordion 
                key={item?.id}
                defaultIndex={`accordion-${item?.id}`} 
                allowMultiple 
                >
                <AccordionItem>
                  <AccordionButton className={cls.accordionBtn}>
                    <Box className={cls.wrapperTitle} as="span" >
                      <img src={DragnDrop} alt="dragndrop" width="10px" height="10px" />
                      <h3 className={cls.subtitle}>{item?.name}</h3>
                    </Box>
                    <Box className={cls.wrapperBtns}>
                      <Box className={cls.wrapperBtn}>
                        <Tooltip label="Добавить урок">
                          <Button
                            backgroundColor="#23b9a9"
                            color="white"
                            padding="8px"
                            height="40px"
                            onClick={() => {
                              setActiveModuleId(item?.id);
                              handleOpenLessonAdd();
                            }}>
                            +
                          </Button>
                        </Tooltip>
                      </Box>
                      <Box className={cls.wrapperBtn}>
                        <Button
                          width="20px"
                          height="40px"
                          backgroundColor="#eac459"
                          onClick={() => {
                            setActiveModuleId(item?.id);
                            handleOpenModuleEdit();
                          }}
                        >
                          <EditIcon
                            color="black"
                          />
                        </Button>
                      </Box>
                      <Box className={cls.wrapperBtn}>
                        <Button
                          width="20px"
                          height="40px"
                          onClick={() => {
                            activeModuleId ? setActiveModuleId('') : setActiveModuleId(item?.id);
                            e.stopPropagation();
                          }}
                        >
                          <AccordionIcon />
                        </Button>
                      </Box>
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {
                      lessons?.lessons?.map((item) => (
                        // <Draggable key={item?.id}>
                          <Box  className={cls.wrapperBottom}>
                            <Box className={cls.wrapperTitle}>
                              <img src={DragnDrop} alt="dragndrop" width="10px" height="10px" />
                              <h3 className={cls.subtitle}>{item?.title}</h3>
                            </Box>
                            <Box className={cls.wrapperBtn}>
                              <Button
                                width="20px"
                                height="40px"
                                backgroundColor="#eac459"
                                onClick={() => {
                                  setActiveLessonId(item?.id),
                                  handleOpenLessonEdit()
                                  }
                                }
                              >
                                <EditIcon
                                  color="black"
                                />
                              </Button>
                            </Box>
                          </Box>
                        // </Draggable>
                      ))
                    }
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            // </Draggable> 
          ))
        }
      {/* </Container> */}
   

    {/* Modals */}

    {/* CreateModule */}
    <AddModal title="Создать модуль" handleAccept={handleSubmit(handleCreateModule)} register={register} isOpen={isOpenModuleAdd} onClose={handleCloseModuleAdd} >
      <FormControl as='form'>
        <Box className={cls.wrapperInput}>
          <Inputs
            type="text"
            placeholder="Введите название модуля"
            id="name"
            register={register}
            name="name"
         />
       </Box>
      </FormControl>
    </AddModal>
    {/* EditModule */}
    <EditModal title="Изменить модуль" handleDelete={handleDeleteModule} handleAccept={handleSubmit(handleUpdateModule)} register={register} isOpen={isOpenModuleEdit} onClose={handleCloseModuleEdit}>
      <FormControl as='form'>
          <Box className={cls.wrapperInput}>
            <Inputs
            type="text"
            placeholder="Введите название модуля"
            id="name"
            register={register}
            name="name"
          />
        </Box>
      </FormControl>
    </EditModal>

      {/* CreateLesson  */}
    <AddModal title="Создать урок" handleAccept={handleSubmit(handleCreateLesson)} register={register} isOpen={isOpenLessonAdd} onClose={handleCloseLessonAdd} >
      <FormControl as='form'>
        <Box className={cls.wrapperInput}>
          <Inputs
            type="text"
            placeholder="Введите название урока"
            id="title"
            register={register}
            name="title"
          />
        </Box>
        <Box className={cls.wrapperInput}>
          <textarea className={cls.desc} placeholder="Введите описание урока" {...register("description")}  name="description" id="description" cols="10" rows="3"></textarea>
        </Box>
        <Box className={cls.wrapper}>
          <button className={cls.btn} onClick={handleClick} type="button">
            <img src={DownloadIcon} alt="download" width="24px" height="24px" />
            Загрузить файл
          </button>
          <input
            className={cls.fileInput}
            type="file"
            id="file"
            ref={fileInputRef}
            // register={register}
            name="file"
          />
        </Box>
      </FormControl>
    </AddModal>
    {/* EditLesson   */}
    <EditModal title="Изменить модуль" handleDelete={handleDeleteLesson} handleAccept={handleSubmit(handleUpdateLesson)} register={register} isOpen={isOpenLessonEdit} onClose={handleCloseLessonEdit}>
      <FormControl as='form'>
        <Box className={cls.wrapperInput}>
            <Inputs
              type="text"
              placeholder="Введите название урока"
              id="title"
              register={register}
              name="title"
            />
          </Box>
          <Box className={cls.wrapperInput}>
            <textarea className={cls.desc} placeholder="Введите описание урока" {...register("description")}  name="description" id="description" cols="10" rows="3"></textarea>
          </Box>
          <Box className={cls.wrapper}>
            <button className={cls.btn} onClick={handleClick} type="button">
              <img src={DownloadIcon} alt="download" width="24px" height="24px" />
              Загрузить файл
            </button>
            <input
              className={cls.fileInput}
              type="file"
              id="file"
              ref={fileInputRef}
              // register={register}
              name="file"
            />
          </Box>
      </FormControl>
    </EditModal>
    </Box>
  )
}