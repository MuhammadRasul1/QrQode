import { useEffect, useState } from "react";
import cls from "./styles.module.scss";
import DownloadImg from "assets/img/icon/download.svg";

export const BtnDownload = ({
    download = () => {},
}) => {

    const [file, setFile] = useState()

    useEffect(() => {
      fetch("https://lms-vuny.onrender.com/lms/api/v1/excel/courses")
          .then((res) => {
            return res.blob()
          })
          .then((data) => setFile(data))
    }, [])

    return (
        <a className={cls.btnDownload} href={file} download={"courses.xlsx"}>
            <img src={DownloadImg} alt="Download" width={20} height={20} />
        </a> 
    );
}