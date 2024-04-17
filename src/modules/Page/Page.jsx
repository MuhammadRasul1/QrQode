import {  Box, FormControl,  Input,  Select, useToast,} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import cls from "./styles.module.scss";
import { useCreateUser } from "services/users.service";
import { useGetGroups } from "services/groups.service";
import { BtnSubmit } from "components/BtnSubmit";
import { useNavigate } from "react-router-dom";
import { Inputs } from "components/Input";
import { useGetBranches } from "services/branches.service";
import { CustomSelect } from "components/CustomSelect";
import { PhoneNumber } from "components/PhoneNumber";
  
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
  const onSubmit = (data) => {
    createUser(
      {
        user_type: 'Student',
        ...data,
        phone_number: `+998${data?.phone_number}`,
        father_phone: `+998${data?.father_phone}`,
        mother_phone: `+998${data?.mother_phone}`,
      },
      {
        onSuccess: () => {
          navigate('success');
          refetchSearch();
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

  
  const { data: branches } = useGetBranches({academy_id: "dda198f6-640e-4e72-a26e-31b698473a12"});

  const optionsBranches = branches?.branchs?.map((item, index) => ({
    key: index,
    value: item?.id,
    label: item?.name,
  }));

  const { data: groups } = useGetGroups({academy_id: "dda198f6-640e-4e72-a26e-31b698473a12"});

  const optionsGroups = groups?.groups?.map((item, index) => ({
    key: index,
    value: item?.id,
    label: item?.name,
  }));  
  
    return (
      <div className={cls.page}>
        <div>
          <div className={cls.wrapper}>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
              <CustomSelect
                label="Филиалы"
                id="branch_id"
                register={register}
                name="branch_id"
                error={errors?.branch_id}
                required
                options={optionsBranches}
                placeholder="Выберите филиал"
              />
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
             <PhoneNumber 
                label="Telefon raqamingizning kiriting"
                id="phone_number"
                type="text"
                placeholder="telefon raqamingizning kiriting"
                register={register}
                name="phone_number"
                error={errors?.phone_number}
                isRequired
              />
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
              <PhoneNumber 
                label="Otangizining telefon raqami"
                id="father_phone"
                type="text"
                placeholder="Otangizining telefon raqami"
                register={register}
                name="father_phone"
                error={errors?.father_phone}
              />
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="mother_name">Onangizni ismi</label>
                <Input
                  placeholder="Onangizni ismi"
                  size="md"
                  {...register("mother_name")}
                />
              </Box>
              <PhoneNumber 
                label="Onangizining telefon raqami"
                id="mother_phone"
                type="text"
                placeholder="Onangizining telefon raqamini kiriting"
                register={register}
                name="mother_phone"
                error={errors?.mother_phone}
              />
              <Box className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="gender">Jinsi<span className={cls.required}>*</span></label>
                <Select {...register("gender")} id="gender" required>
                  <option value="" disabled>Jinsingizni tanlang</option>
                  <option value="Мужчина" selected>Erkak</option>
                  <option value="Женщина">Ayol</option>
                </Select>
              </Box>
              <CustomSelect
                label="Guruhingizni tanlang"
                id="group_id"
                register={register}
                name="group_id"
                error={errors?.group_id}
                // required
                options={optionsGroups}
                placeholder="Guruhingizning tanlang"
              />
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
  