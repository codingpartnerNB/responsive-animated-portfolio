import React from "react";
import Slider from "react-slick";
import {motion} from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      className="text-center mt-8">
        <h3 className="text-4xl font-semibold uppercase">
          Testimo<span className="text-cyan-600">nials</span>
        </h3>
        <hr className="w-24 h-1 bg-cyan-600 m-auto border-none rounded-md" />
        <p className="text-gray-600 my-3 text-lg">What Customers Say</p>
      </motion.div>
      <div>
        <Slider {...settings}>
          {testimonials
            ?.filter((testimonial) => testimonial.enabled)
            .map((testimonial) => (
              <div key={testimonial._id} className="my-6 hover:scale-105">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-tl-[4rem] rounded-tr-[4rem] rounded-br-[4rem] bg-gray-600 text-gray-900 border-8 border-cyan-600">
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
                  className="p-4">
                    <div className="flex justify-center items-center">
                      <motion.img
                      initial={{y: 50, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{
                        delay: 0.4,
                        y: {type: "spring", stiffness: 60},
                        opacity: {duration: 0.2},
                        ease: "easeIn",
                        duration: 1,
                      }}
                        src={testimonial.image.url}
                        alt={testimonial.name}
                        className="rounded-full border-4 border-cyan-600 w-24 h-24 shadow-md"
                      />
                    </div>
                    <p className="text-center my-4">
                      <span className="text-3xl">❛❛</span>
                      {testimonial.review}
                      <span className="text-3xl">❜❜</span>
                    </p>
                    <h3 className="text-center font-bold text-xl">
                      {testimonial.name}
                    </h3>
                    <h4 className="text-center">{testimonial.position}</h4>
                  </motion.div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
