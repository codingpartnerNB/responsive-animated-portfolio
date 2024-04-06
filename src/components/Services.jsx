import React from "react";
import { motion } from 'framer-motion';

const Services = ({ services, subtitle }) => {
  return (
    <section className="py-10 text-gray-900">
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
      className="text-center mt-10">
        <h3 className="text-4xl font-semibold uppercase">
          My <span className="text-cyan-600">Services</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">{subtitle}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 m-4 sm:m-10">
        {services?.map((service) => {
          return service.enabled ? (
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
              key={service._id}
              className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl hover:shadow-xl hover:shadow-gray-900/30 transition-shadow"
            >
              <div className="h-80 w-full">
                <img
                  src={service.image.url}
                  alt={service.name}
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-gray-900/70 group-hover:via-gray-900/60 group-hover:to-gray-900/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-2xl mb-4 font-bold text-white">
                  {service.name}
                </h4>
                <p className="text-lg italic text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
                <div className="bg-cyan-600 rounded-md mb-2 font-semibold text-white p-3">{service.charge}</div>
              </div>
            </motion.div>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Services;
