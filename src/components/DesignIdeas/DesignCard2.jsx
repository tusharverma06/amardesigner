import React, { useState } from 'react'
import Liked from '../../assets/liked.svg'
import UnLiked from '../../assets/unliked.svg'

const DesignCard = ({ thumbnail, title, feet }) => {
    const [isLiked, setIsLiked] = useState(false)
    const handleToggle = ()=> setIsLiked(!isLiked)
    return (
        <div className='flex flex-col items-center justify-between w-11/12 max-w-md gap-3 pb-4  mx-auto relative rounded-lg shadow-xl sm:w-[45%] lg:w-[30%] drop-shadow-sm' >
        
        <div className="absolute flex items-center justify-center w-12 h-12 top-4 right-4 bg-white rounded-xl cursor-pointer" onClick={handleToggle}>
                  {isLiked 
                  ?
                  <img src="https://img.icons8.com/ios-filled/30/EB595F/like--v1.png" alt=""  className='block object-contain w-6 h-6 mx-auto'/>
                  :
                  <img src="https://img.icons8.com/ios/30/like--v1.png"  alt=""  className=' transition-all block object-contain w-6 h-6 mx-auto'/>
                }  
                </div>
                <img src={thumbnail} alt="" className='object-cover w-full rounded-t-lg' />
                <span className="flex items-center justify-start w-full px-3 text-xl font-medium text-gray-800">{title}</span>
                <span className="flex items-center justify-start w-full px-3 text-sm font-medium text-gray-500">Size:&nbsp;{feet} &nbsp; feet</span>
   <div className="flex flex-row justify-between gap-5 ">
<button className='bg-white rounded-3xl border-[#EB595F] px-5 sm:px-5  py-3 border-[1px] text-[#EB595F] font-semibold text-[8px] sm:text-sm tracking-wider whitespace-nowrap '>Book Free Consultations</button>
<button className='bg-[#EB595F] text-white px-4 sm:px-10  sm:py-2 font-medium lg:text-sm whitespace-nowrap sm:text-sm text-xs rounded-3xl '>Get Quote</button>
   </div>
        </div>
    )
}

export default DesignCard