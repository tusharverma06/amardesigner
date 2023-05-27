import * as React from "react"
import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"
export const Modal = ({
    isOpen,
    setIsOpen,
    data,
    inputHandler,
    handleClick,
    handleCancel
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
                        className='absolute top-0 right-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-70'
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
                        <div className='inset-0 z-10 w-11/12 h-[600px] sm:w-[416px] sm:h-[605px] flex flex-col items-center justify-start gap-24 bg-white py-4 mx-auto my-28 rounded-lg'>
                            <div className="flex items-center justify-center w-full gap-16 py-3 border-b border-gray-200 shadow-md">
                                <h1 className="text-start font-semibold text-[22px]  text-black ">Designs for Every Wallet!</h1>
                                <img onClick={handleCancel} src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" className="w-10 h-10 cursor-pointer " />
                            </div>
                            <div className="flex flex-col items-center justify-center w-full gap-12">
                                <input type="text" className="w-11/12 px-4 py-4 border border-gray-400 rounded-lg" placeholder="Name" onChange={inputHandler} value={data.name} name="name"/>
                                <input type="number" className="w-11/12 px-4 py-4 border border-gray-400 rounded-lg" placeholder="Pincode" onChange={inputHandler} value={data.pincode} name="pincode"/>
                                <input type="email" className="w-11/12 px-4 py-4 border border-gray-400 rounded-lg" placeholder="Email" onChange={inputHandler} name="email" value={data.email}/>
                                <div className='flex items-center justify-center w-full my-12'>
                                    <button className='px-20 py-5 mx-auto font-bold text-center text-white bg-red-500 rounded-xl' onClick={handleClick}>Get Free Quote</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Dialog>
            )}
        </AnimatePresence>
    )
}
export default Modal;
