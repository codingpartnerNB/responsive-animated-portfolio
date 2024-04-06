import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {motion} from 'framer-motion';

const ResumeItem = (props) => {
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);

  const startYear = startDate.getFullYear();
  const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
  const startDay = startDate.getDate().toString().padStart(2, "0");

  const endYear = endDate.getFullYear();
  const endMonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
  const endDay = endDate.getDate().toString().padStart(2, "0");

  const formattedStart = `${startDay}/${startMonth}/${startYear}`;
  const formattedEnd = `${endDay}/${endMonth}/${endYear}`;

  return (
    <div className="my-8 px-12 border-l-2 border-gray-900 relative text-gray-900">
      <div className="bg-cyan-600 p-6 rounded-md shadow-lg">
        <motion.div
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
          delay: 0.2,
          y: {type: "spring", stiffness: 60},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration: 1,
        }}
        className="absolute -top-4 -left-8 p-4 bg-gray-900 text-3xl text-cyan-600 rounded-full">
          {props.forEducation ? <FaGraduationCap /> : <FaBriefcase />}
        </motion.div>
        <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        >
        <span className="px-2 py-1 bg-cyan-700 rounded-md">
          {formattedStart} - {formattedEnd}
        </span>
        <h3 className="mt-4">
          <span className="font-semibold text-xl">{props.company_name}</span>
          <span className="relative mx-4">
            <span className="px-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-4 before:h-[2px] before:rounded-sm before:bg-gray-900">{props.jobLocation}</span>
          </span>
        </h3>
        <h3 className="font-semibold my-2">{props.jobTitle}</h3>
        <p>{props.summary}</p>
        <ul className="list-disc py-2 px-4">
          {props.bulletPoints.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeItem;
