import React, { useEffect, useRef, useState } from "react";
import cls from "./styles.module.scss";
import DownloadIcon from 'assets/img/icon/download.svg';
import { Box, Button } from "@chakra-ui/react";

const UploadFile = ({
  uploadPhoto = () => {},
  handleChange = () => {},
  handleClick = () => {},
  fileInputRef = useRef(null),
  videoUrl = null,
  progress = 0,
}) => {
  // const [id, setId] = useState(null);
  // const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(0);
  // const [videoUrl, setVideoUrl] = useState(null);
  // const fileInputRef = useRef(null);

  // const handleClick = () => {
  //   fileInputRef.current.click();
  // };

  // const handleChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const uploadFile = () => {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   fetch('https://lms-back.nvrbckdown.uz/lms/api/v1/upload', {
  //     method: 'POST',
  //     body: formData,
  //     onUploadProgress: (progressEvent) => {
  //       const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
  //       if (totalLength) {
  //         setProgress(Math.round((progressEvent.loaded * 100) / totalLength));
  //       }
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVideoUrl(data?.url);
  //       setId(data?.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error uploading file: ', error);
  //     });
  // };

  // // Upload file on file change
  // useEffect(() => {
  //   if (file) {
  //     uploadFile();
  //   }
  // }, [file]);

  return (
    <Box className={cls.wrapper}>
      {/* <Box className={cls.wrapperBtn}>
        {videoUrl && (
          <Button onClick={uploadPhoto} backgroundColor="transparent" border="1px solid #CF0000" color="#CF0000" h="30px">Удалить</Button>
        )}
      </Box> */}
      {progress > 0 && <p>Progress: {progress}%</p>}
      {!videoUrl && (
        <Box className={cls.btnWrapper}>
          <button
            className={cls.btn}
            onClick={handleClick}
            type="button"
            >
            <img src={DownloadIcon} alt="download" width="24px" height="24px" />
            Загрузить фото
          </button>
          <input
            className={cls.fileInput}
            type="file"
            id="file"
            ref={fileInputRef}
            name="file"
            onChange={handleChange}
          />
      </Box>
      )}
      {videoUrl && (
        <Box className={cls.videoWrapper}>
          <img src={videoUrl} alt="uploaded" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      )}
    </Box>
  );
};

export default UploadFile;
