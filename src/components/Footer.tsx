import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" w-[100%] px-[20px] md:px-[50px] lg:px-[50px] py-[1.5rem] md:py-[3rem] lg:py-[3rem]  bg-[#2d2e32]">
      <div className=" max-w-[1100px] mx-auto  flex flex-col gap-4 md:flex-row lg:flex-row items-center  md:justify-between lg:justify-between  ">
        <p className=" text-[1.1rem] text-center text-balance font-[700] text-[#fff]">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex gap-[1rem] items-center">
          <a
            href="https://www.linkedin.com/in/madhav-singh-49729626a"
            className=" hover:scale-110   transition-all duration-300  "
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLinkedin size={32} color="white" />
          </a>
          <a
            href="https://github.com/madhavsingh63"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-110   transition-all duration-300  "
          >
            <FiGithub size={26} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
