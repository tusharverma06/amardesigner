import React, { useState } from 'react'
import ProjectImg from '../../assets/Project.svg'
import Star from '../../assets/Star.svg'
import Designer from '../../assets/Designer.svg'
import Liked from '../../assets/liked.svg'
import UnLiked from '../../assets/unliked.svg'

const Card = ({Image, rating, ProjectTitle, address, designerName, designerImage}) => {
    const [isLiked, setIsLiked] = useState(false)
    const handleToggle = ()=> setIsLiked(!isLiked)
    return (
        <div className='w-11/12 sm:w-[276px] cursor-pointer flex flex-col items-center justify-center space-y-2 mx-auto'>
            <div className="relative w-full rounded-lg h-72">
                <img src={ProjectImg} alt="" className='object-cover w-full h-full rounded-xl ' />
                <div className={`absolute w-12 h-12 ${isLiked? 'border-red-500': 'border-white'} rounded-full border-[4px] bottom-6 left-6 flex items-center justify-center`}>
                    <img src={Designer} alt=""  className='block object-contain w-12 h-12 mx-auto'/>
                </div>
                <div className="absolute flex items-center justify-center w-12 h-12 top-4 right-4" onClick={handleToggle}>
                  {isLiked?
                  <img src={Liked} alt=""  className='block object-contain w-6 h-6 mx-auto'/>
                  :
                  <img src={UnLiked} alt=""  className='block object-contain w-6 h-6 mx-auto'/>
                }  
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className='font-medium text-[16px] leading-[26px] text-[#1A1A1A]'>Andheri Project</span>
                <div className="flex items-center justify-center gap-2">
                    <img src={Star} alt="" className='w-[17px] h-[17px]' />
                    <span className='font-normal flex items-center justify-center text-[14px] leading-[26px] text-[#6C6C6C]'>4.2</span>
                </div>
            </div>
            <div className="flex items-center justify-start w-full">
            <span className='font-medium flex items-center justify-center text-[14px] leading-[26px] text-[#6C6C6C]'>Andheri, Mumbai</span>
            </div>
            <div className="flex items-center justify-start w-full">
            <span className='font-medium flex items-center justify-center gap-2 text-[14px] leading-[26px] text-[#6C6C6C]'>Designed By <span className="font-bold text-red-600">Gautam</span></span>
            </div>

        </div>
    )
}

export default Card