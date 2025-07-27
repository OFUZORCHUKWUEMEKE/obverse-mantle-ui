import React from 'react'
import { PaymentAppItesm } from '../../contants'

const PaymentApp = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-5 padding-t padding-x padding-y padding-b w-full max-container bg-background-main'>
      <div className="flex flex-col gap-20 lg:p-10">
        {
          PaymentAppItesm.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center gap-10 ${index === 1 ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'} w-full`}
            >

              <div className="flex flex-col flex-1 gap-5 lg:w-1/2">
                <h2 className="xl:text-[66px] lg:text-[50px] leading-text text-[34px] text-pale-brown tracking-text font-calsans max-sm:text-center">{item.label}</h2>
                <p className="sm:text-[16px] text-[13px] md:max-w-lg font-figtree text-[#742b17] max-sm:text-center">{item.text}</p>
              </div>
              <img
                src={item.icon} alt={item.label} className="lg:w-1/2 md:w-[500px] w-full object-contain object-center "
              />

            </div>
          ))
        }
      </div>
    </section>
  )
}

export default PaymentApp
