import * as React from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    name: string;
    email: string;
    pincode: string;
  };
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleCancel: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  data,
  inputHandler,
  handleClick,
  handleCancel,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
          className="fixed inset-0 z-10 flex items-center justify-center w-full overflow-y-auto"
        >
          <div className="flex flex-col py-8 text-center">
            <Dialog.Overlay />
          </div>
          {/* edit collection Page */}
          <motion.div
            className="absolute top-0 right-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-70"
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
          >
            <div className="inset-0 z-10 w-11/12 h-[500px] sm:w-[416px] sm:h-[555px] flex flex-col items-center justify-start gap-10 bg-white py-4 mx-auto my-28 rounded-lg">
              <div className="relative flex items-center justify-center w-full gap-16 px-2 py-2 border-b border-gray-200 shadow-sm">
                <h1 className="text-lg font-bold text-center text-black sm:text-2xl ">
                  Desgin Your Dream Home
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    className="transition-all block duration-1000  bg-red-500 h-0.5"
                  ></motion.span>
                </h1>
                <img
                  onClick={handleCancel}
                  src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  alt=""
                  className="absolute cursor-pointer top-1 right-2 w-9 h-9"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-10">
                <input
                  type="text"
                  className="w-11/12 px-4 py-4 border border-gray-400 rounded-xl"
                  placeholder="Name"
                  onChange={inputHandler}
                  value={data.name}
                  name="name"
                />
                <input
                  type="tel"
                  className="w-11/12 px-4 py-4 border border-gray-400 rounded-xl"
                  placeholder="Phone Number"
                  onChange={inputHandler}
                  name="email"
                  value={data.email}
                />
                <input
                  type="number"
                  className="w-11/12 px-4 py-4 border border-gray-400 rounded-xl"
                  placeholder="Pincode"
                  onChange={inputHandler}
                  value={data.pincode}
                  name="pincode"
                />
                <div className="flex items-center justify-center w-full">
                  <button
                    className="w-11/12 py-5 mx-auto mt-4 font-bold text-center text-white bg-red-500 sm:px-20 rounded-xl"
                    onClick={handleClick}
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-11/12 ">
                <p className="w-full mb-6 font-normal text-center ">
                  By submitting this form, you agree to the{" "}
                  <span className="text-[#EB595F] cursor-pointer">
                    privacy policy
                  </span>{" "}
                  &{" "}
                  <span className="cursor-pointer text-[#EB595F]">
                    terms and conditions
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
