import React from "react";
import { motion } from "framer-motion";

const Hero = ({ user, social_handles }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 mt-10 lg:flex-row flex-col items-center justify-center lg:gap-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0.5, scale: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        drag
        className="flex-1 flex justify-center items-center mt-14 lg:mt-0"
      >
        <div className="lg:w-96 h-full relative sm:w-10/12 w-3/4 max-w-sm my-img">
          <img
            src={user.avatar.url}
            alt="My Picture"
            className="w-full object-cover rounded-xl border-[12px] border-cyan-600"
          />
        </div>
      </motion.div>

      <div className="flex-1 pl-6 mt-14 lg:mt-0">
        <div className="lg:text-left text-center">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold text-gray-900"
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hi There, <br />
            </span>
            My Name is <span>{user.name}</span>
          </motion.h1>
          <motion.h4
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"
          >
            {user.title}
          </motion.h4>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="btn-primary mt-8"
          >
            Contact Me
          </motion.button>
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="mt-8 text-3xl flex items-center lg:justify-start justify-center gap-5">
            {social_handles?.map((item) => {
              return item.enabled ? (
                <a
                  href={item.url}
                  key={item._id}
                  className="w-8 hover:-translate-y-2 duration-100"
                >
                  <img
                    src={item.image.url}
                    alt={item.platform}
                    className="w-full"
                  />
                </a>
              ) : null;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
