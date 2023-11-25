import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/dikshant_bpit.pdf";
import pf from "../assets/pf.jpeg";
const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[600px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              className=" text-5xl font-bold sm:text-[2rem]"
              data-aos="fade-up"
            >
              Hello, I'm Dikshant Luthra
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Programmer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-sky-500 text-4xl font-bold sm:text-3xl"
            />
            <p className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]">
              I am a Web Developer and a competitive programmer. I can code in
              C++, JavaScript.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            {/* <a
              href="https://www.linkedin.com/in/dikshant462/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-sky-500"
            >
              <span> Hire Me</span>
            </a> */}
            <a
              href={resume}
              className="flex items-center gap-2 border- text-[1rem] bg-black text-white  border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-sky-500 hover:cursor-pointer"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/diksh04" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dikshant462/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/dikshantluthra462/"
                  target="_blank"
                >
                  {" "}
                  <SiLeetcode className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://codeforces.com/profile/diksh04"
                  target="_blank"
                >
                  {" "}
                  <SiCodeforces className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* profile picture section */}
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end mt-10">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[75%] w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
              src={pf}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
