import React from 'react'
import { WhatMakes1, WhatMakes2 } from '../../contants'
import { isTemplateSpan } from 'typescript'

const WhatMakes = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-5 padding-t padding-x padding-y padding-b w-full max-container bg-background-main'>
            <div className='flex items-center'>
                <h1 className='sm:text-[55px] text-[36px] leading-text tracking-text font-calsans text-[#2e1109] text-center'>What Makes Obverse <br/> Different?</h1>
            </div>
            <div className="grid gap-6 w-full lg:px-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
                    {
                        WhatMakes1.map((item) => (
                            <div key={item.label} className="bg-background-card rounded-[40px] flex flex-col lg:gap-5 p-4">
                                <img src={item.icon} alt={item.label} className='flex h-[320px] w-[320px] items-center justify-center self-center object-contain object-center' />
                                <div className='flex flex-col items-start gap-2'>
                                    <h3 className='text-2xl font-semibold font-figtree flex text-brown'>{item.label}</h3>
                                    <p className='text-[#000000] sm:text-[16px] text-[12px] md:max-w-lg font-figtree'>{item.text}</p>
                                </div>
                            </div>

                        ))
                    }</div>


                {/* <!-- Bottom row with 3 equal items --> */}
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                   {
                        WhatMakes2.map((item) => (
                            <div key={item.label} className="bg-background-card rounded-[40px] flex flex-col lg:gap-5 p-4">
                                <img src={item.icon} alt={item.label} className='flex h-[320px] w-[320px] items-center justify-center self-center object-contain object-center' />
                                <div className='flex flex-col items-start gap-2'>
                                    <h3 className='text-2xl font-semibold font-figtree flex text-brown'>{item.label}</h3>
                                    <p className='text-[#000000] sm:text-[16px] text-[12px] md:max-w-lg font-figtree'>{item.text}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default WhatMakes
