import React from 'react';
import { options } from './optionsData';

interface OptionProps {}

const Option: React.FC<OptionProps> = () => {
  return (
    <div className='w-full sm:w-11/12 max-w-[1058px] flex items-center justify-between my-12 mx-auto py-1 px-4 sm:px-2'>
      <div className="flex items-center justify-between w-full gap-10 mx-auto overflow-x-auto overflow-y-hidden sm:overflow-y-visible sm:gap-6 lg:overflow-x-visible" >
        {options.map((option) => {
          return (
            <div className="flex flex-col items-center justify-center gap-1 transition-all cursor-pointer" key={option.text}>
              <img src={option.link} alt="" className='w-6 h-6' />
              <span className='font-medium w-max text-xs sm:text-[12px] sm:leading-6   text-primary'>{option.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Option;
