import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./style.css";

const Navbar = () => {
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenNavLink = () => {
    setIsOpen(true);
  };

  const handleCloseNavLink = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-[100%] bg-white shadow-md fixed z-30">
      <div className=" lg:max-w-[1280px] md:max-w-[1280px] mx-auto py-[20px] px-[25px] md:py-[25px] lg:py-[25px] md:px-[40px] lg:px-[40px] flex items-center justify-between relative ">
        <div className=" text-[20px] font-[700] text-[#2d2e32] ">
          Madhav.dev
        </div>
        <div className="flex items-center">
          {isTabletScreen ? (
            <div>
              <button onClick={handleOpenNavLink}>
                <GiHamburgerMenu size={22} />
              </button>
            </div>
          ) : (
            <ul className="flex items-center gap-x-8  font-[600] text-[#2d2e32]">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#0a66c2] text-[1.1rem] transition-all duration-200 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#0a66c2] text-[1.1rem] transition-all duration-200 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#0a66c2] text-[1.1rem] transition-all duration-200 "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#0a66c2] text-[1.1rem] transition-all duration-200 "
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        {isOpen && (
          <div className="mobileNavbar  w-[100%] h-[100vh] bg-white text-[#2d2e32] absolute left-0 top-4 origin-left  transition-all duration-200   ">
            <div
              onClick={handleCloseNavLink}
              className="flex justify-end mr-[23px] mt-[8px]"
            >
              <RxCross2 size={24} />
            </div>
            <ul className=" w-[100%] h-[100%] flex flex-col items-center gap-y-8 pt-8  font-[600] text-[#2d2e32]">
              <li onClick={handleCloseNavLink}>
                <a href="#home">Home</a>
              </li>
              <li onClick={handleCloseNavLink}>
                <a href="#about">About</a>
              </li>
              <li onClick={handleCloseNavLink}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={handleCloseNavLink}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
