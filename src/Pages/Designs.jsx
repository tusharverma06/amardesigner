import React from 'react'
import { motion } from 'framer-motion';
import DesignCard from '../components/DesignIdeas/MainDesignPage/DesignCard';
import { DesignIdeas } from '../components/DesignIdeas/dummyData';
import { Link } from 'react-router-dom';
const Designs = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-12 mx-auto my-12'>
            {/* Heading section */}
            <section className='flex flex-col items-center justify-start w-5/6 gap-4 lg:my-12'>
                <div className="relative flex items-center justify-start w-full gap-2">
                    {/* <img src="" alt="" /> */}
                    <motion.span
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        class="absolute  transition-all duration-1000 w-2 bg-red-600 top-0 left-[-0.8rem]">
                    </motion.span>
                    <h1 className='text-2xl font-bold text-start sm:text-4xl md:text-5xl lg:text-6xl'>Home Interior Designs
                    </h1>
                    {/* Navigation */}
                    <div className="flex items-start justify-end w-1/2 mx-auto my-2">
                        <Link className="font-medium text-red-500 text-[8px] sm:text-sm md:text-base hover:text-red-500" to={'/'}>Home/</Link>
                        <Link className="font-medium text-gray-500 text-[8px] sm:text-sm md:text-base hover:text-gray-500" to={'/design-ideas'}>Design-Ideas</Link>
                    </div>
                </div>
                <p className='w-full text-sm font-medium leading-6 text-left sm:text-lg lg:text-xl'>

                    Discover the epitome of home interior design at <span className='font-semibold'>Amar Designs</span>. Immerse yourself in captivating aesthetics and seamless functionality, creating a sanctuary that reflects your unique style. Our expert team brings your vision to life, crafting exquisite spaces that elevate your living experience. Unleash the transformative power of exceptional design and create a home that inspires awe and comfort.                </p>
            </section>

            {/*All Designs */}
            <section className='flex flex-col items-center justify-center w-5/6 gap-12 mb-36 md:gap-10 lg:gap-5 xl:gap-12 sm:flex-row sm:flex-wrap sm:gap-y-8 lg:gap-y-16 '>
                {DesignIdeas.map((idea, index) => <DesignCard
                    title={idea.title}
                    key={index}
                    thumbnail={idea.thumbnail}
                    noOfDesigns={idea.noOfDesigns}
                />)}
            </section>

        </div>
    )
}

export default Designs;