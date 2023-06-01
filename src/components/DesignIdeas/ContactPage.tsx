import React from 'react';
import contactPageBg from '../../assets/contactPageBg.jpg';

const ContactPage: React.FC = () => {
  return (
    <div className="container w-full mx-auto lg:w-3/4">
      <section className="text-gray-800">
        <div className="flex flex-wrap items-center justify-between px-4 rounded-xl shadow-xl bg-[#6c4866]">
          <div className="hidden w-full mb-12 grow-0 shrink-0 basis-auto md:mb-0 sm:block md:w-1/2">
            <img src={contactPageBg} className="object-cover rounded-xl" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-1 py-4 text-white grow-0 shrink-0 basis-auto sm:py-5 bg- md:w-1/2 lg:px-2 lg:py-8">
            <p className="mb-6 text-2xl font-bold text-center">Designs for Every Budget</p>
            <p className="mb-6 text-sm font-bold text-center">Get your dream home today. Let our experts help you</p>
            <form className="w-11/12 my-8 sm:my-4 sm:w-3/4">
              <div className="mb-6 form-group">
                <input
                  type="text"
                  className="block w-full px-3 py-4 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6 form-group">
                <input
                  type="text"
                  className="block w-full px-3 py-4 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-6 form-group">
                <input
                  type="number"
                  className="block w-full px-3 py-4 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="PIN Code"
                />
              </div>
              <button className="bg-[#EB595F] text-white px-10 py-2 font-semibold lg:text-lg sm:whitespace-nowrap sm:text-md rounded-3xl w-full text-xs leading-tight uppercase shadow-md transition duration-150 ease-in-out">
                Get Free Quote
              </button>
              <div className="flex justify-center mt-9">
                <p className="w-3/4 mb-6 font-normal text-center">
                  By submitting this form, you agree to the{' '}
                  <span className="text-[#EB595F] cursor-pointer">privacy policy</span> &{' '}
                  <span className="cursor-pointer text-[#EB595F]">terms and conditions</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
