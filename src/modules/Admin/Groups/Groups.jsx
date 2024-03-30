import { Box, FormControl, Select, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useGroupsProps } from "./useGroupsProps"
import { Header } from "components/Header"
import { CustomTable } from "components/CustomTable"
import { DeleteModal } from "components/DeleteModal"
import { Inputs } from "components/Input"
import { EditModal } from "components/EditModal"
import { AddModal } from "components/AddModal"
import cls from "./styles.module.scss"
import { Pagination } from "components/Pagination"
import { DynamicOption } from "./Components/DynamicOption"
import Selects from 'react-select'  

export const Groups = () => {

  const {
    animatedComponents,
    options,
    rooms,
    dataAllGroups,
    groupsId,
    activeCourse,
    setState,
    mentors,
    courses,
    activeGroup,
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
    handleCreateGroup,
    handleUpdateGroup, 
    handleDeleteGroup,
    register,
  } = useGroupsProps()
  console.log(groupsId)
  return (
    <Box className={cls.content}>
      <Header
        title="Группы"
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        // onChange={onChange}
        handleAccept={handleSubmit(handleCreateGroup)}
        register={register}
      />
      <Tabs className={cls.table}>
        <TabList>
          <Tab onClick={() => setState((prev) => ({ ...prev, activeCourse: null}))}>Все группы ({groups?.count})</Tab>
          {courses?.courses?.map((course, index) => (
            <Tab key={index} onClick={() => setState((prev) => ({ ...prev, activeCourse: course?.id}))}>{course?.name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel p={4} >
            <CustomTable columns={columns} data={dataAllGroups} />
          </TabPanel>
          {
            courses?.courses?.map((group, index) => (
              <TabPanel p={4} key={index}>
                <CustomTable columns={columns} data={data} />
              </TabPanel>
            ))
          }
        </TabPanels>
      </Tabs>
      
      {/*  Modals  */}
      <AddModal title="Создать группу" handleAccept={handleSubmit(handleCreateGroup)} register={register} size="760" isOpen={isOpen} onClose={handleClose} >
        <FormControl className={cls.formModal} as='form'>
          <Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="name">Название группы</label>
              <Inputs
                register={register}
                id="name"
                name="name"  
                type="text" 
                placeholder=" Название группы" 
              />
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="type">Выберите тип курса</label>
              <Select {...register('type')} id="type">
                <option value={'Offline'}>Offline</option>
                <option value={'Online'}>Online</option>
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="start_date">Дата начала группы</label>
              <Inputs
                register={register}
                id="start_date"
                name="start_date" 
                type="date" 
                placeholder="Дата начала" 
              />   
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="days">Выберите Дни</label>
              <Selects
                // {...register('days')}
                isMulti
                id="days"
                className={cls.dynamicSelect}
                components={animatedComponents}
                options={options}
                isClearable={true}
                isSearchable={true}
                isDisabled={false}
                isLoading={false}
                isRtl={false} 
              />
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="start_time">Время начала</label>
              <Inputs
                register={register}
                name="start_time"  
                id="start_time"
                type="time" 
                placeholder="Введите время начало" 
              />
            </Box>
          </Box>

          <Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="course_id">Выберите курс</label>
              <Select {...register('course_id')} id="course_id">
                {courses?.courses?.map((course, index) => {
                  return (
                    <option key={index} value={course?.id}>
                      {course?.name}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="course_id">Выберите ментора</label>
              <Select {...register('teacher_id')}>
                {/* <option value="" disabled selected>Менторы</option> */}
                {mentors?.users?.map((mentor, index) => (
                  <option key={index} value={mentor?.id}>
                    {mentor?.first_name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="end_date">Дата окончания группы</label>
              <Inputs
                // register={register}
                id="end_date"
                name="end_date" 
                type="date" 
                placeholder="Дата окончание" 
              />   
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="course_id">Кабинет</label>
              <Select {...register('room_id')}>
                {rooms?.rooms?.map((room, index) => (
                  <option key={index} value={room?.id}>
                    {room?.name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="end_time">Время окончание</label>
              <Inputs
                register={register}
                name="end_time"
                id="end_time"  
                type="time" 
                placeholder="Введите время окончание" 
              />
            </Box>
            {/* <Box className={cls.wrapper}>
              <Select {...register('teacher_id')}>
                <option value="" disabled selected>Ассистенты</option>
                {mentors?.users?.map((mentor, index) => (
                  <option key={index} value={mentor?.id}>
                    {mentor?.first_name}
                  </option>
                ))}
              </Select>
            </Box> */}
          </Box>
        </FormControl>
      </AddModal>

      <EditModal size="720px" title="Изменение данные ученика" handleAccept={handleSubmit(handleUpdateGroup)} isOpen={isOpenEdit} register={register} onClose={handleEditClose}>
        <FormControl className={cls.formModal} as='form'>
          <Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="name">Название группы</label>
              <Inputs
                register={register}
                id="name"
                name="name"  
                type="text" 
                placeholder=" Название группы" 
              />
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="type">Выберите тип курса</label>
              <Select {...register('type')} id="type">
                <option value={'Offline'}>Offline</option>
                <option value={'Online'}>Online</option>
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="start_date">Дата начала группы</label>
              <Inputs
                register={register}
                id="start_date"
                name="start_date" 
                type="date" 
                placeholder="Дата начала" 
              />   
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="days">Выберите Дни</label>
              <Selects
                // {...register('days')}
                isMulti
                id="days"
                className={cls.dynamicSelect}
                components={animatedComponents}
                options={options}
                isClearable={true}
                isSearchable={true}
                isDisabled={false}
                isLoading={false}
                isRtl={false} 
              />
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="start_time">Время начала</label>
              <Inputs
                register={register}
                name="start_time"  
                id="start_time"
                type="time" 
                placeholder="Введите время начало" 
              />
            </Box>
          </Box>

          <Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="course_id">Выберите курс</label>
              <Select {...register('course_id')} id="course_id">
                {courses?.courses?.map((course, index) => {
                  return (
                    <option key={index} value={course?.id}>
                      {course?.name}
                    </option>
                  );
                })}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="course_id">Выберите ментора</label>
              <Select {...register('teacher_id')}>
                {/* <option value="" disabled selected>Менторы</option> */}
                {mentors?.users?.map((mentor, index) => (
                  <option key={index} value={mentor?.id}>
                    {mentor?.first_name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="end_date">Дата окончания группы</label>
              <Inputs
                register={register}
                id="end_date"
                name="end_date" 
                type="date" 
                placeholder="Дата окончание" 
              />   
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="room_id">Кабинет</label>
              <Select {...register('room_id')} id="room_id">
                {rooms?.rooms?.map((room, index) => (
                  <option key={index} value={room?.id}>
                    {room?.name}
                  </option>
                ))}
              </Select>
            </Box>
            <Box className={cls.wrapper}>
              <label className={cls.label} htmlFor="end_time">Время окончание</label>
              <Inputs
                register={register}
                name="end_time"
                id="end_time"  
                type="time" 
                placeholder="Введите время окончание" 
              />
            </Box>
            {/* <Box className={cls.wrapper}>
              <Select {...register('teacher_id')}>
                <option value="" disabled selected>Ассистенты</option>
                {mentors?.users?.map((mentor, index) => (
                  <option key={index} value={mentor?.id}>
                    {mentor?.first_name}
                  </option>
                ))}
              </Select>
            </Box> */}
          </Box>
        </FormControl>
      </EditModal>
      <DeleteModal title="Удалить данные ученика" handleDelete={handleDeleteGroup} isOpen={isOpenDelete} register={register} onClose={handleDeleteClose}>
        <ul className={cls.infoList}>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Название группы</span>
            <p>{activeGroup?.name}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Название курса</span>
            <p>{activeGroup?.course_name}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Тип курса</span>
            <p>{activeGroup?.type}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Ментор</span>
            <p>{activeGroup?.teacher_name}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Дата начала группы</span>
            <p>{activeGroup?.start_date}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Дата окончание</span>
            <p>{activeGroup?.end_date}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Дни</span>
            <p>{activeGroup?.days}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Номер кабинета</span>
            <p>{activeGroup?.room_number}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Время начала</span>
            <p>{activeGroup?.start_time}</p>      
          </li>
          <li className={cls.infoItem}>
            <span className={cls.infoText}>Время окончание</span>
            <p>{activeGroup?.end_time}</p>      
          </li>
        </ul>
      </DeleteModal>
    </Box>
  )
}