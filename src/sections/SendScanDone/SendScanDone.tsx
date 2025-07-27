import React from 'react'
import { SSD } from '../../contants'
import SSDCard from '../../Components/SSDcard/SSDCard'

const SendScanDone = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-5 padding-t max-sm:padding-x padding-b w-full max-container bg-background-main border-t border-slate-300 overflow-hidden'>
      <div className='flex flex-col gap-2 sm:mt-5 mt-7 items-center'>
        <h1 className='sm:text-[72px] text-[36px] tracking-text font-calsans text-[#2e1109]'>Send. Scan. Done.</h1>
        <p className='info-text text-[#742B17]'>Obverse turns your Telegram into a powerful payment tool. No apps. No wallets to build. Just one command.</p>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 w-full xl:gap-5 sm:gap-72 gap-6 mt-7 overflow-visible">
        {SSD.map((item, index) => (
          <SSDCard
            key={item.label}
            {...item}
            className={`${index === SSD.length - 1 ? "sm:-mr-5" : ""} ${index === 0 ? "sm:-ml-5" : ""
              }`}
          />
        ))}
      </div>

    </section>
  )
}

export default SendScanDone
