import { useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Specific Design/Modal.tsx';

interface DesignCardProps {
  thumbnail: string;
  title: string;
  feet: number;
  designTitle: string;
  DesignData: any; // Specify the type of DesignData
  index: number;
  windowWidth: number;
}

const DesignCard: React.FC<DesignCardProps> = ({
  thumbnail,
  title,
  feet,
  designTitle,
  DesignData,
  index,
  windowWidth,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => setIsLiked(!isLiked);

  const [isOpen, setIsOpen] = useState(false);

  // Form data
  interface FormData {
    name: string;
    email: string;
    pincode: string;
  }

  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    pincode: '',
  });

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // handling data
  const handleData = async () => {
    if (data.name === '' || data.email === '' || data.pincode === '') return;
    try {
      const form = new FormData();
      form.append('name', data.name);
      form.append('email', data.email);
      form.append('pincode', data.pincode);
      console.log(form);
    } catch (error) {
      // Handle error
    }
    setData({ name: '', email: '', pincode: '' });
    setIsOpen(false);
  };

  // Free quote popup
  const handleClick = () => setIsOpen(!isOpen);
  const handleCancel = () => {
    setIsOpen(false);
    setData({ name: '', email: '', pincode: '' });
  };

  return (
    <div className="flex flex-col items-center justify-between w-11/12 max-w-md gap-3 pb-4 mx-auto rounded-lg shadow-md sm:w-[45%] lg:w-[30%] drop-shadow-sm z-[5]">
      <Link
        to={`/design-ideas/${designTitle}/${title}`}
        state={{
          thumbnail,
          DesignData,
          index,
          feet,
        }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div
          className="absolute z-50 flex items-center justify-center w-12 h-12 bg-white cursor-pointer top-4 right-4 rounded-xl"
          onClick={handleToggle}
        >
          {isLiked ? (
            <img
              src="https://img.icons8.com/ios-filled/30/EB595F/like--v1.png"
              alt=""
              className="block object-contain w-6 h-6 mx-auto"
            />
          ) : (
            <img
              src="https://img.icons8.com/ios/30/like--v1.png"
              alt=""
              className="block object-contain w-6 h-6 mx-auto transition-all"
            />
          )}
        </div>
        <img src={thumbnail} alt="" className="object-cover w-full rounded-t-lg" />
        <span className="flex items-center justify-start w-full px-3 text-lg font-medium text-gray-800 lg:text-xl">
          {title}
        </span>
      </Link>
      <span className="flex items-center justify-start w-full px-3 text-sm font-medium text-gray-500">
        Size:&nbsp;{feet} &nbsp; feet
      </span>
      <div className={`flex ${windowWidth < 350 ? 'flex-col gap-4' : 'flex-row'} justify-around w-full my-2`}>
        <button
          className={`bg-white rounded-3xl border-[#EB595F] ${
            windowWidth < 350 ? 'text-sm' : 'text-xs'
          } px-2 sm:px-1 py-2 border-[1px] text-[#EB595F] font-semibold sm:text-xs md:text-sm md:px-3 lg:px-1 xl:px-3 2xl:px-6 tracking-wider whitespace-nowrap`}
          onClick={handleClick}
        >
          Book Free Consultations
        </button>
        <button
          className={`bg-[#EB595F] text-white ${
            windowWidth < 350 ? 'py-2 text-sm' : 'text-xs'
          } px-8 sm:px-3 md:px-4 xl:px-10 sm:py-2 font-medium lg:text-sm whitespace-nowrap sm:text-sm 2xl:px-12 rounded-3xl`}
          onClick={handleClick}
        >
          Get Quote
        </button>
      </div>
      <Modal handleCancel={handleCancel} data={data} inputHandler={onInput} isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleData} />
    </div>
  );
};

export default DesignCard;
