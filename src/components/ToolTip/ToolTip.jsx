import React from 'react';
import cls from './styles.module.scss'; 

export const Tooltip = ({ text, children }) => {
  return (
    <div className={cls.tooltipContainer}>
      {children}
      <div className={cls.tooltipText}>{text}</div>
    </div>
  );
};

