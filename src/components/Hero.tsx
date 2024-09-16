import hiImage from "../assets/Hi.png";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import htmlImage from "../assets/html.svg";
import javascriptImage from "../assets/javavscript.svg";
import reactImage from "../assets/react.svg";
import tailwindImage from "../assets/tailwind.svg";
import "./style.css";

const Hero = () => {
  return (
    <div
      id="home"
      className=" max-w-[100%] pt-[8rem] md:pt-[10rem] lg:pt-[12rem] pb-[3rem] flex items-center justify-center bg-[#f9f9f9]"
    >
      <div className=" w-[1100px] px-[40px] ">
        <div className=" flex  flex-col-reverse gap-6 lg:flex-row md:flex-row items-center lg:justify-between  ">
          <div className=" flex flex-col gap-[1rem] max-w-[30rem] ">
            <h1 className=" text-center text-[40px]   lg:text-left  md:text-left sm:text-[55px] md:text-[55px] lg:text-[55px] font-[700] text-[#2d2e32] leading-[4rem]">
              Front-End React Developer
              <img
                src={hiImage}
                alt="hi-Emoji"
                className=" hidden  sm:h-[3rem] sm:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] md:h-[3.5rem] md:w-[3.5rem] sm:inline ml-4 mb-3"
              />
            </h1>
            <p className="text-[#555555] text-balance  text-[18px]  text-center md:text-left lg:text-left ">
              Hi, I'm Madhav Singh. A passionate Front-end React Developer based
              in Aligarh, India. 📍
            </p>
            <div className="flex gap-[1rem] items-center justify-center md:justify-start lg:justify-start ">
              <a
                href="https://www.linkedin.com/in/madhav-singh-49729626a"
                className=" hover:text-[#0a66c2] transition-all duration-300  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandLinkedin size={32} />
              </a>
              <a
                href="https://github.com/madhavsingh63"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-[#0a66c2] transition-all duration-300  "
              >
                <FiGithub size={26} />
              </a>
            </div>
          </div>
          <div
            className="profile_picture w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] bg-profile-picture 
          bg-no-repeat bg-cover bg-center border-[3px] border-[#2d2e32]  "
          ></div>
        </div>
        <div className=" w-[100%] flex flex-col md:flex-row justify-center md:justify-start lg:justify-start items-center mt-[4rem] gap-8 md:gap-[4rem] lg:gap-[4rem] ">
          <p className=" max-w-fit  text-[#2d2e32] text-[17px] font-[600] text-center pb-2 md:pb-0 lg:pb-0  md:pr-[1.5rem]  lg:pr-[1.5rem] border-b-2 md:border-b-0 lg:border-b-0  md:border-r-2 lg:border-r-2 border-[#2d2e32]">
            Tech Stack
          </p>
          <div className="flex  items-center justify-center gap-[2rem] flex-wrap ">
            <img
              src={htmlImage}
              alt="HTML-CSS"
              className=" hover:-translate-y-4 transition-all duration-300 "
            />
            <img
              src={javascriptImage}
              alt="Javascript-Typescript"
              className=" hover:-translate-y-4 transition-all duration-300 "
            />
            <img
              src={reactImage}
              alt="React-Next"
              className=" hover:-translate-y-4 transition-all duration-300 "
            />
            <img
              src={tailwindImage}
              alt="TailwindCSS-Sass"
              className=" hover:-translate-y-4 transition-all duration-300 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
