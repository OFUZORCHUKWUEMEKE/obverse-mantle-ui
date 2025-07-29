import React, { useState } from "react";
import { paymentDarkBg, paymentLightBg } from "../../assets/images";
import { Link } from "react-router";
import { logo, logoText } from "../../assets/icons";
import { Button } from "../../Components/Button/Button";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const Payment = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    const SunIcon = GoSun as unknown as React.FC;
    const MoonIcon = IoMoonOutline as unknown as React.FC;
    return (
        <div
            style={{
                backgroundImage: `url(${darkMode ? paymentDarkBg : paymentLightBg})`,
            }}
            className="min-h-screen flex flex-col items-center   bg-cover bg-no-repeat bg-top  text-gray-800 px-4">

            {/* Header  */}
            <header className="sm:px-20 px-2 flex justify-between py-6 items-center w-full">
                <Link to="/">
                    <div className="flex gap-2">
                        <img src={logo} alt="logo" className="max-s20:w-7" />
                        <img src={logoText} alt="logoText" className="max-s20:w-24" />
                    </div>
                </Link>

                <div className="flex items-center sm:gap-4 gap-2">
                   
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleDarkMode}
                        className="bg-gray-200 dark:bg-gray-700"
                    >
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </div>
            </header>

            {/* Card */}
            <div className="bg-white sm:mt-40 mt-16 dark:bg-[#0e121b] border border-[#E1E4EA] dark:border-[#2B303B] rounded-xl shadow-xl w-full max-w-[600px] p-6">
              
                <div className="flex justify-between items-center mb-4 pb-7 border-b border-gray-300 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                       <img src={logo} alt="logo" className="max-s20:w-7" />
                        <div>
                            <h2 className="text-[24px] text-[#0e121b] dark:text-white font-figtree font-semibold tracking-text">John tony payment</h2>
                            <p className="text-[16px] text-[#525866] dark:text-[#99A0AE] tracking-text">Fill in this few details to pay</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[24px] font-calsans font-bold text-[#E85e38]">$200</div>
                        <div className="text-[16px] text-[#525866] dark:text-[#99A0AE]">0.0023 SOL</div>
                    </div>
                </div>

                
                <form className="space-y-4">
                    <div>
                        <label className="block font-figtree text-[16px] text-[#0E121B] dark:text-white  mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="placeholder:font-figtree w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white text-[#99A0AE] focus:outline-none focus:shadow-md rounded-[10px]"
                        />
                    </div>
                    <div>
                        <label className="block font-figtree text-[16px] text-[#0E121B] dark:text-white  mb-1">Country of residence</label>
                        <select
                            className="placeholder:font-figtree w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white text-[#99A0AE] focus:outline-none focus:shadow-md rounded-[10px]"
                        >
                            <option>Nigeria</option>
                            <option>Ghana</option>
                            <option>Kenya</option>
                            <option>USA</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-figtree text-[16px] text-[#0E121B] dark:text-white  mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="placeholder:font-figtree w-full px-4 py-2 dark:border-gray-700 text-[#99A0AE] border border-gray-300 dark:bg-gray-800 focus:outline-none focus:shadow-md rounded-[10px]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#E7562E] hover:bg-[#E0793E] text-white font-semibold py-3 rounded-[10px]"
                    >
                        Proceed to pay
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Payment
