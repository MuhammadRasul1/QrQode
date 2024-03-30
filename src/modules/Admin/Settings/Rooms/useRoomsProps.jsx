import { Box, Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import EditIcon from "assets/img/icon/EditIcon.svg";
import DeleteIcon from "assets/img/icon/deleteIcon.svg";
import { useCreateRoom, useDeleteRoomById, useGetRoomById, useGetRooms, useUpdateRoomById } from 'services/rooms.service';

export const useRoomsProps = () => {
  const [state, setState] = useState({
    isOpen: false,
    isOpenEdit: false,
    isOpenDelete: false,
    currentPage: 1,
    recordsPerPage: 10,
  });
  const [activeRoomId, setActiveRoomId] = useState('');
  const [activeRoom, setActiveRoom] = useState('');
  const { isOpen, isOpenEdit, isOpenDelete, currentPage, recordsPerPage } = state;

  const auth = JSON.parse(localStorage.getItem("auth"))
  const branchId = auth?.userData?.data?.branch_id

  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleOpenEdit = () => setState((prev) => ({ ...prev, isOpenEdit: true }));
  const handleOpenDelete = () => setState((prev) => ({ ...prev, isOpenDelete: true }));
  const handleClose = () => { setState((prev) => ({ ...prev, isOpen: false })); reset(); };
  const handleEditClose = () => { setState((prev) => ({ ...prev, isOpenEdit: false })); reset(); };
  const handleDeleteClose = () => { setState((prev) => ({ ...prev, isOpenDelete: false })); reset(); };

  const { data: rooms, refetch } = useGetRooms();

  const nPages = Math.ceil(rooms?.count / recordsPerPage) || 1;
  const currentRecords = rooms?.rooms?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const { data: getRoomById, isSuccess } = useGetRoomById({ roomId: activeRoomId });

  const { mutate: createRoom } = useCreateRoom();

  const handleCreateRoom = (data) => {
    createRoom(
      {
        ...data,
        capacity: data?.capacity - 0,
        area: data?.area - 0,
        sum_of_room: data?.sum_of_room - 0,
        branch_id: branchId,
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
            title: 'Вы успешно добавили комнату',
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

  const { mutate: updateRoom } = useUpdateRoomById();

  const handleUpdateRoom = (data) => {
    updateRoom(
      {
        ...data,
        capacity: data?.capacity - 0,
        area: data?.area - 0,
        sum_of_room: data?.sum_of_room - 0,
        branch_id: branchId,
        id: activeRoomId,
      },
      {
        onSuccess: () => {
          refetch();
          handleEditClose();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно изменили данные комнаты',
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

  const { mutate: deleteRoom } = useDeleteRoomById();

  const handleDeleteRoom = (data) => {
    deleteRoom(
      {
        id: activeRoomId,
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
            title: 'Вы успешно удалили комнату',
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
    { title: 'Номер кабинета', dataIndex: 'name', key: 'name', width: 480, },
    { title: 'Вместимость', dataIndex: 'capacity', key: 'capacity', width: 480, },
    { title: 'Площадь(м2)', dataIndex: 'area', key: 'area', width: 480, },
    { title: 'Арендная плата(сумм)', dataIndex: 'sum_of_room', key: 'sum_of_room', width: 480, },
    { title: 'Цена за человека', dataIndex: 'price', key: 'price', width: 480, },
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
              setActiveRoomId(item?.id);
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
              setActiveRoomId(item?.id);
              setActiveRoom(item)
            }}
          >
            <img src={DeleteIcon} alt="delete" width="18px" height="18px" />
          </Button>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (isSuccess && activeRoomId) {
      const roomData = getRoomById.data;

      reset({
        name: roomData?.name,
        capacity: roomData?.capacity,
        area: roomData?.area,
        sum_of_room: roomData?.sum_of_room,
      });
    }
  }, [getRoomById]);

  console.log(rooms)

  const data = React.useMemo(
    () =>
      rooms?.rooms?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [rooms]
  );

  return {
    activeRoom,
    nPages,
    currentPage,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    isOpen,
    isOpenEdit,
    isOpenDelete,
    handleOpen,
    handleDeleteRoom,
    handleEditClose,
    handleDeleteClose,
    handleClose,
    columns,
    data,
    register,
    handleSubmit,
    handleCreateRoom,
    handleUpdateRoom,
  };
};