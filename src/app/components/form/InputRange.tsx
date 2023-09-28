import React, { ChangeEvent } from 'react';

interface RangeSliderProps {
  min?: number;
  max?: number;
  value?: any;
  onChange?: (value: number, key?: any) => void;
  key?: number;
  // onChange: (value: number) => void;
}

const InputRange: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  onChange,
  key,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange(value, key);
    }
    // const newValue = parseFloat(event.target.value);
    // onChange(newValue);
  };

  return (
    <div className='relative w-full'>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className='w-full h-2 appearance-none bg-transparent cursor-pointer bg-white'
      />
      <div
        className='absolute left-0 right-0 top-0 h-2  bg-yellow-400 rounded-full text-white'
        // style={{ backgroundSize: `${(100 * value) / max}% 100%` }}
      ></div>
    </div>
  );
};

export default InputRange;
