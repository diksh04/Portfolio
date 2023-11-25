import React from "react";

const data = [
  {
    name: "C++",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-line.svg",
  },
  {
    name: "Javascript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Python",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    src: "https://img.icons8.com/plasticine/100/000000/oracle-pl-sql--v3.png",
  },
  {
    name: "CSS",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg",
  },
  {
    name: "HTML",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg",
  },
  {
    name: "Bootstrap",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Typescript",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    name: "Next Js",
    src: "https://miro.medium.com/v2/resize:fit:576/1*yqQpg5pkNNY2NCdcmqVstw.png",
  },
];

function SkillComponent(props) {
  return (
    <div className="grid-item">
      <div className="skill-logo ">
        <img src={props.src} alt="img" />
      </div>
      <div className="skill-title">{props.name}</div>
    </div>
  );
}

const Skills = () => {
  return (
    <div id="skills" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl text-left font-black text-gray-400 sm:text-2xl">
          Skills
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="grid-layout" data-aos="zoom-in">
        {data.map((val, key) => (
          <SkillComponent key={key} name={val.name} src={val.src} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
