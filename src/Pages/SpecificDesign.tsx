import React, { useState } from 'react'
import LikeIcon from '../assets/liked.svg'
import LinkCopied from '../assets/LinkCopied.png'
// import Feature from '../components/DesignIdeas/Specific Design/Feature'
// import { features } from '../components/DesignIdeas/dummyData'
import { motion } from 'framer-motion';
import Modal from '../components/DesignIdeas/Specific Design/Modal.tsx'
import { useLocation, useParams } from 'react-router-dom'
import BackArrow from '../assets/back-arrow.svg'
import { Link } from 'react-router-dom'
import { nameShortner } from '../utils/utils'
const SpecificDesign = () => {
    // const navigate = useNavigate()
    const location = useLocation()
    const { thumbnail, DesignData, index, feet } = location.state
    console.log(location.state)
    const { designCategory, designName } = useParams()
    const [isCopied, setIsCopied] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // Free quote popup
    const handleClick = () => setIsOpen(!isOpen)
    const handleShare = () => {

        navigator.clipboard.writeText(
            `http://localhost:3000/design-ideas/${designCategory}/${designName}`
        );
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

    // Navigating projects
    // const handlePreviousNavigation = () => {
    //     navigate(`/design-ideas/${designCategory}/${DesignData[index!==0 && index - 1]}`)
    // }
    // const handleNextNavigation = () => {
    //     navigate(`/design-ideas/${designCategory}/${DesignData[index!== DesignData.length && index + 1]}`)
    // }
    return (

        <div className='flex flex-col items-center justify-between w-full xl:flex-row max-w-[2000px] mx-auto'>
            {/* Image thumbnail */}
            <div className='w-full xl:w-[60%] flex items-center flex-col justify-between gap-4'>
                <img src={thumbnail} alt="" className="block h-full mx-auto xl:w-11/12 " />
                <div className="flex items-center justify-between w-full px-2">
                    <div className='flex items-center justify-between'>
                        <button className='flex items-center justify-center gap-1' onClick={null}>
                            <img src={BackArrow} alt="" className='w-8 h-8 -rotate-90' />
                            <img src={thumbnail} alt="" className='h-8 w-14 sm:w-20 sm:h-10' />
                        </button>
                        <div className="flex flex-col items-start justify-start gap-1">
                            <span className="px-2 text-sm font-medium sm:text-base">Previous </span>
                            <span className="block px-2 text-xs font-medium w-max sm:hidden">{nameShortner('Classic L-Shaped Modular Kitchen Design With Patterned Moroccan Tiles', 10)}</span>
                            <span className="hidden px-2 text-base font-medium sm:block">{nameShortner('Classic L-Shaped Modular Kitchen Design With Patterned Moroccan Tiles', 25)}</span>
                            </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="flex flex-col items-end justify-start gap-1">
                            <span className="px-2 text-sm font-medium sm:text-base">Next</span>
                            <span className="block px-2 text-xs font-medium w-max sm:hidden">{nameShortner('Modern Modular L-Shaped Kitchen Design With Open Storage', 10)}</span>
                            <span className="hidden px-2 text-base font-medium sm:block">{nameShortner('Modern Modular L-Shaped Kitchen Design With Open Storage', 25)}</span>
                        </div>
                        <button className='flex items-center justify-center gap-1' onClick={null}>
                            <img src={'https://images.livspace-cdn.com/w:1440/dpr:1/q:100/plain/https://d3ai42rl8fy79o.cloudfront.net/media/public/da196bb2-e162-4707-bf2e-4acadb78de65.jpg'} alt="" className='h-8 w-14 sm:w-20 sm:h-10' />
                            <img src={BackArrow} alt="" className='w-8 h-8 rotate-90' />
                        </button>
                    </div>
                </div>
            </div>
            {/* Design  Details  */}
            <div className="flex flex-col items-start justify-center w-full  xl:w-[40%] ">
                {/* Navigation */}
                <div className="flex items-start justify-start w-full px-4 pt-10 xl:pt-24 ">
                    <Link className="font-medium text-red-500 text-[8px] sm:text-sm md:text-base hover:text-red-500" to={'/'}>Home/</Link>
                    <Link className="font-medium text-red-500 text-[8px] sm:text-sm md:text-base hover:text-red-500" to={'/design-ideas'}>Design-Ideas/</Link>
                    <Link className="font-medium text-red-500 text-[8px] sm:text-sm md:text-base hover:text-red-500" to={`/design-ideas/${designCategory}`}>{designCategory}/</Link>
                    <Link className="font-medium text-gray-500 text-[8px] sm:text-sm md:text-base hover:text-gray-500" to={`/design-ideas/${designCategory}/${designName}`}>{nameShortner(designName, 20)}</Link>
                </div>
                <div className='flex items-center justify-between w-full h-full gap-6 px-4 overflow-y-auto xl:pr-12'>
                    <h1 className='pt-8 text-xl font-black text-start md:max-w-3xl sm:text-2xl xl:text-3xl xl:max-w-lg'>{designName}</h1>
                    <div className="flex items-center justify-center gap-2">
                        <button className={`relative flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border border-gray-500 rounded-full`} onClick={handleShare}>
                            <img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSbB_7FEkfvGkYYnk8bYlE8046nTjiDWcUrt85XE6r476kCVgxuJQmYs2RNnCYTEnG-" alt="" className="block w-4 h-4 mx-auto lg:w-6 lg:h-6" />

                            {isCopied &&
                                <div className="absolute flex items-center justify-end -right-10 bottom-8 w-36">
                                    <img src={LinkCopied} alt="" className='w-28' />
                                </div>
                            }
                        </button>
                        <button className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 border  ${isLiked ? 'border-red-500' : 'border-gray-500'}  rounded-full`} onClick={handleLike}>
                            <img src={isLiked ? LikeIcon : 'https://cdn-icons-png.flaticon.com/512/57/57602.png'} alt="" className="block w-4 h-4 mx-auto lg:w-5 lg:h-5" />
                        </button>
                    </div>
                </div>
                {/* Features */}
                {/* <div className="flex items-center justify-between w-full gap-2 px-6 my-8 overflow-auto sm:justify-evenly">
                    {features.map((feature, index) => {
                        return <Feature
                            img={feature.img}
                            key={index}
                            featureName={feature.featureName}
                        />
                    })}

                </div> */}
                <div className='flex flex-col items-start justify-center w-full gap-6 px-4 my-8'>
                    <h1 className="flex flex-col items-center justify-center text-xl font-semibold text-start">
                        Kitchen Design Details:
                        <motion.span
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            className="transition-all duration-1000  bg-red-600 h-0.5">
                        </motion.span>
                    </h1>
                    <ul className='space-y-4 '>
                        <li>
                            <span className="font-semibold">• Layout:</span> <span className='font-normal'>L-shaped</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Room Dimension:</span> <span className='font-normal'>13 X 11 Feet</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Style:</span> <span className='font-normal'>Classic</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Countertop Material:</span> <span className='font-normal'>Quartz</span>
                        </li>
                        <li>
                            <span className="font-semibold">• Storage Features:</span> <span className='font-normal'>
                                Pullout drawers and tall storage units                            </span>
                        </li>
                    </ul>
                    <span className="text-lg font-medium">Size: {feet} feet</span>
                </div>
                <div className='flex items-center justify-center w-full my-12'>
                    <button className='w-11/12 px-20 py-4 mx-auto font-bold text-center text-white bg-red-500 rounded-2xl' onClick={handleClick}>Get Free Quote</button>
                </div>
            </div>
            <Modal handleCancel={handleCancel} data={data} inputHandler={onInput} isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleData} />
        </div>
    )
}

export default SpecificDesign;