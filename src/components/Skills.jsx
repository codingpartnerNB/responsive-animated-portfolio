import React from "react";
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-10 text-gray-900 relative">
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
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">My Knowledge</p>
        </motion.div>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap text-center">
          {skills
            ?.filter((skill) => skill.enabled)
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) => (
              <motion.div
              initial={{y: 100, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{
                    delay: 0.2,
                    y: {type: "spring", stiffness: 60},
                    opacity: {duration: 0.2},
                    ease: "easeIn",
                    duration: 1,
                  }}
                key={skill._id}
                className="border-4 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8, 145, 170) ${skill.percentage}%, #ddd ${skill.percentage}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-125">
                    <img src={skill.image.url} alt={skill.name} />
                  </div>
                </div>
                <motion.p
                initial={{y: 40, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                  delay: 0.2,
                  y: {type: "spring", stiffness: 60},
                  opacity: {duration: 0.2},
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-white text-xl mt-3">{skill.name}</motion.p>
              </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Skills;
