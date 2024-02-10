import logoSvg from "../assets/logo-svg.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "flowbite-react";
import img5 from "../assets/images/cri1.jpg";
import img6 from "../assets/images/cri3.jpg";
import img7 from "../assets/images/bas6.jpg";
import img8 from "../assets/images/ls4.jpg";
import img9 from "../assets/images/bas4.jpg";
import transition from "../transition";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);

  setTimeout(() => {
    setLoading(false);
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, 3000);

  const load = {
    hidden: {
      opacity: 0,
      y: 200,
      transition: { duration: 0.8 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.8,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  const imgVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  const textAnimate1 = {
    hidden: {
      y: "50px",
      opacity: 0,
      color: "#0f0f0f",
    },
    show: {
      y: 0,
      opacity: 1,
      color: "#ffffff",
      transition: {
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,

      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1.5,
      },
    },
  };
  return (
    <>
      <motion.div className="bg-[#0d0c06]">
        <AnimatePresence>
          {loading && (
            <>
              <motion.div
                variants={load}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-[90vw] h-screen w-screen flex justify-center items-center relative"
              >
                <motion.img
                  variants={load}
                  className="h-[35vh] absolute top-10 left-10"
                  src={img5}
                  alt=""
                />
                <motion.img
                  variants={load}
                  layout
                  className="h-[35vh] absolute bottom-10 right-10 "
                  src={img6}
                  alt=""
                />
                <motion.img
                  variants={load}
                  className="h-[80vh] bottom-10 right-10 z-10"
                  src={img7}
                  alt=""
                />
              </motion.div>
              {/* <Footer /> */}
            </>
          )}
          {show && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 400, width: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  width: "screen",
                  transition: { duration: 1 },
                }}
                // style="background-image: url('../assets/images/image-4.jpg');"
                className="bg-[url('assets/images/bas4.jpg')] bg-no-repeat bg-cover h-screen"
              >
                <motion.div className="px-4 flex justify-center items-center gap-1 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                  <motion.div className="bg-opacity-50 backdrop-blur-lg w-[60vw] rounded-3xl">
                    <motion.h1
                      variants={textAnimate1}
                      initial="hidden"
                      animate="show"
                      className="text-6xl flex justify-center font-extrabold tracking-tight leading-none uppercase text-white md:text-5xl lg:text-6xl"
                    >
                      <img src={logoSvg} width="450px" />
                    </motion.h1>
                    <motion.p
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="mb-2 overflow-x-hidden text-xl font-normal text-[#efede0] lg:text-2xl sm:px-16 py-5 lg:px-48"
                    >
                      Defy odds, Define Legacy
                    </motion.p>
                    <motion.p
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="h-22 font-bold overflow-x-hidden glow lg:text-4xl text-6xl text-[#fbe10e] sm:px-16 lg:px-48"
                    >
                      {/* <Countdown /> */}
                      Parakram &apos;24
                    </motion.p>
                    <motion.span
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="h-auto  overflow-y-hidden my-5 overflow-x-hidden flex justify-center text-lg font-semibold text-[#fbe10e] lg:text-2xl sm:px-5 bg-opacity-50 backdrop-blur-xl"
                    >
                      March 2024
                    </motion.span>
                    <motion.button
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      type="button"
                    ></motion.button>
                  </motion.div>
                </motion.div>
                {/* <motion.img
                  initial={{ opacity: 0, y: 400, width: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    width: "full",
                    transition: { duration: 1.5 },
                  }}
                  // layout
                  className="absolute w-full "
                  src={img2}
                  alt=""
                /> */}
              </motion.div>
              <motion.div className="max-w-screen bg-cover flex-col justify-center items-center bg-[#0d0c06] pb-20 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                  }}
                  // viewport={{ amount: 0.5 }}
                  className=" flex justify-center items-center w-screen text-white bg-opacity-50 backdrop-blur-xl rounded-lg text-xl px-10 py-10 my-10"
                >
                  Parakram is the Annual Inter-College Sports Festival of
                  IIT(ISM) Dhanbad. The 3-day Sports Festival of IIT(ISM)
                  DHANBAD is one of the largest sporting fest in Eastern India.
                  ”Parakram” in Sanskrit means efforts, strength, and heroism.
                  Teams from various colleges compete to be the best and to lift
                  the most aspired trophy of PARAKRAM. In the true sense, it is
                  an exhibition of sporting fervour, and the success of the meet
                  has been ratified by the success of many of its winners higher
                  up in the sporting hierarchy.
                </motion.div>
                <motion.div className="flex justify-center items-center">
                  <motion.div
                    variants={imgVariant}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-[90vw] w-screen grid grid-cols-2 gap-10"
                  >
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img5}
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      layout
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img6}
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img7}
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img8}
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img9}
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src={img5}
                      alt=""
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="bg-[#060917] h-screen flex justify-center items-center pt-20">
                <Carousel className="w-[80vw]">
                  <img
                    src={img5}
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src={img6}
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src={img7}
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src={img8}
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src={img9}
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                </Carousel>
              </div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Landing = transition(LandingPage);
export default Landing;
