import React from "react";
import ResumeItem from "./ResumeItem";
import {motion} from 'framer-motion';

const Resume = ({timeline}) => {
  return (
    <section>
      <motion.div
      initial={{y: -50, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{
        delay: 0.4,
        y: {type: "spring", stiffness: 60},
        opacity: {duration: 0.2},
        ease: "easeIn",
        duration: 1,
      }}
      className="text-center mt-8">
        <h3 className="text-4xl font-semibold uppercase">
          Resu<span className="text-cyan-600">me</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">My Story</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:px-8">
        <div className="mx-4">
          <h4 className="text-2xl text-gray-900 pb-4 font-semibold">Education</h4>
          <hr className="w-full h-1 bg-gray-900 m-auto border-none rounded-md" />
          {timeline?.sort((a, b)=>a.sequence - b.sequence).map((val)=>{
            if(val.enabled && val.forEducation){
              return <ResumeItem key={val._id} {...val} />
            } 
          })}
        </div>
        <div className="mx-4">
        <h4 className="text-2xl text-gray-900 pb-4 font-semibold">Experience</h4>
          <hr className="w-full h-1 bg-gray-900 m-auto border-none rounded-md" />
          {timeline?.sort((a, b)=>a.sequence - b.sequence).map((val)=>{
            if(val.enabled && !val.forEducation){
              return <ResumeItem key={val._id} {...val} />
            } 
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
