import React, { useState } from 'react'
import LikeIcon from '../assets/liked.svg'
import LinkCopied from '../assets/LinkCopied.png'
import Feature from '../components/DesignIdeas/Specific Design/Feature'
import { features } from '../components/DesignIdeas/dummyData'
import { motion } from 'framer-motion';
import Modal from '../components/DesignIdeas/Specific Design/Modal'
const SpecificDesign = ({ title, thumbnail }) => {
    const [isCopied, setIsCopied] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // Free quote popup
    const handleClick = () => setIsOpen(!isOpen)
    const handleShare = () => {
        setIsCopied(!isCopied)
        setTimeout(() => { setIsCopied(false) }, 1500)
    }
    const handleLike = () => setIsLiked(!isLiked)

    // Form data
    const [data, setData] = useState({
        name: '',
        email: '',
        pincode: ''
    })
    const onInput = (e) => {
        e.preventDefault();
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    // handling data
    const handleData = async () => {
        if (data.name === "" || data.email === "" || data.pincode === "") return
        try {
            const form = new FormData();
            form.append("name", data.name);
            form.append("email", data.email);
            form.append("pincode", data.pincode);
            console.log(form)
        } catch (error) {

        }
        setData(data => ({ ...data, name: '', email: '', pincode: '' }))
        setIsOpen(false)
    }

    const handleCancel = () => {
        setIsOpen(false)
        setData(data => ({ ...data, name: '', email: '', pincode: '' }))
    }
    return (

        <div className='flex flex-col items-center justify-between w-full xl:flex-row max-w-[2000px] mx-auto'>
            {/* Image thumbnail */}
            <div className='w-full xl:w-[60%] '>
                <img src="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/bathroom-2-d-1662025132-btVYp.png" alt="" className="block h-full mx-auto xl:w-11/12 " />
            </div>
            {/* Design  Details  */}
            <div className="flex flex-col items-start justify-center w-full  xl:w-[40%] ">
                <div className='flex items-center justify-between w-full h-full px-4 overflow-y-auto xl:pr-12'>
                    <h1 className='pt-8 text-xl font-bold text-start md:max-w-2xl sm:text-2xl xl:text-3xl xl:max-w-lg'>Classic L Shaped Modular Kitchen Design With Patterned Moroccan Backsplash Tiles</h1>
                    <div className="flex items-center justify-center gap-2">
                        <button className={`relative flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full`} onClick={handleShare}>
                            <img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbB_7FEkfvGkYYnk8bYlE8046nTjiDWcUrt85XE6r476kCVgxuJQmYs2RNnCYTEnG-" alt="" className="block w-4 h-4 mx-auto" />

                            {isCopied &&
                                <div className="absolute flex items-center justify-end -right-10 bottom-8 w-36">
                                    <img src={LinkCopied} alt="" className='w-28' />
                                </div>
                            }
                        </button>
                        <button className={`flex items-center justify-center w-8 h-8 border  ${isLiked ? 'border-red-500' : 'border-gray-500'}  rounded-full`} onClick={handleLike}>
                            <img src={isLiked ? LikeIcon : 'https://cdn-icons-png.flaticon.com/512/57/57602.png'} alt="" className="block w-4 h-4 mx-auto" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-2 px-6 my-8 overflow-auto sm:justify-evenly">
                    {features.map((feature, index) => {
                        return <Feature
                            img={feature.img}
                            key={index}
                            featureName={feature.featureName}
                        />
                    })}

                </div>
                <div className='flex flex-col items-start justify-center w-full gap-6 px-8'>
                    <h1 className="flex flex-col items-center justify-center text-xl font-bold text-start">
                        Kitchen Design Details:
                        <motion.span
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            class="transition-all duration-1000  bg-red-600 h-0.5">
                        </motion.span>
                    </h1>
                    <ul className='space-y-4 '>
                        <li>
                            <span className="font-semibold">• Layout:</span> <span className='font-medium'>L-shaped</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Room Dimension:</span> <span className='font-medium'>13 X 11 Feet</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Style:</span> <span className='font-medium'>Classic</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Countertop Material:</span> <span className='font-medium'>Quartz</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Storage Features:</span> <span className='font-medium'>
                                Pullout drawers and tall storage units                            </span>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center justify-center w-full my-12'>
                    <button className='px-20 py-5 mx-auto font-bold text-center text-white bg-red-500 rounded-xl' onClick={handleClick}>Get Free Quote</button>
                </div>
            </div>
            <Modal handleCancel={handleCancel} data={data} inputHandler={onInput} isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleData} />
        </div>
    )
}

export default SpecificDesign;