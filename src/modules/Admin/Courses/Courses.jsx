import cls from './styles.module.scss';
import { Box, FormControl, Select, Textarea } from '@chakra-ui/react';
import { CustomTable } from 'components/CustomTable';
import { Pagination } from 'components/Pagination';
import { AddModal } from 'components/AddModal';
import { Header } from 'components/Header';
import { CoursesInput } from './Components/CoursesInput';
import { useCoursesProps } from './useCoursesProps';
import UploadFile from 'components/UploadFile/UploadFile';

export const Courses = () => {
  const {
    uploadPhoto,
    handleChange,
    handleClick,
    fileInputRef,
    videoUrl,
    progress,
    register,
    categories,
    currentPage,
    nPages,
    setCurrentPage,
    isOpen,
    handleClose,
    handleOpen,
    columns,
    data,
    handleSubmit,
    onSubmit,
    onChange,
    mentors,
  } = useCoursesProps();

  console.log(mentors)

  return (
    <Box className={cls.content}>
      <Header
        title="Курсы"
        onOpen={handleOpen}
        isOpen={isOpen}
        onClose={handleClose}
        onChange={onChange}
        handleAccept={handleSubmit(onSubmit)}
        register={register}
      />
      <Box className={cls.table}>
        <CustomTable columns={columns} data={data} />
      </Box>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Modals */}
      <AddModal
        size="xl"
        title="Создать курс"
        handleAccept={handleSubmit(onSubmit)}
        register={register}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <FormControl as="form">
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="description">Загрузить фото</label>
            <UploadFile 
              uploadPhoto={uploadPhoto}
              handleChange={handleChange}
              handleClick={handleClick}
              fileInputRef={fileInputRef}
              videoUrl={videoUrl}
              progress={progress}
            />
          </Box>
          <CoursesInput
            label="Название курса"
            id="name"
            placeholder="Введите Название курса"
            type="text"
            register={register}
            name="name"
            required
          />
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="description">
              Описание
            </label>
            <Textarea
              className={cls.input}
              {...register('description')}
              id="description"
              cols="10"
              rows="2"
              placeholder="Введите описание"
            />
          </Box>
          <Box className={cls.wrapper}>
            <label className={cls.label} htmlFor="type">
              Категории
            </label>
            <select className={cls.input} {...register('category_id')} id="">
              {categories?.category?.map((category) => (
                <option key={category?.id} value={category?.id}>
                  {category?.name}
                </option>
              ))}
              {/* <option value="">
                <button>+ Добавить</button>
              </option> */}
            </select>
          </Box>
          <CoursesInput
            label="Длительность курса:(мес)"
            id="duration"
            placeholder="Введите длительность курса(мес)"
            type="number"
            register={register}
            name="duration"
            required
          />
          <CoursesInput
            label="Cколько раз в неделю:"
            id="weekly_number"
            placeholder="Cколько раз в неделю"
            type="number"
            register={register}
            name="weekly_number"
            required
          />
          <CoursesInput
            label="Cколько часов в неделю"
            id="duration"
            placeholder="Cколько часов в неделю "
            type="number"
            register={register}
            name="duration"
            required
          />
          <CoursesInput
            label="Сумма курса за месяц "
            id="price"
            placeholder="Сумма курса за месяц "
            type="number"
            register={register}
            name="price"
            required
          />
        </FormControl>
      </AddModal>
    </Box>
  );
};
