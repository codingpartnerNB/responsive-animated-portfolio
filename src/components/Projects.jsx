import React, { useState } from "react";
import Modal from "../UI/Modal";
import {motion} from 'framer-motion';

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState("All Projects");
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState(null);
  const skillsUsed = [
    "All Projects",
    "ReactJS",
    "NextJS",
    "MERN",
    "CSS",
    "TailwindCSS",
  ];

  const filteredProject =
    selected === "All Projects"
      ? projects
      : projects.filter((item) => {
          return item.techStack.some(
            (i) => i.toLowerCase().trim() === selected.toLowerCase().trim()
          );
        });

  const hideModalHandler = () => {
    setShowModal(false);
    setProject(null);
  };

  return (
    <section id="projects" className="py-10 text-gray-900">
      <div className="text-center mt-8">
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
        className="mb-4"
        >
        <h3 className="text-4xl font-semibold uppercase">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">My Awesome Works</p>
        </motion.div>
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
        className="text-center lg:text-right px-0 lg:px-10">
          <select
            className="border-2 border-cyan-600 bg-gray-900 text-white p-2 rounded-lg cursor-pointer"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {skillsUsed?.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 m-4 sm:m-10">
          {filteredProject
            ?.sort((a, b) => a.sequence - b.sequence)
            .map((project) => {
              return project.enabled ? (
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
                  key={project._id}
                  onClick={() => {
                    setShowModal(true);
                    setProject(project);
                  }}
                  className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl hover:shadow-xl hover:shadow-gray-900/30 transition-shadow"
                >
                  <div className="h-80 w-full">
                    <img
                      src={project.image.url}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-gray-900/70 group-hover:via-gray-900/60 group-hover:to-gray-900/70"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                    <h4 className="text-4xl mb-4 font-bold text-cyan-100">
                      {project.title}
                    </h4>
                  </div>
                </motion.div>
              ) : null;
            })}
        </div>
      </div>
      {showModal && (
        <Modal onHide={hideModalHandler}>
          <div className="max-h-[70vh] lg:max-h-[80vh] overflow-y-auto p-2 lg:p-4">
            <img
              src={project.image.url}
              alt={project.title}
              className="rounded-lg"
            />
            <div className="text-gray-300">
              <motion.h2
              initial={{y: -40, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
              className="text-2xl text-cyan-600 font-bold my-4">
                {project.title}
              </motion.h2>
              <motion.p
              initial={{y: -40, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
              className="text-[15px] leading-7 text-justify">{project.description}</motion.p>
              <motion.div
              initial={{y: -40, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
              className="mt-4 flex items-center gap-3 flex-wrap">
                <h4 className="text-[18px] font-semibold">Technologies: </h4>
                {project.techStack?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-cyan-900 text-gray-400 py-1 px-2 rounded-[5px] text-[14px] leading-7"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
              <div className="flex gap-4">
                <motion.a
                initial={{y: -40, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                  delay: 0.4,
                  y: {type: "spring", stiffness: 60},
                  opacity: {duration: 0.2},
                  ease: "easeIn",
                  duration: 1,
                }}
                href={project.liveurl}>
                  <button className="btn-modal">Live Demo</button>
                </motion.a>
                <motion.a
                initial={{y: -40, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                  delay: 0.4,
                  y: {type: "spring", stiffness: 60},
                  opacity: {duration: 0.2},
                  ease: "easeIn",
                  duration: 1,
                }}
                href={project.githuburl}>
                  <button className="btn-modal">GitHub Link</button>
                </motion.a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
