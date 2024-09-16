import aboutImage from "../assets/about_image.webp";
import rotateImage from "../assets/rotate_image.svg";
import userIcon from "../assets/userIcon.png";
import "./style.css";
const About = () => {
  return (
    <div
      id="about"
      className=" max-w-[1100px] px-[20px] md:px-[40px]  lg:px-[40px] mx-auto  py-[5rem]  md:py-[12rem] lg:py-[12rem]  flex flex-col md:flex-row lg:flex-row items-center justify-between bg-white gap-8"
    >
      <div className=" w-[100%] sm:w-[80%] md:w-[45%] lg:w-[45%] relative mx-auto sm:mx-0 md:mx-0 lg:mx-0  ">
        <img src={aboutImage} alt="laptopImage" className="rounded-lg" />
        <img
          src={userIcon}
          alt="emoji"
          className=" invisible md:visible lg:visible w-[4rem] absolute bottom-3 -right-4 z-10"
        />
        <span>
          <img
            src={rotateImage}
            alt="textImage"
            className=" invisible md:visible lg:visible rotateAnimationImage bg-white w-[12rem] absolute -right-20 -bottom-16 rounded-full"
          />
        </span>
      </div>
      <div className=" w-[100%] md:w-[45%] lg:w-[45%] flex flex-col items-center md:items-start lg:items-start gap-[1rem]">
        <h1 className=" text-[#147efb] font-[700] text-[1.1rem] uppercase ">
          About me
        </h1>
        <h4 className=" w-[75%] md:w-[100%] lg:w-[100%] text-center md:text-balance  md:text-start lg:text-start text-[#2d2e32] text-[1.57rem] font-[700] ">
          Front-end Developer based in Aligarh, India 📍
        </h4>
        <p className=" text-[#767676] text-balance text-center md:text-start lg:text-start font-[500] text-[16px] ">
          Hey, my name is Madhav, and I'm a Frontend Developer. My passion is to
          create and develop a clean UI/UX for my users.
        </p>
        <p className=" text-[#767676] text-center md:text-start lg:text-start  font-[500] text-[16px] ">
          My main stack currently is React/Next.js in combination with Tailwind
          CSS and JavaScript/TypeScript.
        </p>
      </div>
    </div>
  );
};

export default About;
