import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import sortingVisualizer from "../assets/sortingVisualizer.png";
import netflixClone from "../assets/netflixClone.jpeg";
import Benifest from "../assets/Benifest.jpeg";
import recommendationEngine from "../assets/recommendationEngine.jpeg";
const data = [
  {
    id: "1",
    name: "Recommendation Engine",
    skillsUsed: "ReactJs, Python, Django, PostgreSQL",
    src: recommendationEngine,
    description:
      "Integrated the recommendation engine with the existing Netflix platform, ensuring seamless user experience and improved engagement.Enhanced the speed of the server's response while streamlining backend operations to handle greater user traffic without degrading the user experience.",
    url: "https://github.com/diksh04/MS_Engage-2022",
  },
  {
    id: "2",
    name: "BeniFest-The E-commerce application",
    skillsUsed: "ReactJs, Firebase, Stripe",
    src: Benifest,
    description:
      "The project's user-friendly experience provided a competitive advantage, attracting new customers.Utilized Stripe's robust security features, ensuring secure and PCI-compliant payment transactions, instilling user trust.Employed Firebase's real-time database to manage orders efficiently.",
    url: "https://github.com/diksh04/BeniFest",
  },
  {
    id: "3",
    name: "Sorting Visualizer",
    skillsUsed: "ReactJs",
    src: sortingVisualizer,
    description:
      "This is a project made using React Js and is a program or tool that visually demonstrates how various sorting algorithms work by animating the process of sorting a collection of elements. The purpose of a sorting visualizer is to help users understand the inner workings of sorting algorithms.",
    url: "https://sorting-visualizer-green-one.vercel.app/",
  },
  {
    id: "4",
    name: "Netflix Clone",
    skillsUsed: "ReactJs",
    src: netflixClone,
    description:
      "Integrating API calls to fetch and display movie and TV show data, including titles, descriptions, and images. Resulting in a reduction in manual data entry.Creating interactive components such as carousels, and slider functionalities to enhance user engagement",
    url: "https://netflix-clone-pink-five.vercel.app/",
  },
];

function SkillComponent(props) {
  return (
    <div className="w-[400px] m-5 ">
      <div className=" w-full p-2 rounded hover:scale-95 flex flex-col hover:cursor-pointer h-[400px] text-center shadow-2xl">
        <div className="h-[55%] ">
          <img
            src={props.src}
            alt="logo"
            height={400}
            className=" h-full object-fill  bg-white grow"
          />
        </div>
        <div className="mt-2 text-lg font-bold">{props.name}</div>

        <div className="text-sm font-semibold">
          Skills Used: {props.skillsUsed}
        </div>
        <div className="text-sm text-justify"> {props.description}</div>
        <div className="flex justify-center ">
          <div>The Project is Hosted </div>&nbsp;
          <div className=" flex  ">
            <a className="text-blue-500" href={props.url} target="_blank">
              here <FaExternalLinkAlt className="inline mt-[-4px] w-[13px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div id="projects" className="container m-auto mt-10">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl text-left font-black text-gray-400 sm:text-2xl">
          Projects
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="flex w-full flex-wrap justify-center" data-aos="zoom-in">
        {data.map((val) => (
          <SkillComponent
            key={val.id}
            name={val.name}
            skillsUsed={val.skillsUsed}
            src={val.src}
            description={val.description}
            url={val.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
