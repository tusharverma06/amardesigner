import React from 'react';

interface FeatureProps {
  img: string;
  featureName: string;
}

const Feature: React.FC<FeatureProps> = ({ img, featureName }) => {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 gap-3 border border-gray-300 sm:w-28 sm:h-28 rounded-xl xl:w-32 xl:h-32">
      <div className="flex items-end justify-center w-full h-[60%]">
        <img src={img} alt="" className="block w-10 h-10 pt-1 mx-auto border-solid sm:w-12 sm:h-12 xl:w-16 xl:h-16" />
      </div>
      <div className="w-full h-[40%]">
        <span className='text-[8px]  px-2 sm:text-xs  flex items-center justify-center w-full xl:text-sm font-medium'>{featureName}</span>
      </div>
    </div>
  );
}

export default Feature;
