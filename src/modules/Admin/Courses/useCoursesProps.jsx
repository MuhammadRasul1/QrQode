import { useNavigate } from 'react-router-dom';
import { Box, Button, useToast } from '@chakra-ui/react';
import { useCreateCourse, useGetCourses, useGetSearchCourse, useUploadPhoto } from 'services/courses.service';
import { useForm } from 'react-hook-form';
import React, { useEffect, useRef, useState } from 'react';
import { useGetCategories } from 'services/category.service';
import { useGetMentors } from 'services/users.service';
import EditIcon from "assets/img/icon/EditIcon.svg";

export const useCoursesProps = () => {
  const [id, setId] = useState(null);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [state, setState] = useState({
    courseSearch: '',
    currentPage: 1,
    recordsPerPage: 10,
  });

  const { courseSearch, currentPage, recordsPerPage } = state;

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true), reset(); };
  const handleClose = () => { setOpen(false), reset();};

  const getCourses = useGetSearchCourse({ search: courseSearch });
  const { data: courses, refetch } = useGetCourses();  

  const { data: mentors } = useGetMentors();
  
  const onChange = (e) => setState((prev) => ({ ...prev, courseSearch: e.target.value }));

  const { mutate: createCourse } = useCreateCourse();

  const onSubmit = (res) => {
    createCourse(
      {
        ...res,
        photo: id,
        duration: res?.duration - 0,
        weekly_number: res?.weekly_number - 0,
        price: res?.price - 0,
      },
      {
        onSuccess: () => {
          handleClose();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно добавили курс',
            status: 'success',
          });
        },
        onError: (error) => {
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: error?.response?.data,
            status: 'error',
          });
        },
      },
    );
  };

  // const { mutate: upload } = useUploadPhoto();
  // const uploadPhoto = () => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  
  //   upload(
  //     formData,
  //     {
  //       onUploadProgress: (progressEvent) => {
  //         const { loaded, total } = progressEvent;
  //         let percent = Math.floor((loaded * 100) / total);
  //         setProgress(percent);
  //       },
  //       onSuccess: (res) => {
  //         setVideoUrl(res?.url);
  //         setId(res?.id);
  //       },
  //       onError: (error) => {
  //         toast({
  //           position: 'top center',
  //           duration: 3000,
  //           isClosable: true,
  //           title: error?.response?.data,
  //           status: 'error',
  //         });
  //       },
  //     },
  //   );
  // };

  // useEffect(() => {
  //   if (file) {
  //     uploadPhoto();
  //   }
  // }, [file]);
  const uploadPhoto = () => {
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('https://lms-back.nvrbckdown.uz/lms/api/v1/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
          if (totalLength) {
            setProgress(Math.round((progressEvent.loaded * 100) / totalLength));
          }
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setVideoUrl(data?.url);
          setId(data?.id);
        })
        .catch((error) => {
          console.error('Error uploading file: ', error);
        });
    };
  
    // Upload file on file change
    useEffect(() => {
      if (file) {
        uploadPhoto();
      }
    }, [file]);

  const columns = [
    { title: '№', dataIndex: 'number', key: 'number', width: 88 },
    { title: 'Название курса', dataIndex: 'name', key: 'name', width: 420 },
    { title: 'Описание', dataIndex: 'description', key: 'description', width: 410 },
    { title: 'Длительность курса:(мес)', dataIndex: 'duration', key: 'duration', width: 370 },
    { title: 'Cколько часов в неделю', dataIndex: 'duration', key: 'duration', width: 400 },
    { title: 'Цена(месяц)', dataIndex: 'price', key: 'price', width: 324 },
    {
      title: '',
      key: 'operations',
      render: (item) => (
        <Box>
          <Button
            width="24px"
            padding="3px"
            borderRadius="6px"
            backgroundColor="#E9E9E9" 
            _hover={{ background: "#9a9797" }}
            onClick={() => navigate(`/admin/courses/${item?.id}`)}
          >
            <img src={EditIcon} alt="edit" width="18px" height="18px" />
          </Button>
        </Box>
      ),
    },
  ];

  const currentRecords = React.useMemo(
    () => courses?.courses?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage),
    [courses, currentPage, recordsPerPage],
  );

  const data = React.useMemo(
    () =>
      getCourses?.data?.courses?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [getCourses],
  );

  const { data: categories, refetch: refetchCategories } = useGetCategories();

  return {
    uploadPhoto,
    handleChange,
    fileInputRef,
    videoUrl,
    progress,
    mentors,
    register,
    categories,
    handleClick,
    onChange,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    currentPage,
    nPages: Math.ceil(courses?.count / recordsPerPage) || 1,
    isOpen,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    onSubmit,
    columns,
    data,
  };
};
