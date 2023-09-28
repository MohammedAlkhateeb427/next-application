'use client ';

import React from 'react';
import { IconType } from 'react-icons/lib';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  label?: any;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  label,
  disabled,
  className,
  labelClassName,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center rounded-md focus:outline-none 0  ${className}`}
    >
      {children}
      {Icon && <span className=' mr-1 '>{<Icon />}</span>}
      {label && <span className={`text-base  ${labelClassName}`}>{label}</span>}
    </button>
  );
};

export default Button;
