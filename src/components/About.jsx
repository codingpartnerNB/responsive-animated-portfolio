import React from "react";
import { motion } from 'framer-motion';

const About = ({ user }) => {
  const workInfo = [
    {
      content: "Years Experience",
      count: user.exp_year,
    },
    {
      content: "Completed Projects",
      count: user.some_total,
    },
  ];

  return (
    <section id="about" className="py-10 text-gray-900">
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
        <h3
        className="text-4xl font-semibold uppercase">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">My Introduction</p>
      </motion.div>
      <div className="flex lg:flex-row flex-col-reverse items-center gap-12 lg:gap-16 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className="my-3">
            <motion.h4 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl text-cyan-600 mb-2 uppercase font-semibold text-left">
              {user.quote}
            </motion.h4>
            <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-justify leading-7 w-11/12">
              {user.description}
            </motion.p>
            <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex mt-10 items-center gap-7">
              {workInfo.map((data, index) => (
                <div key={index}>
                  <h3 className="md:text-4xl text-2xl font-semibold">
                    {data.count} <span className="text-cyan-600">+</span>
                  </h3>
                  <span className="md:text-base text-xs">{data.content}</span>
                </div>
              ))}
            </motion.div>
            <motion.button 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="btn-primary mt-12">Download CV</motion.button>
          </div>
        </div>

        <motion.div
        initial={{opacity: 0.5, scale: 0}}
        transition={{duration: 2}}
        whileInView={{opacity: 1, scale: 1}}
        drag
        className="flex-1 flex justify-center items-center mt-14 lg:mt-0">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm my-img">
            <img
              src={user.alternateAvatars[0].url}
              alt="My Picture"
              className="w-full object-cover rounded-xl border-[12px] border-cyan-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
