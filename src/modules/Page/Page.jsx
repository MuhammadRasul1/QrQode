import {  Box, FormControl,  Input,  InputGroup,  InputLeftAddon,  Select,  Stack, useToast,} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import cls from "./styles.module.scss";
import { useCreateUser, useGetStudents } from "services/users.service";
import { useGetGroups } from "services/groups.service";
import { BtnSubmit } from "components/BtnSubmit";
import { useNavigate } from "react-router-dom";
import { Inputs } from "components/Input";
  
export const Page = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
    const navigate = useNavigate();

    const { mutate: createUser, isPending } = useCreateUser();
    const toast = useToast();
    const { mutate: getStudents, refetch } = useGetStudents();

  const onSubmit = (data) => {
    createUser(
      {
        user_type: 'Student',
        branch_id: "3e5b92c9-8cb6-40e7-8bc5-bfff1c5a61fb",
        ...data,
        phone_number: `+998${data?.phone_number}`,
        father_phone: `+998${data?.father_phone}`,
        mother_phone: `+998${data?.mother_phone}`,
      },
      {
        onSuccess: () => {
          navigate('success');
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: 'Вы успешно зарегистрировались в нашем платформе ', 
            status: 'success',
          });
        },
        onError: (error) => {
          setError("first_name", { message: error?.response?.data})
          setError("last_name", { message: error?.response?.data })
          setError("birthday", { message: error?.response?.data })
          clg(error)
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

  const { data: groups } = useGetGroups();
  
    return (
      <div className={cls.page}>
        <div>
          <div className={cls.wrapper}>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
              <Inputs
                label="Ismingiz"
                id="first_name"
                type="text"
                placeholder="Isimngizning kiriting"
                register={register}
                name="first_name"
                error={errors?.first_name}
                required 
              />
              <Inputs
                label="Familyangiz"
                id="last_name"
                type="text"
                placeholder="Familiyangizning kiriting"
                register={register}
                name="last_name"
                error={errors?.last_name}
                required 
              />
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="phone_number">Telefon raqamingiz</label>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftAddon marginTop="10px">+998</InputLeftAddon>
                    <Input
                      type="number"
                      id="phone_number"
                      placeholder="Telefon raqamingiz"
                      {...register("phone_number")}
                    />
                  </InputGroup>
                </Stack>
              </Box>
              <Inputs
                label="Tug'ilgan sanangiz"
                id="last_name"
                type="date"
                placeholder="Tug'ilgan sanangizning kiriting"
                register={register}
                name="birthday"
                error={errors?.last_name}
                required 
              />
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="father_name">Otangizni ismi</label>
                <Input
                  placeholder="Otangizni ismi"
                  size="md"
                  {...register("father_name")}
                />
              </Box>
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="father_phone">Otangizining telefon raqami</label>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftAddon marginTop="10px">+998</InputLeftAddon>
                    <Input
                      type="number"
                      id="father_phone"
                      placeholder="Otangizining telefon raqami"
                      {...register("father_phone")}
                    />
                  </InputGroup>
                </Stack>
              </Box>
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="mother_name">Onangizni ismi</label>
                <Input
                  placeholder="Onangizni ismi"
                  size="md"
                  {...register("mother_name")}
                />
              </Box>
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="mother_phone">Onangizining telefon raqami</label>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftAddon marginTop="10px">+998</InputLeftAddon>
                    <Input
                      type="number"
                      id="father_phone"
                      placeholder="Onangizining telefon raqami"
                      {...register("mother_phone")}
                      maxLength={9}
                    />
                  </InputGroup>
                </Stack>
              </Box>
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="gender">Jinsi<span className={cls.required}>*</span></label>
                <Select {...register("gender")} id="gender" required>
                  <option value="Мужчина" selected>Erkak</option>
                  <option value="Женщина">Ayol</option>
                </Select>
              </Box>
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="group_id">Guruhingizni tanlang<span className={cls.required}>*</span></label>
                <Select {...register("group_id")} required>
                  {groups?.groups?.map((item, index) => {
                  return (
                    <option key={index} value={item?.id}>
                      {item?.name}
                    </option>
                  );
                })}
                </Select>
              </Box>
              <Box display="flex" justifyContent="flex-end" mt={30}>
                <BtnSubmit
                  height="45px"
                  text="Ro'yxatdan o'tish"
                  isPending={isPending} 
                />
              </Box>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
  