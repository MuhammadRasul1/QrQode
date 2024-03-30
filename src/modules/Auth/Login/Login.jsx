import { Box, FormControl, FormLabel} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { BtnSubmit } from "components/BtnSubmit";
import { CheckInput } from "../components/CheckInput";
import { CopyRight } from "../components/CopyRight";
import { AuthInputPassword } from "../components/AuthInputPassword";
import { AuthInput } from "../components/AuthInput";

export const Login = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    isPending,
    formState: { errors }, 
  } = useLoginProps();

  return (
    <Box>
      <h1 className={cls.title}>Вход в платформу</h1>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <AuthInput
          label="Email"
          id="email"
          type="email"
          placeholder="Введите e-mail"
          src={EmailOutline}
          alt="email"
          register={register}
          name="email"
          error={errors.email}
          required
        />
        <AuthInputPassword
          label="Пароль"
          id="password"
          src={LockOpen}
          alt="lockOpen"
          placeholder="Введите пароль"
          register={register}
          name="password" 
          error={errors.password}
          required
        />
        <Box className={cls.wrapper}>
          <CheckInput
           text="Запомнить меня"
           name="rememberMe" 
          />
          <Link className={cls.restorePassword} to="/auth/resetPassword">Забыли пароль?</Link>
        </Box>
        <Box className={cls.btnWrapper}>
          <BtnSubmit
            height="60px"
            text="Войти в аккаунт"
            isPending={isPending} 
          />
        </Box>
        <CopyRight />
      </FormControl>
    </Box>
  )
};