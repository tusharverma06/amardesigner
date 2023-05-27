import React from 'react'
import { motion } from 'framer-motion';
import DesignCard2 from './DesignCard2';
import { DesignIdeas1 } from './dummyData';
import ContactPage from './ContactPage'
const DesignCategory = () => {
  return (
    <div>
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
                    <h1 className='text-2xl font-bold text-start sm:text-4xl md:text-5xl lg:text-6xl'>Modular Kitchen Designs
                    </h1>
                </div>
                <p className='w-full text-sm font-medium leading-6 text-left sm:text-lg lg:text-xl '>

                    Discover the epitome of home interior design at <span className='font-semibold'>Amar Designs</span>. We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen designs can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs of 2023 to transform your space today.              </p>
            </section>

            {/*All Designs */}
            <section className='flex flex-col items-center justify-center w-5/6 gap-12 mb-36 md:gap-10 lg:gap-5 xl:gap-12 sm:flex-row sm:flex-wrap sm:gap-y-8 lg:gap-y-16 '>
                {DesignIdeas1.map((idea, index) => <DesignCard2
                title={idea.title}
                key={index}
                thumbnail={idea.thumbnail}
                feet={idea.feet}
                />)}
            </section>

<ContactPage/>

        </div>
    </div>
  )
}

export default DesignCategory