import React, { useState } from "react"
import { Link } from "react-router"
import { navLinks } from "../../contants"
import { logo, logoText } from "../../assets/icons"
import { Button } from "../Button/Button"
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const MenuIcon = FiMenu as unknown as React.FC
  const XIcon = FiX as unknown as React.FC
 

 

  return (
    <header className="sm:pt-0 pt-0 w-full bg-background-main">
      <nav className="sm:px-20 px-8 flex justify-between py-6 items-center w-full">
        <Link to="/" onClick={closeMenu}>
          <div className="flex gap-2">
            <img src={logo} alt="logo" />
            <img src={logoText} alt="logoText" />
          </div>
        </Link>


        <ul className="lg:flex flex-1 justify-center items-center gap-10 hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <Link to={`/${item.link}`} className="font-figtree text-sm text-gray-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>


        <button className="lg:hidden text-[30px] font-bold text-gray-600" onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </button>


        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-md z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <button className="absolute top-5 right-5 text-[30px] text-gray-600" onClick={closeMenu}>
           <XIcon />
          </button>
          {/* MobileNav */}

          <ul className="flex flex-col items-start px-6 pt-20 space-y-6">
            {navLinks.map((item) => (
              <li key={item.label} className="w-full">
                <Link
                  to={`/${item.link}`}
                  className="block font-babas text-lg text-gray-600 py-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MpbileButton */}

          <Button
            className="flex lg:hidden bg-background-sub text-white mt-10 ml-5"
            
            size="normal"
          >Get started</Button>
        </div>

        <Button
          className="hidden lg:flex"
          variant="normal"
          size="normal"
        >Get started</Button>
      </nav>
    </header>
  )
}

export default Navbar

