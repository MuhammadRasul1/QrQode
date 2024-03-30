import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { useRef } from "react";
import cls from "./styles.module.scss"
import { Container } from "components/Container";
import { useForm } from "react-hook-form";
import DownloadIcon from 'assets/img/icon/download.svg'

export const LessonsDetail = () => {
    const param = useParams();
    console.log(param)

    const { 
        register,
        handleSubmit, 
        reset 
    } = useForm();

    const fileInputRef = useRef(null); 

    const handleClick = () => {
      fileInputRef.current.click(); 
    };
    return (
        <Box>
            <Header title={param.id}/>
            <Container >
                <Box className={cls.wrapper}>
                    <Box>
                        <Box className={cls.wrapperInput}>
                            <label className={cls.label} htmlFor="title">Название курса</label>
                            <input
                                className={cls.input} 
                                type="text" 
                                id="title" 
                                register={register}
                                name="title" 
                                placeholder="Введите заголовок"  
                            />
                        </Box>
                        <Box className={cls.wrapperInput}>
                            <label className={cls.label} htmlFor="description">Описание</label>
                            <textarea 
                                className={cls.input}
                                columns="30"
                                rows="10"
                                id="description" 
                                register={register}
                                name="description" 
                                placeholder="Введите описание курса"  
                            />
                        </Box>
                    </Box>
                    <Box className={cls.wrapperRight}>
                        <button className={cls.btn} onClick={handleClick} type="button">
                            <img src={DownloadIcon} alt="donwload" width="48px" height="48px"/> 
                            Загрузить файл
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className={cls.fileInput} 
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                    </Box>
                </Box>  
            </Container>
        </Box>
    )
}