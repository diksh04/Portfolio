import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
const InitialState = {
  email: "",
  name: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [userData, setUserData] = useState(InitialState);
  const submitHandler = () => {
    setTimeout(() => {
      setUserData(InitialState);
    }, 10000);
  };
  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl text-left font-black text-gray-400 sm:text-2xl">
          Contact Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      {/* card */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col  ">
        <div className="left w-[90%] flex-1 flex items-center justify-center sm:flex-col sm:w-full ">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-full mr-10  mx-auto">
            <div data-aos="zoom-in" className="flex flex-col  ">
              <h1 className="text-2xl font-bold sm:text-3xl text-center sm:text-center">
                Let's Talk
              </h1>
              <h3 className="text-xl sm:text-lg flex-col text-center sm:text-center sm:ml-4">
                I'm available for development and Frontend related work and
                opportunities.
              </h3>
              <div className="flex  w-[300px] sm:mb-5  flex-row justify-center mx-auto">
                <AiOutlineMail size={20} />
                <h2 className="mx-2 font-bold ">
                  : dikshantluthra922@gmail.com
                </h2>
              </div>
            </div>
          </div>

          <div className="right flex-1 ">
            <form
              className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
              data-aos="zoom-in"
              onSubmit={submitHandler}
              action="https://formspree.io/f/mrgwvyzw"
              method="POST"
              autoComplete="off"
            >
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="email"
                placeholder="e.g. example@email.com"
                name="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="text"
                placeholder="e.g. John Doe"
                name="name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
              />
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="text"
                placeholder="subject"
                name="subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({ ...userData, subject: e.target.value })
                }
                required
              />
              <textarea
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                rows="4"
                cols="50"
                placeholder="Write your message"
                name="message"
                id=""
                minLength="10"
                value={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
                required
              />
              <button
                className="bg-sky-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
                type="submit"
                // disabled={state.submitting}
              >
                <span>Send</span>
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
