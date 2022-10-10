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
import { useTheme } from "../../contexts/theme";
import ThemeIcon from "../../components/themeIcon";
import { colors } from "../../util";

//TODO BUG:fix logo popping on pag transistion

const SignupPresentation = ({ formik, LoadSignin }) => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const {
    state: { dark },
  } = useTheme();

  return (
    // <div className=" h-screen w-screen flex overflow-x-hidden overflow-y-scroll">
    //   <aside className=" bg-primary z-10 p-4 hidden md:flex flex-col justify-center items-center gap-y-8  h-full  w-2/6 lg:w-2/6 xl:w-1/4">
    //     <h1 className="font-open font-extrabold text-white text-3xl text-center">
    //       Hello, Friend!
    //     </h1>
    //     <p className="text-white font-nunito text-center text-base font-thin tracking-wider">
    //       Enter your personal details to get started on your journey with us.
    //     </p>
    //     <OutlinedButton color="white" text="Sign In" onClick={LoadSignin} />
    //   </aside>
    //   <main className="flex flex-col flex-1 gap-1 py-4 md:py-4 px-10 sm:px-8">
    //     <header className="md:self-start flex justify-center mb-2">
    //       <LogoCirc align="start" width={isLarge ? "20" : "16"} />
    //     </header>
    //     <div className="flex-1">
    //       <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
    //         <h1 className="font-open font-extrabold text-primary text-2xl md:text-3xl lg:text-5xl text-center">
    // Sign Up To Lux
    //         </h1>
    //         <div className="flex space-x-5 md:mt-4 mb-4">
    //           <FaFacebook size={isLarge ? "3em" : "2em"} color="#084887" />
    //           <FaGoogle size={isLarge ? "3em" : "2em"} color="#084887" />
    //         </div>
    //         <form
    //           onSubmit={formik.handleSubmit}
    //           className="w-full space-y-2 md:gap-y-4 flex flex-col items-center pb-5  sm:w-4/6 md:w-4/5 lg:w-4/5 xl:w-2/4"
    //         >
    // <EmailInput
    //   name="email"
    //   onChange={formik.handleChange}
    //   value={formik.values.email}
    //   errorMsg={formik.errors.email}
    //   onBlur={formik.handleBlur}
    //   touched={formik.touched.email}
    // />
    // <PasswordInput
    //   name="password"
    //   onChange={formik.handleChange}
    //   value={formik.values.password}
    //   errorMsg={formik.errors.password}
    //   placeholder="enter password"
    //   onBlur={formik.handleBlur}
    //   touched={formik.touched.password}
    // />
    // <PasswordInput
    //   name="confirmPassword"
    //   onChange={formik.handleChange}
    //   value={formik.values.confirmPassword}
    //   errorMsg={formik.errors.confirmPassword}
    //   placeholder="confirm password"
    //   onBlur={formik.handleBlur}
    //   touched={formik.touched.confirmPassword}
    // />
    //           <div className="pt-4">
    //             <Button
    //               type="submit"
    //               color="primary"
    //               text="Sign Up"
    //               size={isLarge ? "xl" : "xs"}
    //               onClick={() => {}}
    //             />
    //           </div>
    //         </form>
    //         <div className="md:hidden pb-20">
    //           <FloatLink text="Already have an account?" link="/signin" />
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div className=" h-screen w-screen flex overflow-hidden">
      <aside className="bg-primary  z-10 p-4 hidden md:flex flex-col justify-center items-center gap-y-8  h-full  w-2/6 lg:w-2/6 xl:w-1/4">
        <h1 className="font-open font-extrabold text-white text-3xl text-center">
          Welcome, Back!
        </h1>
        <p className="text-white font-nunito text-center text-base font-thin tracking-wider">
          Enter your personal details to continue on your journey with us.
        </p>
        <OutlinedButton color="white" text="Sign In" onClick={LoadSignin} />
      </aside>
      <main className="flex flex-col flex-1 gap-1 py-4 md:py-4 px-10 sm:px-8 dark:bg-dark-800 ">
        <header className="flex items-center justify-center md:justify-start mb-2 w-full relative">
          <LogoCirc align="start" width={isLarge ? "20" : "16"} />
          <div className="w-full flex justify-end absolute">
            <ThemeIcon
              size={isLarge ? "2em" : "1.5em"}
              color={colors.gray["500"]}
            />
          </div>
        </header>
        <div className="flex-1">
          <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
            <h1 className="font-open font-extrabold text-primary dark:text-gray-200 text-2xl md:text-3xl lg:text-5xl text-center">
              Sign Up To Lux
            </h1>
            <div className="flex space-x-5 md:mt-4 mb-4">
              <FaFacebook
                size={isLarge ? "3em" : "2em"}
                color={dark ? colors.gray["500"] : colors.primary}
              />
              <FaGoogle
                size={isLarge ? "3em" : "2em"}
                color={dark ? colors.gray["500"] : colors.primary}
              />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="w-full space-y-2 md:gap-y-4 flex flex-col items-center pb-5  sm:w-4/6 md:w-4/5 lg:w-4/5 xl:w-2/4"
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
                  text="Sign In"
                  px={isLarge ? "8" : "4"}
                  size={isLarge ? "xl" : "xs"}
                  onClick={() => {}}
                />
              </div>
            </form>
            <div className="md:hidden pb-20">
              <FloatLink
                text="Already have an account?"
                link="/signin"
                color={dark ? "gray-100" : "dark-800"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPresentation;
