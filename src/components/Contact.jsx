import React, { useState } from "react";
import {motion} from 'framer-motion';

const Contact = ({ user }) => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  return (
    <section id="contact" className="py-10 text-gray-900">
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
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">Get In Touch</p>
      </motion.div>
      <div className="mx-4 md:mx-14">
        <motion.div
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
          delay: 0.2,
          y: {type: "spring", stiffness: 60},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration: 1,
        }}
        className="mt-16 flex flex-col md:flex-row gap-6 max-w-5xl bg-gray-800 py-6 px-4 rounded-2xl mx-0 md:mx-auto">
          <form className="flex flex-col flex-1 gap-5 m-4 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
              initial={{x: 100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{
                delay: 0.3,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
                className={`border-[1px] relative hover:border-cyan-600 w-full ${
                  nameFocused ? "border-cyan-600" : "border-gray-300"
                } `}
              >
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  required
                />
              </motion.div>
              <motion.div
              initial={{x: 100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{
                delay: 0.3,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
                className={`border-[1px] relative hover:border-cyan-600 w-full ${
                  emailFocused ? "border-cyan-600" : "border-gray-300"
                } `}
              >
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  required
                />
              </motion.div>
            </div>
            <motion.div
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{
              delay: 0.3,
              y: {type: "spring", stiffness: 60},
              opacity: {duration: 0.2},
              ease: "easeIn",
              duration: 1,
            }}
              className={`border-[1px] relative hover:border-cyan-600 ${
                phoneFocused ? "border-cyan-600" : "border-gray-300"
              } `}
            >
              <label htmlFor="phone">Phone no *</label>
              <input
                type="text"
                id="phone"
                onFocus={() => setPhoneFocused(true)}
                onBlur={() => setPhoneFocused(false)}
                required
              />
            </motion.div>
            <motion.div
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{
              delay: 0.3,
              y: {type: "spring", stiffness: 60},
              opacity: {duration: 0.2},
              ease: "easeIn",
              duration: 1,
            }}
              className={`border-[1px] relative hover:border-cyan-600 ${
                messageFocused ? "border-cyan-600" : "border-gray-300"
              } `}
            >
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                className="resize-none h-44"
                onFocus={() => setMessageFocused(true)}
                onBlur={() => setMessageFocused(false)}
                required
              ></textarea>
            </motion.div>
            <div className="flex justify-center mt-2">
              <motion.button
              initial={{x: 100, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{
                delay: 0.4,
                y: {type: "spring", stiffness: 60},
                opacity: {duration: 0.2},
                ease: "easeIn",
                duration: 1,
              }}
              className="btn-primary w-fit">Send Message</motion.button>
            </div>
          </form>
          <div className="text-gray-300 text-left mt-8 md:mt-0">
            <motion.div
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{
              delay: 0.4,
              y: {type: "spring", stiffness: 60},
              opacity: {duration: 0.6},
              ease: "easeIn",
              duration: 1,
            }}
            className="flex flex-col gap-4 w-fit">
              <div className="flex flex-col">
                <div className="text-sm text-gray-400 uppercase my-4">
                  Address
                </div>
                <p className="text-2xl text-gray-300 mb-4">
                  {user.address}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-400 uppercase my-4">
                  Phone no
                </div>
                <p className="text-2xl text-gray-300 mb-4 hover:text-cyan-600">
                  <a href={`tel:${user.phoneNumber}`}>{user.phoneNumber}</a>
                </p>
              </div>
              <div className="my-4">
                <p className="underline hover:text-cyan-600">
                  <a href={`mailto:${user.contactEmail}`}>
                    {user.contactEmail}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
