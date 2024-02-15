import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "flowbite-react";
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
      <motion.div className="bg-[#1c100c]">
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
                  src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727845/DSC_0384_ssgask.jpg"
                  alt=""
                />
                <motion.img
                  variants={load}
                  layout
                  className="h-[35vh] absolute bottom-10 right-10 "
                  src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727839/DSC_0304_hbrxby.jpg"
                  alt=""
                />
                <motion.img
                  variants={load}
                  className="h-[80vh] bottom-10 right-10 z-10"
                  src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727836/DSC_0830_yt0jiw.jpg"
                  alt=""
                />
              </motion.div>
              {/* <Footer /> */}
            </>
          )}
          {show && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 400 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                // style="background-image: url('../assets/images/image-4.jpg');"
                className="bg-[url('https://res.cloudinary.com/dhriluafq/image/upload/v1707727835/DSC_0793_n7j5fu.jpg')] bg-no-repeat bg-cover h-screen"
              >
                <motion.div className="px-4 flex justify-center items-center gap-1 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
                  <motion.div className="bg-opacity-10 backdrop-blur w-[60vw] rounded-3xl">
                    <motion.h1
                      variants={textAnimate1}
                      initial="hidden"
                      animate="show"
                      className="text-6xl flex justify-center font-extrabold tracking-tight leading-none uppercase text-[#f2f1ef] md:text-5xl lg:text-6xl"
                    >
                      <img
                        src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1708000698/logo_transparent_1_qytwbz.png"
                        width="450px"
                      />
                    </motion.h1>
                    <motion.p
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="font-bold overflow-hidden glow lg:text-6xl text-4xl text-[#ffc946] sm:px-12 lg:px-30"
                    >
                      {/* <Countdown /> */}
                      Parakram &apos;24
                    </motion.p>
                    <motion.p
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="mb-2 overflow-x-hidden lg:text-5xl text-3xl font-bold text-[#b92f2f] sm:px-12 py-2 lg:px-30"
                    >
                      {/* <Countdown /> */}
                      Defy odds, Define Legacy
                    </motion.p>

                    <motion.span
                      variants={textAnimate2}
                      initial="hidden"
                      animate="show"
                      className="h-auto  overflow-y-hidden my-3 overflow-x-hidden flex justify-center text-lg font-semibold text-[#fbe10e] lg:text-2xl sm:px-5"
                    >
                      <button
                        type="button"
                        disabled
                        className="text-[#f2f1ef] bg-gradient-to-br from-[#ffc946] to-[#b92f2f] hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 disabled"
                      >
                        March 2024
                      </button>
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
              <motion.div className="max-w-screen bg-cover flex-col justify-center items-center bg-[#1c100c] pb-20 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1 },
                  }}
                  // viewport={{ amount: 0.5 }}
                  className=" flex justify-center items-center w-screen text-[#f2f1ef] bg-opacity-50 backdrop-blur-xl rounded-lg text-xl px-10 py-10 my-10 text-justify"
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
                      src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727835/DSC_0837_bjhtpz.jpg"
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      layout
                      className="h-[40vh] w-[40vw] object-cover"
                      src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727835/DSC_0945_iqegab.jpg"
                      alt=""
                    />
                    {/* <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src="https://res.cloudinary.com/dhriluafq/image/upload/v1707632758/ath3_qg6nmy.jpg"
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src="https://res.cloudinary.com/dhriluafq/image/upload/v1707632756/ath4_jeh6xt.jpg"
                      alt=""
                    /> */}
                    {/* <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1707624702/cri3_qicxug.jpg"
                      alt=""
                    />
                    <motion.img
                      variants={imgVariant}
                      className="h-[40vh] w-[40vw] object-cover"
                      src="https://res.cloudinary.com/dfr1kvie3/image/upload/v1707624668/ls1_d4fk6h.jpg"
                      alt=""
                    /> */}
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="text-5xl py-5 text-center text-[#f2f1ef] bg-[#0f0d09] font-bold">
                Memories
              </div>
              <div className="bg-[#0f0d09] h-screen flex justify-center items-center pt-10 pb-20">
                <Carousel className="w-[80vw]">
                  <img
                    src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727835/DSC_0555_qx0kqb.jpg"
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727834/DSC_0345_xqgmz5.jpg"
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dhriluafq/image/upload/v1707728247/DSC_0794_mmurzx.jpg"
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dhriluafq/image/upload/v1707727830/DSC_0288_drptwk.jpg"
                    alt="..."
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="object-cover"
                  />
                  <img
                    src="https://res.cloudinary.com/dhriluafq/image/upload/v1707728262/DSC_0799_xdvwkk.jpg"
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
