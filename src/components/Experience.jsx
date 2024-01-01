import attentive from "../assets/attentive.png";
import microsoft from "../assets/microsoft.png";
import GurugramCyberCell from "../assets/GurugramCyberCell.webp";
const Months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const ExperienceData = [
  {
    companyName: "Attentive",
    companyLogo: attentive,
    startDate: new Date(2023, 9),
    endDate: new Date(2023,11),
    role: "Frontend Intern",
    location: "Noida,Uttar Pradesh,India",
    mode: "On-site",
    timeline: "October 2023 - present",
    decription:
      "Collaborate with our design and development teams to bring user interfaces to life. Implement responsive and visually appealing designs, ensuring a seamless and intuitive user experience.Translate design mockups and wireframes into high-quality code.Conduct thorough testing of frontend applications to identify and fix bugs. Debug and troubleshoot issues to ensure the reliability and stability of the user interface",
  },
  {
    companyName: "Microsoft",
    companyLogo: microsoft,
    startDate: new Date(2022, 3),
    endDate: new Date(2022, 4),
    role: "Mentee",
    location: "Noida,Uttar Pradesh,India",
    mode: "Remote",
    timeline: "April 2022 - May 2022",
    decription:
      "Implemented content-based filtering algorithm to offer consumers personalized content recommendations based on their viewing habits and history. 50% of users explored new titles recommended by the engine. 30% decrease in server requests and response time.",
  },
  {
    companyName: "Gurugram Cyber Cell",
    companyLogo: GurugramCyberCell,
    startDate: new Date(2021, 5),
    endDate: new Date(2021, 6),
    role: "Frontend Intern",
    location: "Gurugram,Haryana,India",
    mode: "Remote",
    decription:
      "Conducted in-depth research on emerging cyber threats and industry trends, providing valuable insights for informed decision-making. Assisted in implementing security policies, ensuring compliance with industry standards and regulations.",
  },
];
const ExperienceCard = (props) => {
  const newYear = props.endDate.getFullYear() - props.startDate.getFullYear();
  const newMonth = props.endDate.getMonth() - props.startDate.getMonth() + 1;

  return (
    <div className="w-full p-2 rounded hover:scale-95 flex flex-col hover:cursor-pointer shadow-2xl my-10">
      <div className="flex items-center">
        <div>
          <img
            src={props.logo}
            alt="companyLogo"
            className="h-[100px] w-[150px] object-contain"
          />
        </div>
        <div className="ml-[40px]  flex flex-col ">
          <div className="font-bold">{props.companyName}</div>
          <div>
            {newYear > 0 ? newYear + " year" : ""}{" "}
            {newMonth > 0 ? newMonth : ""}
            {newMonth > 1 ? " months" : " month"}
          </div>
          <div>{props.location}</div>
          <div>{props.mode}</div>
        </div>
      </div>
      <div className=" mt-2 p-4  box-border">
        <div className="font-bold">{props.role}</div>
        <div>{`${
          Months[props.startDate.getMonth()]
        } ${props.startDate.getFullYear()} - ${
          props.endDate.getMonth() === new Date().getMonth()
            ? "Present"
            : Months[props.endDate.getMonth()] +
              " " +
              props.endDate.getFullYear()
        }`}</div>
        <div>{props.decription}</div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="container m-auto mt-16">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl text-left font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div>
        {ExperienceData.map((val) => (
          <ExperienceCard
            key={val.companyName}
            companyName={val.companyName}
            logo={val.companyLogo}
            startDate={val.startDate}
            endDate={val.endDate}
            role={val.role}
            location={val.location}
            mode={val.mode}
            decription={val.decription}
            timeline={val.timeline}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
