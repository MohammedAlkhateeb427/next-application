import React from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

type InputProps = {
  label?: string;
  value?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  onChange?: (value: any, key?: any) => void;
  key?: number;
  maxLength?: number;
  icon?: IconType;
  classNameIcon?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  placeholder,
  disabled,
  className,
  labelClassName,
  onChange,
  key,
  maxLength,
  icon: Icon,
  classNameIcon,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange && typeof onChange === 'function') {
      onChange(value, key);
    }
  };

  return (
    <div className='mb-4'>
      {label && (
        <label className={`block font-medium font-bold mb-2 ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className={`border rounded w-full py-2 px-3  focus:outline-none bg-zinc-100 dark:bg-zinc-800  ${className}`}
          maxLength={maxLength}
        />
        {Icon && (
          <Icon
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-xl ${classNameIcon}`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
