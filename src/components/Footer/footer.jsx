import React from 'react'
import LogoWhite from '../../assets/LogoLogoWhite.svg'
import Phone from '../../assets/Phone.png'
const footer = () => {
    return (
        <div className='flex items-center justify-between lg:justify-around w-full px-2 py-4 lg:py-12 my-8 bg-red-500 text-[#fffc]'>
            <div className="flex flex-col items-center justify-center gap-5">
                <div>
                    <img src={LogoWhite} alt="" className='w-24 sm:w-32 lg:w-44' />
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-7 lg:px-12">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Twitter" className="w-5 h-5 cursor-pointer lg:w-8 lg:h-8 hover:scale-110" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="w-5 h-5 cursor-pointer lg:w-8 lg:h-8 hover:scale-110" />
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-5 h-5 cursor-pointer lg:w-8 lg:h-8 hover:scale-110" />
                    <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="Reddit" className="w-5 h-5 cursor-pointer lg:w-8 lg:h-8 hover:scale-110" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-2 sm:gap-5">
                <h1 className="text-[10px] sm:text-[18px] lg:text-[24px] whitespace-nowrap text-white">Offerings 👇</h1>
                <p className="text-[8px] lg:text-[16px] whitespace-nowrap text-start w-full cursor-pointer">Interior Designs</p>
                <p className="w-full text-[8px] lg:text-[16px] text-start whitespace-nowrap cursor-pointer ">Home Dsigning</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-6">
                <h1 className="text-[10px] text-white text-start sm:text-[18px] lg:text-[24px]">Contact Us</h1>
                <div className="flex items-center justify-start w-full gap-2">
                    <img  className='text-[8px] w-3 h-3 lg:w-6 lg:h-6'src={Phone} alt="phone" />
                    <span className='text-[8px] lg:text-[16px] text-[#fffc]'> +91 9231XXXX96</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <img  className='text-[8px] w-3 h-3 lg:w-6 lg:h-6'src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="phone" />
                    <span className='text-[8px] lg:text-[16px]'>amardesign123@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default footer