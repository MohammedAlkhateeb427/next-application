import React from 'react';

type RadioInputProps = {
  label?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  onChange?: (value: any, key?: any) => void;
  key?: number;
  htmlFor?: string;
  id?: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  key,
  htmlFor,
  id,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange && typeof onChange === 'function') {
      onChange(value, key);
    }
  };

  return (
    <div className='flex items-center'>
      <input
        type='radio'
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={handleChange}
        className='mr-2'
      />
      <label htmlFor={htmlFor} className=''>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
