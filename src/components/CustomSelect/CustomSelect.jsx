import React from 'react';
import Select from 'react-select';
import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import clsx from "clsx";
import Error from "assets/img/icon/error.svg";

export const CustomSelect = ({
  register = () => {}, 
  name = '', 
  id = '', 
  required = false,
  error ,
  label = '',
  options,
  placeholder = '',
  value = '',
  ...props
}) => {

  const customStyles = {
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (provided) => ({
      ...provided,
      border: '1px solid #E5E9EB',
      borderRadius: '8px',
      height: "40px",
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.084px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#3182ce',
        color: 'white',
        boxShadow: '0 0 0 1px #3182ce',
      },
      '&:focus-within': {
        borderColor: '#3182ce',
        color: 'white',
        boxShadow: '0 0 0 1px #3182ce',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0067F4' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#346bb8',
        color: 'white',
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: '1px solid #E5E9EB',
      borderRadius: '4px',
      boxShadow: 'none',
    }),
  };

  return (
    <Box className={cls.wrapper}>
      <Box className={cls.content}>
        <label className={cls.label} htmlFor={id}>{label}<span className={cls.required}>*</span></label>
        <Select
          options={options}
          className={clsx(cls.select, { [cls.error]: !!error?.message })}
          onChange={(selectedOption) => {
            register(name, { value: selectedOption?.value, message: 'Заполните это поле' });
          }}
          // {...register(name, { required: {value: required, message: 'Заполните это поле'}})}
          id={id} 
          styles={customStyles}
          placeholder={placeholder}
          {...props}
        />
      </Box>
      { error?.message && 
        <Box display="flex" alignItems="center" marginTop="8px">
           <img src={Error} alt="error" width={16} height={16}/>
           <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
        </Box>
      }
    </Box>
  );
};
