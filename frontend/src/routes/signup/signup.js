import SignupPresentation from "./signupPresentation";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const Signup = () => {
  const Navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().password().required(),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: () => {
      Navigate("/getstarted");
    },
  });

  const LoadSignin = () => {
    Navigate("/signin");
  };

  return <SignupPresentation formik={formik} LoadSignin={LoadSignin} />;
};

export default Signup;
