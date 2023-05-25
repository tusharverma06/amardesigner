import React from 'react'
import { Link } from 'react-router-dom'

const DesignCard = ({ thumbnail, title, noOfDesigns }) => {
    return (
        <Link to={`/design-ideas/${title}`} className='flex flex-col items-center justify-between w-11/12 max-w-md gap-3 pb-4 mx-auto  rounded-lg shadow-xl sm:w-[45%] lg:w-[30%] drop-shadow-sm' >
                <img src={thumbnail} alt="" className='object-cover w-full rounded-t-lg' />
                <span className="flex items-center justify-start w-full px-3 text-xl font-medium text-gray-800">{title}</span>
                <span className="flex items-center justify-start w-full px-3 text-sm font-medium text-gray-500">{noOfDesigns}  Designs</span>
        </Link>
    )
}

export default DesignCard