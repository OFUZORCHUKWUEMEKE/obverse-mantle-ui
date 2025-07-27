import React from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router'
import { logo, logoText, teleGram, Twitter } from '../../assets/icons'
import { obverse } from '../../assets/images'

const Footer = () => {
  return (
    <section className='flex bg-[#f7c7b9] w-full padding-b padding-r padding-l padding-t justify-center items-center max-container'>
      <div className='w-full flex flex-col sm:gap-12 gap-20'>
        <div className='w-full flex items-center justify-between'>
          <Link to="/">
            <div className="flex gap-2">
              <img src={logo} alt="logo" />
              <img src={logoText} alt="logoText" />
            </div>
          </Link>
          <div className='flex gap-5'>
            <img src={Twitter} alt="Twitter" />
            <img src={teleGram} alt="telegram" />
          </div>
        </div>
        <img src={obverse} alt='Obverse' className='w-full object-contain object-center' />
        <div className='w-full flex items-center justify-between mt-5'>
         <h4 className='sm:text-[16px] text-[14px] font-calsans text-[#561908]'>©2025 Obverse LTD. RC: 7810789</h4>
         <h4 className='sm:text-[16px] text-[14px] font-calsans text-[#561908]'>All rights reserved</h4>
        </div>
      </div>
    </section>
  )
}

export default Footer
