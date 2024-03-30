import {  Button,  FormControl,  Input,  InputGroup,  InputLeftAddon,  Select,  Stack,} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import cls from "./styles.module.scss";
import { useCreateUser } from "services/users.service";
  
export const Page = () => {
    const { register, handleSubmit } = useForm()

    const { mutate: createUser } = useCreateUser();

  const onSubmit = (data) => {
    createUser(
      {
        user_type: 'Student',
        branch_id: "3e5b92c9-8cb6-40e7-8bc5-bfff1c5a61fb",
        ...data,
        role_id: "1ead7347-2c79-490d-b109-c9d75dcd0bac",
        group_id: "a2338db4-38df-4cdd-a3a0-7b0d914bfae8",
        phone_number: "+998910269095",
        father_phone: "+998910269095",
        // birthday: "02-02-2005",
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
  
    return (
      <div className={cls.page}>
        <div>
          <div className={cls.wrapper}>
            <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <Input
                  placeholder="Isim"
                  size="md"
                  {...register("first_name")}
                />
                <Input
                  placeholder="Familiya"
                  size="md"
                  {...register("last_name")}
                />
                <Stack spacing={4}>
                  <InputGroup className="tellPhone">
                    <InputLeftAddon marginTop="10px">+998</InputLeftAddon>
                    <Input
                      type="number"
                      placeholder="Sizni telefon raqamiz"
                      {...register("phone_number")}
                    />
                  </InputGroup>
                </Stack>
                <Input
                  placeholder="Otangizni ismi"
                  size="md"
                  {...register("father_name")}
                />
                <Stack spacing={4}>
                  <InputGroup className="tellPhone">
                    <InputLeftAddon marginTop="10px">+998</InputLeftAddon>
                    <Input
                      type="number"
                      placeholder="Otangizni telefon raqami"
                      {...register("father_phone")}
                    />
                  </InputGroup>
                </Stack>
                {/* Add other input fields with similar pattern */}
              </Stack>
              <Select {...register("gender")}>
                <option value="option1">Erkak</option>
                <option value="option2">Ayol</option>
              </Select>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                {...register("birthday")}
              />
              <Select {...register("group_id")}>
                <option value="option1">group 1</option>
                <option value="option2">group 2</option>
              </Select>
              <Button type="submit" marginTop={5} colorScheme="blue">
                Button
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
  