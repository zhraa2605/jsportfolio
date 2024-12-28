import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data'
const Footer = () => {
  return (
    <footer className='w-full mb-[50px] pb-10' id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96 '>
      <img src="/footer-grid.svg" alt='grid' className='w-full h-full opacity-50'/>
      </div>
      <div className='flex flex-col items-center'> 

        <h1 className='heading lg:max-w-[45vw]'>
            Ready to Take <span className='text-purple'>Your</span> Digital presense to the next level
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today and let&apos;s disucss how I can help you achieve your goals
        </p>
        <a href ='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=3dV8k@example.com'>
        <MagicButton title="Let&apos;s Talk" 
        icon={<FaLocationArrow/>} position="right"/>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col items-center justify-between'>
        <p className='md:text-base text-sm font-light'>
            Copyright © 2024 Zahraa 

        </p>
        <div  className='flex items-center gap-6 md:gap-3'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center  items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img src={profile.img} alt="profile"
                    width={20} height={20} />

                </div>
))}

        </div>
      </div>
      </footer>
  )
}

export default Footer
