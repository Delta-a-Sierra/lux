import {
  LogoCirc,
  EmailInput,
  PasswordInput,
  Button,
  OutlinedButton,
  FloatLink,
} from "../../components";
import { useMediaQuery } from "../../hooks";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { motion } from "framer-motion";

//TODO BUG:fix logo popping on pag transistion

let containerMotion = {
  slid: {
    x: 0,
    y: 0,
  },
  base: {
    x: 0,
    y: 0,
  },
};

let contentMotion = {
  slid: {
    x: "-100vw",
  },
  base: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.1,
      stiffness: 30,
      bounce: 0,
    },
  },
  exit: {
    x: "100vw",
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const SignupPresentation = ({ formik, LoadSignin }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    containerMotion = {
      slid: {
        x: "30vw",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
      base: {
        x: 0,
        transition: {
          type: "spring",
          duration: 0.1,
          stiffness: 30,
          bounce: 0,
        },
      },
    };

    contentMotion = {
      slid: {
        opacity: 0,
        x: "-100vw",
      },
      base: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.1,
          stiffness: 30,
          bounce: 0,
        },
      },
      exit: {
        x: "-100vw",
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    };
  }

  return (
    <div className="flex overflow-hidden">
      <div className="p-10 h-screen w-screen flex flex-col items-center space-y-4 pb-10">
        <div className="sm:self-start">
          <LogoCirc align="start" />
        </div>
        <motion.div
          variants={contentMotion}
          initial="slid"
          animate="base"
          exit="exit"
          className="w-full flex flex-col items-center sm:h-2/3 sm:justify-center space-y-4"
        >
          <h1 className="font-open font-extrabold text-primary text-2xl text-center">
            Sign Up To Lux
          </h1>
          <div className="flex space-x-5">
            <FaFacebook size="2em" color="#084887" />
            <FaGoogle size="2em" color="#084887" />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full space-y-4 flex flex-col items-center pb-5 sm:w-4/5 md:w-3/5 lg:w-2/4 xl:w-1/4"
          >
            <EmailInput
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              errorMsg={formik.errors.email}
              onBlur={formik.handleBlur}
              touched={formik.touched.email}
            />
            <PasswordInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              errorMsg={formik.errors.password}
              placeholder="enter password"
              onBlur={formik.handleBlur}
              touched={formik.touched.password}
            />
            <PasswordInput
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              errorMsg={formik.errors.confirmPassword}
              placeholder="confirm password"
              onBlur={formik.handleBlur}
              touched={formik.touched.confirmPassword}
            />
            <div className="pt-4">
              <Button
                type="submit"
                color="primary"
                text="Sign Up"
                onClick={() => {}}
              />
            </div>
          </form>
        </motion.div>
        <div className="h-full grow flex flex-col justify-end sm:pb-10 sm:hidden">
          <FloatLink text="Already have an account?" link="/signin" />
        </div>
      </div>
      <motion.div
        variants={containerMotion}
        initial="slid"
        animate="base"
        exit="slid"
        className="bg-primary flex-col items-center justify-center space-y-10  hidden sm:flex p-2 w-2/5 lg:w-2/5 xl:w-1/5"
      >
        <h1 className="font-open font-extrabold text-white text-3xl text-center">
          Hello, Friend!
        </h1>
        <p className="text-white font-nunito w-4/5 text-center text-base font-thin tracking-wider">
          Enter your personal details to get started on your journey with us.
        </p>
        <OutlinedButton color="white" text="Sign In" onClick={LoadSignin} />
      </motion.div>
    </div>
  );
};

export default SignupPresentation;
