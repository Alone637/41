import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton } from "../../components/UI/Button/AppButton";
import { Registration } from "../../components/UI/Login/Login";
import { RegestrationPageWrapper } from "./RegestrationPage.style";
import { Heading } from "../../components/UI/Heading/Heading";


interface LoginPageFrom {
    userName?: string
    userPhone?: string
    userPassword?: string
  }
  
  const uzbekPhoneNumberRegex = /^(\+998)?(9\d{8}|[12]\d{11})$/;
  
  const loginFormSchema = yup.object({
    userPhone: yup.string().matches(uzbekPhoneNumberRegex, 'Неверный формат номера телефона'),
    userPassword: yup.string().min(8, 'Пароль должен состовлять 8 символов и более')
  })
  
  export const RegestrationPage = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm<LoginPageFrom>({
      defaultValues: {
        userPhone: '',
        userPassword: ''
      },
      resolver: yupResolver(loginFormSchema),
    })
  
    const onLoginSubmit = (data: LoginPageFrom) => {
      console.log('data', data)
    }
  
    return (
      <RegestrationPageWrapper>
        <Heading type="h1" headingText="Регистрация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller name="userName" control={control} render={({ field }) => (
            <AppInput type="Name" placeholder="Имя и Фамилия" errorText={errors.userName?.message} {...field} />
          )} />
          <Controller name="userPhone" control={control} render={({ field }) => (
            <AppInput type="tel" placeholder="Номер телефона" errorText={errors.userPhone?.message} {...field} />
          )} />
          <Controller name="userPassword" control={control} render={({ field }) => (
            <AppInput type="password" placeholder="Придумайте Пароль" errorText={errors.userPassword?.message} {...field} />
          )} />
          <AppButton type="submit" buttonLabel="Зарегистрироваться" isPrimary />
        </form>
        <Registration />
      </RegestrationPageWrapper>
    );
  };
  