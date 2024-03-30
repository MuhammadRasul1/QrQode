import { Box, Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import EditIcon from "assets/img/icon/EditIcon.svg";
import DeleteIcon from "assets/img/icon/deleteIcon.svg";
import { useCreateDiscount, useDeleteDiscountById, useGetDiscountById, useGetDiscounts, useUpdateDiscountById } from 'services/discounts.service';
export const useDiscountsProps = () => {
  const [state, setState] = useState({
    isOpen: false,
    isOpenEdit: false,
    isOpenDelete: false,
    currentPage: 1,
    recordsPerPage: 10,
  });
  const [activeDiscountId, setActiveDiscountId] = useState('');
  const [activeDiscount, setActiveDiscount] = useState('');
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

  const { data: discounts, refetch } = useGetDiscounts();

  const nPages = Math.ceil(discounts?.count / recordsPerPage) || 1;
  const currentRecords = discounts?.discounts?.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  const { data: getDiscountById, isSuccess } = useGetDiscountById({ discountId: activeDiscountId });

  const { mutate: createDiscount } = useCreateDiscount();

  const handleCreateDiscount = (data) => {
    createDiscount(
      {
        ...data,
        amount: data?.amount - 0,
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
            title: 'Вы успешно добавили скидку',
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

  const { mutate: updateDiscount } = useUpdateDiscountById();

  const handleUpdateDiscount = (data) => {
    updateDiscount(
      {
        ...data,
        amount: data?.amount - 0,
        id: activeDiscountId,
      },
      {
        onSuccess: () => {
          refetch();
          handleEditClose();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно изменили скидку',
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

  const { mutate: deleteDiscount } = useDeleteDiscountById();

  const handleDeleteDiscount = (data) => {
    deleteDiscount(
      {
        id: activeDiscountId,
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
            title: 'Вы успешно удалили скидку',
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
    { title: 'Название', dataIndex: 'name', key: 'name', width: 480, },
    { title: 'Тип', dataIndex: 'type', key: 'type', width: 480, },
    { title: 'Размер', dataIndex: 'amount', key: 'amount', width: 480, },
    { title: 'Применение', dataIndex: 'usage', key: 'usage', width: 480, },
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
              setActiveDiscountId(item?.id);
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
              setActiveDiscountId(item?.id);
              setActiveDiscount(item)
            }}
          >
            <img src={DeleteIcon} alt="delete" width="18px" height="18px" />
          </Button>
        </Box>
      ),
    },
  ];

  useEffect(() => {
    if (isSuccess && activeDiscountId) {
      const discountData = getDiscountById.data;

      reset({
        name: discountData?.name,
        type: discountData?.type,
        amount: discountData?.amount,
        usage: discountData?.usage,
      });
    }
  }, [getDiscountById]);

  const data = React.useMemo(
    () =>
      discounts?.discounts?.map((item, index) => ({
        ...item,
        number: index + 1,
      })),
    [discounts]
  );

  return {
    activeDiscount,
    nPages,
    currentPage,
    setCurrentPage: (page) => setState((prev) => ({ ...prev, currentPage: page })),
    isOpen,
    isOpenEdit,
    isOpenDelete,
    handleOpen,
    handleDeleteDiscount,
    handleEditClose,
    handleDeleteClose,
    handleClose,
    columns,
    data,
    register,
    handleSubmit,
    handleCreateDiscount,
    handleUpdateDiscount,
  };
};