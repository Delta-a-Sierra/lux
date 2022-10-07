import { useMediaQuery } from "../../hooks";
import {
  LogoCirc,
  EmailInput,
  PasswordInput,
  Button,
  OutlinedButton,
  FloatLink,
} from "../../components";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignInPresentation = ({ formik, LoadSignup }) => {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <div className=" h-screen w-screen flex overflow-hidden">
      <aside className="bg-primary z-10 p-4 hidden md:flex flex-col justify-center items-center  h-full  w-2/6 lg:w-2/6 xl:w-1/4">
        <div className="bg-primary flex-col items-center justify-center space-y-8  hidden md:flex p-2 w-full">
          <h1 className="font-open font-extrabold text-white text-3xl text-center">
            Hello, Friend!
          </h1>
          <p className="text-white font-nunito text-center text-base font-thin tracking-wider">
            Enter your personal details to get started on your journey with us.
          </p>
          <OutlinedButton color="white" text="Sign Up" onClick={LoadSignup} />
        </div>
      </aside>
      <main className="flex flex-col flex-1 gap-1 py-4 md:py-4 px-10 sm:px-8">
        <header className="md:self-start flex justify-center mb-2">
          <LogoCirc align="start" width={isLarge ? "20" : "16"} />
        </header>
        <div className="flex-1">
          <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
            <h1 className="font-open font-extrabold text-primary text-2xl md:text-3xl lg:text-5xl text-center">
              Sign In To Lux
            </h1>
            <div className="flex space-x-5 md:mt-4 mb-4">
              <FaFacebook size={isLarge ? "3em" : "2em"} color="#084887" />
              <FaGoogle size={isLarge ? "3em" : "2em"} color="#084887" />
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
              <FloatLink
                text="Forgot your password?"
                target="_blank"
                link="#"
                color="secondary"
              />
              <div className="pt-4">
                <Button
                  type="submit"
                  color="primary"
                  text="Sign In"
                  size={isLarge ? "xl" : "xs"}
                  onClick={() => {}}
                />
              </div>
            </form>
            <div className="md:hidden pb-20">
              <FloatLink text="Create an account?" link="/signup" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPresentation;
