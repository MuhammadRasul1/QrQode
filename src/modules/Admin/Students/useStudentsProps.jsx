import { Box, Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDeleteUserById, useGetUserById, useUpdateUserById, useCreateUser, useGetStudents, useGetSearchStudents } from 'services/users.service';
import AllStudent from "assets/img/icon/allStudent.svg";
import NewStudent from "assets/img/icon/newStudent.svg";
import Price from "assets/img/icon/priceProduct.svg";
import EditIcon from "assets/img/icon/EditIcon.svg";
import DeleteIcon from "assets/img/icon/deleteIcon.svg";
import { useGetGroups } from 'services/groups.service';
import { Link, useNavigate } from 'react-router-dom';
import cls from "./styles.module.scss"

export const useStudentsProps = () => {

  const navigate = useNavigate()

  const auth = JSON.parse(localStorage.getItem("auth"))

  const [state, setState] = useState({
    studentSearch: '',
    isOpen: false,
    isOpenGroup: false,
    isOpenEdit: false,
    isOpenDelete: false,
    currentPage: 1,
    recordsPerPage: 10,
  });

  const [activeUserId, setActiveUserId] = useState('');
  const [activeUser, setActiveUser] = useState('');
  const { isOpenGroup, studentSearch, isOpen, isOpenEdit, isOpenDelete, currentPage, recordsPerPage } = state;

  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleOpenGroup = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleOpenEdit = () => setState((prev) => ({ ...prev, isOpenEdit: true }));
  const handleOpenDelete = () => setState((prev) => ({ ...prev, isOpenDelete: true }));
  const handleClose = () => { setState((prev) => ({ ...prev, isOpen: false })); reset(); };
  const handleCloseGroup = () => { setState((prev) => ({ ...prev, isOpenGroup: false })); reset(); };
  const handleEditClose = () => { setState((prev) => ({ ...prev, isOpenEdit: false })); reset(); };
  const handleDeleteClose = () => { setState((prev) => ({ ...prev, isOpenDelete: false })); reset(); };

  const { data: students, refetch } = useGetStudents();
  const { data: groups } = useGetGroups();
  const { data: getStudents } = useGetSearchStudents({ search: studentSearch });
  const onChange = (e) => setState((prev) => ({ ...prev, studentSearch: e.target.value }));

  const nPages = Math.ceil(students?.count / recordsPerPage) || 1;
  const currentRecords = students?.users?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const { data: getUserById, isSuccess } = useGetUserById({ userId: activeUserId });

  const { mutate: createUser } = useCreateUser();

  const onSubmit = (data) => {
    createUser(
      {
        user_type: 'Student',
        branch_id: auth?.userData?.data?.branch_id,
        ...data,
      },
      {
        onSuccess: () => {
          handleClose();
          reset();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно добавили пользователя',
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
      }
    );
  };

  const { mutate: updateUser } = useUpdateUserById();

  const handleUpdateUser = (data) => {
    updateUser(
      {
        ...data,
        id: activeUserId,
        branch_id: auth?.userData?.data?.branch_id,
      },
      {
        onSuccess: () => {
          refetch();
          handleEditClose();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно изменили данные пользователя',
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
      }
    );
  };

  const { mutate: deleteUser } = useDeleteUserById();

  const handleDeleteUser = (data) => {
    deleteUser(
      {
        id: activeUserId,
        ...data,
      },
      {
        onSuccess: () => {
          handleDeleteClose();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно удалили пользователя',
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
      }
    );
  };

  const columns = [
    { title: '№', dataIndex: 'number', key: 'number', width: 88,},
    {
    title: 'Ф.И.О',
    key: 'first_name',
    width: 480,
    render: (item) => (
      <a className={cls.link} onClick={() => navigate(`/admin/students/${item?.id}`)}>{`${item?.last_name} ${item?.first_name}`}</a>
     )
    },
    { title: 'Возраст', dataIndex: 'age', key: 'age', width: 480, },
    { title: 'Группа', dataIndex: 'groups', key: 'groups', width: 380, },
    { title: 'Дата начала учёбы', dataIndex: 'start_dates', key: 'start_dates', width: 480, },
    { title: 'Номер телефона', dataIndex: 'phone_number', key: 'phone_number', width: 480, },
    { title: 'Коментарий', dataIndex: 'comment', key: 'comment', width: 480, },
    {
      title: '',
      key: 'operations',
      render: (item) => (
        <Box display="flex" alignItems="center" gap="8px" padding="3px">
          <Button
            padding="3px"
            borderRadius="6px"
            backgroundColor="#1FA495" 
            color='#fff'
            fontSize="32px"
            lineHeight="24px"
            fontWeight="300"
            _hover={{ background: "#6c9213" }}
            onClick={() => {
              handleOpenGroup();
              setActiveUserId(item?.id);
            }}
          >
            +
          </Button>
          <Button
            width="24px"
            padding="3px"
            borderRadius="6px"
            backgroundColor="#E9E9E9" 
            _hover={{ background: "#9a9797" }}
            onClick={() => {
              handleOpenEdit();
              setActiveUserId(item?.id);
            }}
          >
            <img src={EditIcon} alt="edit" width="18px" height="18px" />
          </Button>
          <Button
            padding="3px"
            borderRadius="6px"
            backgroundColor="#CF0000" 
            _hover={{ background: "#de6767" }}
            onClick={() => {
              handleOpenDelete();
              setActiveUserId(item?.id);
              setActiveUser(item)
            }}
          >
            <img src={DeleteIcon} alt="delete" width="18px" height="18px" />
          </Button>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (isSuccess && activeUserId) {
      const userData = getUserById.data;

      reset({
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        phone_number: userData?.phone_number,
        email: userData?.email,
        birthday: userData?.birthday,
        group: userData?.group,
        begin_date: userData?.begin_date,
        comments: userData?.comments,
        gender: userData?.gender,
      });
    }
  }, [getUserById]);

  const data = React.useMemo(
    () =>
      getStudents?.users?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [getStudents]
  );

  const statistics = [
    {
      title: 'Всего студентов', 
      img: AllStudent,
      count: 500,
      measurement: "шт"
    },
    {
      title: 'Новые студенты (за месяц)', 
      img: NewStudent,
      count: 50,
      measurement: "шт"
    },
    {
      title: 'Топ студенты', 
      img: NewStudent,
      count: 10,
      measurement: "шт"
    },
    {
      title: 'Сумма по цене продажи', 
      count: "7.5 млрд",
      img: Price,
      measurement: "сум"
    },
  ]

  return {
    onChange,
    activeUser,
    groups,
    statistics,
    nPages,
    currentPage,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    isOpen,
    isOpenEdit,
    isOpenDelete,
    handleOpen,
    handleOpenGroup,
    handleCloseGroup,
    handleDeleteUser,
    handleEditClose,
    handleDeleteClose,
    handleClose,
    columns,
    data,
    register,
    handleSubmit,
    onSubmit,
    handleUpdateUser,
    navigate,
  };
};
