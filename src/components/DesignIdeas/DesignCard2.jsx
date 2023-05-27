import React from 'react'


const DesignCard = ({ thumbnail, title, feet }) => {
    return (
        <div className='flex flex-col items-center justify-between w-11/12 max-w-md gap-3 pb-4 mx-auto  rounded-lg shadow-xl sm:w-[45%] lg:w-[30%] drop-shadow-sm' >
                <img src={thumbnail} alt="" className='object-cover w-full rounded-t-lg' />
                <span className="flex items-center justify-start w-full px-3 text-xl font-medium text-gray-800">{title}</span>
                <span className="flex items-center justify-start w-full px-3 text-sm font-medium text-gray-500">Size:&nbsp;{feet} &nbsp; feet</span>
   <div className="flex flex-row justify-between gap-5 ">
<button className='bg-white rounded-3xl border-[#EB595F] px-5 py-3 border-[1px] text-[#EB595F] font-semibold text-xs sm:text-sm tracking-wider '>Book Free Consultations</button>
<button className='bg-[#EB595F] text-white px-10 py-2 font-medium lg:text-sm sm:whitespace-nowrap sm:text-xs rounded-3xl '>Get Quote</button>
   </div>
        </div>
    )
}

export default DesignCard