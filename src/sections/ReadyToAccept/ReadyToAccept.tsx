import React from 'react'
import { Button } from '../../Components/Button/Button'
import { Link } from 'react-router'
import { bitcoinImg, lImg, rImg, usdImg } from '../../assets/images'
import { motion, Variants } from "framer-motion"

const ReadyToAccept = () => {
    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: (custom: number) => ({
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: custom,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };
    return (
        <section className='flex bg-background-main w-full padding-x padding-y justify-center items-center max-container'>
            <div className='w-full overflow-hidden relative flex items-center justify-center flex-col bg-background-sub max-w-screen-xl mx-auto lg:min-h-screen md:min-h-[70vh] sm:min-h-[70vh] max-412:min-h-[100vh] min-h-[80vh] max-se:min-h-[100vh] max-s8:min-h-[93vh] rounded-2xl px-7 sm:mb-24 mb-20'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex items-center flex-col sm:gap-7 gap-4 w-full max-xl:mt-14 max-lg:mt-0">
                    <motion.h1
                        custom={0.2}
                        variants={fadeIn}
                        className='sm:text-[72px] text-[40px] text-white leading-[1] md:leading-[0.9] tracking-[-0.04em] md:tracking-[-0.04em] font-calsans text-center'>
                        Ready to Accept <br className="sm:flex hidden" /> That <br className="sm:hidden flex" />Stablecoin Payments?
                    </motion.h1>
                    <motion.p
                        custom={0.4}
                        variants={fadeIn}
                        className='info-text text-white'>
                        Obverse is a Telegram-based AI Agent that lets you send and receive stablecoin payments with a simple message. No friction. No fees. No crypto confusion.
                    </motion.p>
                    <Link to="/" className="mt-10">
                        <motion.div custom={0.6} variants={fadeIn}>
                            <Button variant="normal" size="normal">
                                Get started
                            </Button>
                        </motion.div>
                    </Link>
                </motion.div>
                <img className="absolute -bottom-24 max-sm:-bottom-36 -left-6 max-sm:left-14 w-[250px] max-lg:w-[250px] h-[250px] max-lg:h-[250px] max-sm:h-[250px] max-sm:w-[250px] max-se:h-[225px] flex" src={bitcoinImg} alt="BitCoin Img" />
                <img className="absolute -bottom-10 max-lg:w-[300px] -right-20 max-sm:hidden flex" src={rImg} alt="BitCoin Img" />
                <img className="absolute -top-12 max-sm:-top-32 -right-10 max-sm:-right-8 w-[200px] max-lg:w-[250px] h-[200px] max-lg:h-[250px] max-sm:h-[250px] max-sm:w-[250px] max-se:h-[225px] flex" src={usdImg} alt="BitCoin Img" />
                <img className="absolute -top-20 max-sm:-top-28 -left-14 max-sm:-left-14 w-[250px] max-lg:w-[250px] h-[220px]  max-lg:h-[270px] max-sm:h-[200px] max-sm:w-[200px] max-se:h-[180px] flex" src={lImg} alt="BitCoin Img" />
            </div>
        </section>
    )
}

export default ReadyToAccept
