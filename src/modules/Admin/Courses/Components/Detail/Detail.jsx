import { Box, Button, FormControl, Textarea } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CoursesInput } from "../CoursesInput";
import DownloadIcon from 'assets/img/icon/download.svg';
import UploadFile from "components/UploadFile/UploadFile";

export const Detail = ({
    uploadPhoto ,
    handleChange = () => {},
    videoUrl ,
    progress,
    categories ,
    fileInputRef,
    handleClick = () => {},
    handleDeleteCourse = () => {},
    handleUpdate = () => {},
    register = () => {},
}) => {
  
    return (
        <FormControl className={cls.form} as="form">
            <Box className={cls.wrapper}>
                {/* <h1 className={cls.title}>Детали</h1> */}
                <Box className={cls.content}>
                    <Box className={cls.wrapperInput}>
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
                    <Box className={cls.wrapperInput}>
                        <label className={cls.label} htmlFor="description">Описание</label>
                        <Textarea
                            className={cls.input}
                            {...register('description')}
                            id="description"
                            cols="10"
                            rows="2"
                            placeholder="Введите описание"
                        />
                    </Box>
                    <Box className={cls.wrapperInput}>
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
                        label="Cколько раз в неделю:"
                        id="weekly_number"
                        placeholder="Cколько раз в неделю"
                        type="number"
                        register={register}
                        name="weekly_number"
                        required
                    />
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
                </Box>
            </Box>
            <Box className={cls.wrapperBottom}>
                <Box>
                    {/* <Button mr={3} onClick={handleDeleteCourse} colorScheme='red' size='md'>
                        Удалить
                    </Button> */}
                    <Button onClick={handleDeleteCourse} colorScheme='red' variant='outline' size='md'>
                        Удалить
                    </Button>
                </Box>
                <Button onClick={handleUpdate}  backgroundColor="teal" color="white">
                    Изменить
                </Button>
            </Box>
        </FormControl>
    )
}