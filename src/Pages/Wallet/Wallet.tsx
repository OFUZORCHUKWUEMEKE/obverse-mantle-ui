import React, { useState } from "react";
import { topT, topT2, transactions } from "../../contants";
import { Link } from "react-router";
import { logo, logoText, walletIcon, walletIconDark } from "../../assets/icons";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { Button } from "../../Components/Button/Button";
// import { RiWalletLine } from "react-icons/ri";
import { FaSearch, FaTimes } from "react-icons/fa";

const Wallet = () => {
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
  const SearchIcon = FaSearch as unknown as React.FC;
  const TimesIcon = FaTimes as unknown as React.FC;


  return (
    <div className="min-h-screen overflow-x-auto bg-gray-100 dark:bg-black dark:text-white padding-x">

      <header className="sm:px-20 px-2 flex justify-between py-6 items-center w-full bg-white dark:bg-black">
        <Link to="/">
          <div className="flex gap-2">
            <img src={logo} alt="logo" className="max-s20:w-7" />
            <img src={logoText} alt="logoText" className="max-s20:w-24" />
          </div>
        </Link>

        <div className="flex items-center sm:gap-4 gap-2">
          <h2 className="sm:text-[20px] text-[12px] max-s8:text-[10px] font-sans font-medium  leading-text tracking-text dark:text-white text-slate-gray">John Tony transactions</h2>
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

 
      <div className="flex flex-col justify-center items-center gap-10 dark:bg-background-paymentDark bg-background-payment text-white text-center py-20 rounded-[15px] mb-10">
        <button
          className="flex justify-center items-center "
        >
          {darkMode ? <img src={walletIconDark} alt="Wallet Icon Dark" /> : <img src={walletIcon} alt="WalletIcon" />}
        </button>
        <div className="flex flex-col gap-2">
          <h2 className="text-[40px] font-calsans leading-text tracking-text font-bold">$20,0000</h2>
          <p className="text-[14px] font-figtree">Total transactions</p>
        </div>

      </div>

     
      <div className="p-6 overflow-x-auto bg-[#F5F7FA] dark:bg-[#191B1F] rounded-[15px] dark:rounded-[20px]">
       
        <div className="flex max-md:flex-col-reverse gap-5 w-full justify-between items-center">
          <div className="grid justify-center items-center sm:w-1/2 w-full grid-cols-4 bg-white shadow-md dark:bg-black rounded-[10px]">
            {topT.map((item) => (
              <div key={item.id} className="p-3 text-center rounded-sm font-figtree text-md text-slate-gray transition-all duration-300 ease-in-out hover:bg-[#F5F7FA] hover:text-black dark:hover:text-white  dark:hover:bg-[#191B1F]  hover:px-5 hover:py-2 hover:rounded-[10px]">{item.label}</div>
            ))}
          </div>
          <div className="relative w-full max-w-sm">
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-1 top-1/2 -translate-y-1/2 rounded-none hover:rounded-[10px] text-gray-400 bg-none dark:bg-none dark:hover:bg-gray-700 cursor-pointer" >
              <SearchIcon />
            </Button>

            <input
              type="text"
              placeholder="Search.."
              className="w-full pl-12 pr-10 py-3 text-md font-figtree text-[#99A0AE] border border-gray-300 dark:bg-black focus:outline-none focus:shadow-md rounded-[10px]"
            />

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-[10px] text-gray-400 bg-gray-200 dark:bg-gray-700 cursor-pointer">
              <TimesIcon />
            </Button>

          </div>
        </div>

        <div className="flex flex-col min-w-[900px] mt-5 overflow-x-auto w-full border-separate border-spacing-y-5">
          <div className="grid justify-center items-center w-full grid-cols-5 bg-white shadow-md dark:bg-black rounded-[10px]">
            {topT2.map((item) => (
              <div key={item.id} className="p-3 rounded-sm font-figtree text-md text-slate-gray transition-all duration-300 ease-in-out hover:bg-[#F5F7FA] hover:text-black dark:hover:text-white  dark:hover:bg-[#191B1F]  hover:px-5 hover:py-2 hover:rounded-[10px]">{item.label}</div>
            ))}
          </div>
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="grid mt-2 grid-cols-5 border-b text-sm font-figtree text-[#525866] dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="p-3 text-sm dark:text-[#99a0ae]">{tx.id}</div>
              <div className="p-3">{tx.amount}</div>
              <div className="p-3">{tx.date}</div>
              <div className="p-3 truncate">{tx.description}</div>
              <div className="p-3">{tx.liquidity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;


