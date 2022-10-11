import { motion } from "framer-motion";

const containerMotion = {
  initial: {
    x: "100vw",
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 45,
      bounce: 0,
    },
  },
  base: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      stiffness: 45,
      bounce: 0,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.4,
    },
  },
};

const GetStartedContainer = ({ title, children }) => {
  return (
    <motion.div
      variants={containerMotion}
      initial="initial"
      animate="base"
      exit="exit"
      className="w-full flex justify-center h-fit"
    >
      <main className="bg-white dark:bg-dark-500 rounded w-full p-5 space-y-5 shadow-lg">
        <h2 className="text-center text-primary dark:text-white text-2xl font-open font-bold">
          {title}
        </h2>
        <div>
          <form className="flex flex-col space-y-2 p-y-2 sm:space-y-5 sm:px-20 sm:py-4">
            {children}
          </form>
        </div>
      </main>
    </motion.div>
  );
};

export default GetStartedContainer;
