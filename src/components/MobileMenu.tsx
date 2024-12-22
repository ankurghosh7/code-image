"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { cn } from "@/utils/cn";
import AboutDialog from "./AboutDialog";
import ThemeSwticher from "./ThemeSwticher";

const menu = {
  open: {
    width: "280px",
    height: "250px",
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "40px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function MobileMenu() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={"relative"}>
      <motion.div
        className={cn("w-10 h-10 bg-orange-500 absolute z-10 rounded-3xl")}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>

      <motion.button
        className={cn(
          "w-10 h-10 flex justify-center items-center rounded-full bg-transparent text-background relative z-10",
          {
            "text-black": isActive,
          }
        )}
        animate={{ backgroundColor: isActive ? "#f9f9f9" : "transparent" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <IoMenu
          className="size-5"
          //   isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </motion.button>

      <button
        className={cn("fixed top-0 left-0 -z-0 w-full h-screen", {
          block: isActive,
          hidden: !isActive,
        })}
        type="button"
        onClick={() => setIsActive(false)}
      />
    </div>
  );
}

function Nav() {
  return (
    <div className={"flex flex-col justify-between p-6 "}>
      <div className={"flex gap-3 flex-col py-10"}>
        <div className={"perspective-[120px] [perspective-origin:bottom]	"}>
          <motion.div
            custom={1}
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <AboutDialog
              button={
                <button className="text-2xl text-white font-medium">
                  About
                </button>
              }
            />
          </motion.div>
          <motion.div
            custom={2}
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <a
              href="https://github.com/ankurghosh7/code-image/issues/new"
              className="text-2xl text-white font-medium"
              target="_blank"
            >
              Repot bug!
            </a>
          </motion.div>
          <motion.div
            custom={2}
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <a
              href="https://www.ankurghosh.xyz/#contact"
              className="text-2xl text-white font-medium"
              target="_blank"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div className={"flex flex-wrap"}>
        <motion.div
          variants={slideIn}
          custom={1}
          initial="initial"
          animate="enter"
          exit="exit"
          // key={`f_${i}`}
        >
          <ThemeSwticher />
        </motion.div>
      </motion.div>
    </div>
  );
}

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};
