import React from "react"
import { Link } from "react-router"
import { Button } from "../../Components/Button/Button"
import { bitcoinImg, handePhoneSm, handPhone, lImg, rImg, usdImg } from "../../assets/images"

const Hero = () => {
    return (
        <section className='flex bg-background-main w-full padding-x padding-y justify-center items-center max-container'>
            <div className='w-full relative flex flex-col bg-background-sub max-w-screen-xl mx-auto lg:min-h-[100vh] min-h-[90vh] max-se:min-h-[120vh] rounded-2xl px-7 sm:pt-14 pt-10'>
                <div className="flex items-center flex-col sm:gap-7 gap-4 w-full max-xl:mt-14 max-lg:mt-0">
                    <h1 className='sm:text-[72px] text-[40px] text-white leading-[1] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.04em] font-calsans text-center'>
                        Stablecoin Payments<br className="sm:flex hidden" /> That <br className="sm:hidden flex" /> feel Like Chat
                    </h1>
                    <p className='info-text text-white'>
                        Obverse is a Telegram-based AI Agent that lets you send and receive stablecoin payments with a simple message. No friction. No fees. No crypto confusion.
                    </p>
                    <Link to="/" className="mt-10">
                        <Button
                            variant="normal"
                            size="normal"
                        >Get started</Button>
                    </Link>
                </div>
                <div className="w-full mx-auto lg:flex hidden justify-between flex-1 items-center px-10 max-xl:px-0 mb-32 ">
                    <div className="flex flex-col space-y-24">
                        <img src={lImg} alt="left-coin" className="w-[269px] h-[182px]"/>
                        <img src={bitcoinImg} alt="Bitcoin" className="w-[320px] max-xl:w-[295px] h-[320px]"/>
                    </div>
                    <div className="flex flex-col space-y-24">
                        <img src={usdImg} alt="Usdcoin" className="w-[270px] h-[270px]"/>
                        <img src={rImg} alt="right-coin" className="w-[210px] max-xl:[200px] h-[142px]"/>
                        
                    </div>
                </div>
                <img className="absolute lg:flex hidden bottom-[0%] left-1/2 -translate-x-[30%] w-[590px] h-[680px] max-xl:w-[550px]" src={handPhone} alt="Holding Phone"/>
                <img className="absolute bottom-0 right-0 w-[305px] max-pro:w-[280px] h-[434px] max-pro:h-[380px] sm:hidden flex" src={handePhoneSm} alt="Holding Phone Mobile"/>
            </div>
        
        </section>
    )
}

export default Hero
