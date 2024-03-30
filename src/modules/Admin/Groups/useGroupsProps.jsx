import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateGroup, useDeleteGroupById, useGetGroupById, useGetGroups, useGetGroupsId, useUpdateGroupById } from "services/groups.service";
import EditIcon from "assets/img/icon/EditIcon.svg";
import DeleteIcon from "assets/img/icon/deleteIcon.svg";
import { useGetCourses } from "services/courses.service";
import { useGetMentors } from "services/users.service";
import { useGetRooms } from "services/rooms.service";
import cls from "./styles.module.scss";
import makeAnimated from 'react-select/animated'

export const useGroupsProps = () => {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const auth = JSON.parse(localStorage.getItem("auth"))
  const branchId = auth?.userData?.data?.branch_id


  const [selectedOption, setSelectedOption] = useState([])

  const [state, setState] = useState({
    isOpen: false,
    isOpenEdit: false,
    isOpenDelete: false,
    activeCourse: {},
    activeGroup: {},
    activeGroupId: {},
    currentPage: 1,
    recordsPerPage: 10,
  });


  const [activeGroupDetail, setActiveGroupDetail] = useState('');

  const options = [
    { value: "Понедельник", label: "Понедельник"},
    { value: "Вторник", label: "Вторник"},
    { value: "Среда", label: "Среда"},
    { value: "Четверг", label: "Четверг"},
    { value: "Пятница", label: "Пятница"},
    { value: "Суббота", label: "Суббота"},
    { value: "Воскресенье", label: "Воскресенье"},
  ]

  const animatedComponents = makeAnimated();

  const { isOpen, isOpenEdit, isOpenDelete, activeGroup, activeGroupId, activeCourse, currentPage, recordsPerPage } = state;

  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleOpenEdit = () => setState((prev) => ({ ...prev, isOpenEdit: true }));
  const handleOpenDelete = () => setState((prev) => ({ ...prev, isOpenDelete: true }));
  const handleClose = () => { setState((prev) => ({ ...prev, isOpen: false })); reset(); };
  const handleEditClose = () => { setState((prev) => ({ ...prev, isOpenEdit: false })); reset(); };
  const handleDeleteClose = () => { setState((prev) => ({ ...prev, isOpenDelete: false })); reset(); };

  const { data: courses, refetch: coursesRefetch } = useGetCourses();
  const { data: mentors } = useGetMentors();
  const { data: rooms } = useGetRooms();
  const { data: groupsId, refetch } = useGetGroupsId({courseId: activeCourse});
  const { data: groups, refetch: groupsRefetch } = useGetGroups();
  const { data: getGroupById, isSuccess } = useGetGroupById({ groupId: activeGroupId });
  console.log(groupsId?.groups)
  const nPages = Math.ceil(groups?.count / recordsPerPage) || 1;
  const currentRecords = groups?.groups?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const { mutate: createGroup,  } = useCreateGroup();

  const handleCreateGroup = (data) => {

    console.log(selectedOption);

    createGroup(
      {
        branch_id: branchId,
        ...data,
      },
      {
        onSuccess: () => {
          handleClose();
          reset();
          coursesRefetch();
          groupsRefetch();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно добавили группу',
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

  const { mutate: updateGroup } = useUpdateGroupById();

  const handleUpdateGroup = (data) => {
    updateGroup(
      {
        id: activeGroupId,
        branch_id: auth?.userData?.data?.branch_id,
        ...data,
      },
      {
        onSuccess: () => {
          coursesRefetch();
          groupsRefetch();
          refetch();
          handleEditClose();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно изменили данные группы',
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

  const { mutate: deleteGroup } = useDeleteGroupById();

  const handleDeleteGroup = (data) => {
    deleteGroup(
      {
        id: activeGroupId,
        ...data,
      },
      {
        onSuccess: () => {
          handleDeleteClose();
          coursesRefetch();
          groupsRefetch();
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно удалили группу',
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
    { title: '№', dataIndex: 'number', key: 'number', width: 88, },
    {  title: 'Название курса',  dataIndex: 'course_name',  key: 'course_name',  width: 432,},
    {  title: 'Название потока',  width: 380,
    render: (item) => (
      <a className={cls.link} onClick={() => {
        navigate(`/admin/groups/${item?.id}`);
        setActiveGroupDetail(item)
      }}>{item?.name}</a>
    )
    },
    {  title: 'Учитель',  dataIndex: 'teacher_name',  key: 'teacher_name',  width: 428,},
    {  title: 'Учеников',  dataIndex: 'students',  key: 'students',  width: 300,},
    {  title: 'Кабинет',  dataIndex: 'room_number',  key: 'room_number',  width: 428,},
    {  title: 'Статус',  dataIndex: 'status',  key: 'status',  width: 432,},
    {  title: 'Дата обучение',  dataIndex: 'start_date',  key: 'start_date',  width: 316,},
    {
      title: '',
      key: 'operations',
      render: (item) => (
        <Box display="flex" alignItems="center" gap="8px" padding="3px">
          <Button
            width="24px"
            padding="3px"
            borderRadius="6px"
            backgroundColor="#E9E9E9" 
            _hover={{ background: "#9a9797" }}
            onClick={() => {
              handleOpenEdit();
              setState((prev) => ({ ...prev, activeGroupId: item?.id }));
              setState((prev) => ({ ...prev, activeGroup: item }));
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
              setState((prev) => ({ ...prev, activeGroupId: item?.id }));
              setState((prev) => ({ ...prev, activeGroup: item }));
            }}
          >
            <img src={DeleteIcon} alt="delete" width="18px" height="18px" />
          </Button>
        </Box>
      ),
    },
  ];

  console.log(activeGroupId)
  useEffect(() => {
    if (isSuccess && activeGroup) {

      reset({
        name: activeGroup?.name,
        course_name: activeGroup?.course_name,
        type: activeGroup?.type,
        start_date: activeGroup?.start_date,
        days: activeGroup?.days,
        start_time: activeGroup?.start_time,
        end_date: activeGroup?.end_date,
        teacher_id: activeGroup?.teacher_id,
        room_id: activeGroup?.room_id,
        end_time: activeGroup?.end_time ,
      });
    }
  }, [getGroupById]);

  const data = React.useMemo(
    () =>
      groupsId?.groups?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [groupsId]
  );
  const dataAllGroups = React.useMemo(
    () =>
      groups?.groups?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [groupsId]
  );

  return {
    animatedComponents,
    options,
    setSelectedOption,
    activeGroupDetail,
    rooms,
    dataAllGroups,
    groupsId,
    activeCourse,
    setState,
    mentors,
    courses,
    activeGroup,
    groups,
    nPages,
    currentPage,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    isOpen,
    isOpenEdit,
    isOpenDelete,
    handleOpen,
    handleDeleteGroup,
    handleEditClose,
    handleDeleteClose,
    handleClose,
    columns,
    data,
    register,
    handleSubmit,
    handleCreateGroup,
    handleUpdateGroup,
    options,
  };
}