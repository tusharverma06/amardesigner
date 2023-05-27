import React from 'react'
import contactPageBg from '../../assets/contactPageBg.jpg'
const ContactPage = () => {
  return (
    // <!-- Container for demo purpose -->
    <div className="container w-3/4 mx-auto">

      {/* <!-- Section: Design Block --> */}
      <section className="text-gray-800">
        <div className="flex flex-wrap rounded-xl shadow-xl bg-[#6c4866] ">
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 sm:block hidden w-full md:w-7/12 ">
            <img src={contactPageBg} className='rounded-xl ' alt="" />
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full sm:py-5 flex flex-col justify-center items-center text-white bg- md:w-5/12 px-10 py-10 lg:px-8 lg:py-8">
            <p className="font-bold mb-6 text-center text-2xl ">Designs for Every Budget</p>
            <p className="font-bold mb-6 text-center text-sm">Get your dream home today. Let our experts help you</p>
            <form>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
                  w-full
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  
                  " id="exampleInput7"
                  placeholder="Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
                  w-full
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Email address" />
              </div>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
                  w-full
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Phone number" />
              </div>

              <div className="form-group mb-6">
                <input type="number" className="form-control block
                  w-full
                  px-3
                  py-4
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="PIN Code" />
              </div>



              <button className='bg-[#EB595F] text-white px-10 py-2 font-semibold lg:text-lg  sm:whitespace-nowrap sm:text-md rounded-3xl   w-full text-xs leading-tight uppercase shadow-md transition duration-150  ease-in-out'>Get Free Quote</button>

<div className='flex justify-center mt-9'>
<p className="font-normal w-64  mb-6 text-center ">
By submitting this form, you agree to the  <span className='text-[#EB595F] cursor-pointer' >privacy policy</span> & <span className='cursor-pointer text-[#EB595F]'>terms and conditions</span> 
</p>
</div>


            </form>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}

      {/* <!-- Container for demo purpose --> */}
    </div>
  )
}

export default ContactPage