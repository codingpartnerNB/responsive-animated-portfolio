import React, { useState, useEffect } from "react";
import { menuLinks } from "../assets/data";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] bg-gray-900 text-white ${
        sticky ? "md:bg-gray-900 text-white" : "md:bg-gray-200"
      }`}
    >
      <div className={`flex items-center justify-between`}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-7"
        >
          <h4 className="text-4xl text-cyan-600 uppercase font-bold">
            Portfolio
          </h4>
        </motion.div>
        <div className="bg-gray-900 text-white md:block hidden px-7 py-2 font-medium rounded-bl-full">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, index) => (
              <li
                key={index}
                className="px-3 lg:px-6 hover:text-cyan-600 uppercase"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setIsopen(!isopen)}
          className={`z-[999] ${
            isopen ? "text-gray-900" : "text-gray-200"
          } cursor-pointer text-3xl md:hidden m-5`}
        >
          {isopen ? <IoClose /> : <IoMenu />}
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-gray-200 top-0 ease-in-out duration-500 ${
            isopen ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-8 py-2 text-lg">
            {menuLinks?.map((menu, index) => (
              <li
                key={index}
                className="px-6 hover:text-cyan-600"
                onClick={() => setIsopen(!isopen)}
              >
                <a href={menu?.link} className="hover:text-xl">
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
