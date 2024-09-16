import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-[100%] mx-auto max-w-[1100px] px-[20px]  md:px-[50px] lg:px-[50px] py-[5rem] md:py-[7rem]  lg:py-[7rem]  flex flex-col bg-white"
    >
      <div className=" w-[100%] flex flex-col items-center  md:items-start lg:items-start   gap-[10px]">
        <h1 className=" text-[#147efb] font-[700] text-center text-[1.1rem] uppercase ">
          Contact
        </h1>
        <h4 className="  text-[#2d2e32]  text-center text-[1.57rem] font-[700] ">
          Don't be shy! Hit me up! 👇
        </h4>
        <div className=" flex flex-col  md:flex-row  lg:flex-row items-center gap-[2rem] md:gap-[6rem] lg:gap-[6rem]  pt-12">
          <div className=" flex flex-col md:flex-row lg:flex-row   items-center  gap-4">
            <div className=" p-3 rounded-full bg-[#fff]   shadow-lg ">
              <TbMapSearch size={30} color="#1e83fb" />
            </div>
            <div className=" flex flex-col justify-center items-center md:items-start lg:items-start ">
              <p className=" text-[1.1rem]  font-[700] text-[#2d2e32]">
                Location
              </p>
              <p className=" text-[#7e777a]  text-[1.1rem] font-[400] hover:text-[#1e83fb] transition-all duration-200 cursor-pointer  ">
                Aligarh, India
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row lg:flex-row  items-center gap-4">
            <div className=" p-3 rounded-full bg-[#fff]  shadow-lg">
              <MdOutlineLocalPostOffice size={30} color="#1e83fb" />
            </div>
            <div className=" flex flex-col  justify-center  items-center md:items-start lg:items-start ">
              <p className=" text-[1.1rem] font-[700] text-[#2d2e32] ">Mail</p>
              <p className=" text-[#7e777a] text-[1.1rem] font-[400] hover:text-[#1e83fb] transition-all duration-200 cursor-pointer  ">
                <a
                  href="mailto:madhavsing911@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  madhavsing911@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
