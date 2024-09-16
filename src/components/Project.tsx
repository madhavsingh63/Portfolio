import ecomzyImage from "../assets/ecomzy.png";
import weatherImage from "../assets/weather.png";
import gitHubImage from "../assets/gitHub.png";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

const Project = () => {
  return (
    <div
      id="projects"
      className=" max-w-[100%] py-[5rem] md:py-[7rem]  lg:py-[7rem]   flex items-center justify-center bg-[#f9f9f9]"
    >
      <div className=" w-[1100px] px-[20px] md:px-[40px] lg:px-[40px] flex flex-col  gap-[5rem] ">
        {/* heading section */}
        <div className="  flex flex-col gap-[10px]">
          <h1 className=" text-[#147efb] font-[700] text-balance text-center md:text-left lg:text-left text-[1.5rem] ">
            Portfolio
          </h1>
          <h4 className="  text-[#2d2e32] text-balance text-center md:text-left lg:text-left  text-[1.8rem] font-[700]">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        {/* Project 1 */}
        <div className=" w-[100%]   flex flex-col md:flex-row lg:flex-row items-center  gap-[3rem] ">
          {/* Image Container */}
          <div className=" w-[100%] md:w-[55%] lg:w-[55%] rounded-md   overflow-hidden">
            <img
              src={ecomzyImage}
              alt="project-image-2"
              className=" aspect-video"
            />
          </div>
          {/* Text Container */}
          <div className=" w-[100%] md:w-[40%] lg:w-[40%]    flex flex-col items-center text-balance text-center gap-4">
            <h3 className=" font-[700] text-[1.4rem]">Ecomzy Shop 🛒</h3>
            <p className=" text-[1rem] font-[500] text-center text-balance text-[#767676] ">
              Ecomzy shop platform that allows users to browse, select, and add
              items to their cart for purchase. The cart provides an intuitive
              experience by automatically calculating the total sum of all
              items.
            </p>
            <div className=" font-[600] text-[1.2rem]  flex items-center gap-8 ">
              <FaReact
                size={30}
                color="#58c4dc"
                className=" hover:scale-125 transition-all duration-200"
              />
              <RiTailwindCssFill
                size={30}
                color="#38bdf8"
                className=" hover:scale-125 transition-all duration-200"
              />
            </div>
            <div className=" w-[100%] font-[600] text-[1.2rem]  flex gap-8 justify-center items-center">
              <a
                href="https://github.com/madhavsingh63/Shopping-Cart.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Code</p>
                  <FaGithub size={24} />
                </div>
              </a>
              <a
                href="https://ecomzy-shop-cart.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="  flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Live</p>
                  <HiExternalLink size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Project2 */}
        <div className=" w-[100%]   flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center   gap-[3rem]  ">
          {/* Image Container */}
          <div className="w-[100%] md:w-[55%] lg:w-[55%]  rounded-md  overflow-hidden">
            <img
              src={weatherImage}
              alt="project-image-2"
              className=" aspect-video"
            />
          </div>
          {/* Text Container */}
          <div className="w-[100%] md:w-[40%] lg:w-[40%]    flex flex-col items-center text-balance text-center gap-4">
            <h3 className=" font-[700]  text-[1.4rem]">Weather App ⛅</h3>
            <p className="text-[1rem] font-[500] text-center text-balance text-[#767676]">
              The Weather App allows users to get real-time weather information
              for their current location. Also, Users can search for weather
              details of any city.
            </p>
            <div className="flex items-center gap-6 ">
              <FaHtml5
                size={30}
                color="#e14e1d"
                className=" hover:scale-125 transition-all duration-200"
              />
              <FaCss3Alt
                size={30}
                color="#0277bd"
                className=" hover:scale-125 transition-all duration-200"
              />
              <SiJavascript
                size={26}
                color="#f0db4f"
                className=" hover:scale-125 transition-all duration-200"
              />
            </div>
            <div className=" w-[100%] font-[600] text-[1.2rem]  flex gap-8 justify-center items-center ">
              <a
                href="https://github.com/madhavsingh63/Weather-App.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Code</p>
                  <FaGithub size={24} />
                </div>
              </a>
              <a
                href="https://weather-websites-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="  flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Live</p>
                  <HiExternalLink size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className=" w-[100%]   flex flex-col md:flex-row lg:flex-row items-center  gap-[3rem]  ">
          {/* Image Container */}
          <div className="w-[100%] md:w-[55%] lg:w-[55%] rounded-md  overflow-hidden">
            <img
              src={gitHubImage}
              alt="project-image-3"
              className=" aspect-video"
            />
          </div>
          {/* Text Container */}
          <div className="w-[100%] md:w-[40%] lg:w-[40%]  flex flex-col items-center text-balance text-center gap-4">
            <h3 className=" font-[700] text-[1.4rem]">Dev Detective 🕵🏻‍♀️</h3>
            <p className=" text-[1rem] text-center text-balance font-[500] text-[#767676] ">
              Dev Detective platform that allows users to retrieve information
              on any GitHub user. Displays details such as repositories, bio,
              followers, following, and others.
            </p>
            <div className=" flex items-center gap-6 ">
              <FaHtml5
                size={30}
                color="#e14e1d"
                className=" hover:scale-125 transition-all duration-200"
              />
              <FaCss3Alt
                size={30}
                color="#0277bd"
                className=" hover:scale-125 transition-all duration-200"
              />
              <SiJavascript
                size={26}
                color="#f0db4f"
                className=" hover:scale-125 transition-all duration-200"
              />
            </div>
            <div className=" w-[100%] font-[600] text-[1.2rem]   flex gap-8 justify-center items-center ">
              <a
                href="https://github.com/madhavsingh63/GitHub-Detective.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Code</p>
                  <FaGithub size={24} />
                </div>
              </a>
              <a
                href="https://github-devdetective.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="  flex items-center gap-2 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200">
                  <p>Live</p>
                  <HiExternalLink size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
