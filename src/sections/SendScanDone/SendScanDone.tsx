import React from 'react'
import { SSD } from '../../contants'
import SSDCard from '../../Components/SSDcard/SSDCard'

const SendScanDone = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-5 padding-t padding-x padding-y padding-b w-full max-container bg-background-main border-t border-slate-300 '>
      <div className='flex flex-col gap-2 sm:mt-5 mt-7 items-center'>
        <h1 className='sm:text-[72px] text-[36px] tracking-text font-calsans text-[#2e1109]'>Send. Scan. Done.</h1>
        <p className='info-text text-[#742B17]'>Obverse turns your Telegram into a powerful payment tool.  No apps. No wallets to build. Just one command.</p>
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-5 mt-7'>
        {
            SSD.map((item)=>(
                <SSDCard key={item.label} {...item}/>
            ))
        }
      </div>
    </section>
  )
}

export default SendScanDone
