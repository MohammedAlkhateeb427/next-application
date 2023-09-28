import React, { ChangeEvent, FunctionComponent } from 'react';

interface SelectOptionsProps {
  label?: string;
  options?: { key: string | number; value: string }[];
  selectedKey: string | number;
  onChange?: (value: any | number, key?: any) => void;
  key?: any;
  className?: string;
}

const SelectOptions: FunctionComponent<SelectOptionsProps> = ({
  label,
  options,
  selectedKey,
  onChange,
  className = '',
  key,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (onChange && typeof onChange === 'function') {
      onChange(value, key);
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className='block text-sm font-medium'>
          {label}
        </label>
      )}
      <select
        className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-zinc-200 dark:bg-zinc-800'
        onChange={handleSelectChange}
        value={selectedKey}
      >
        
        {options?.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
