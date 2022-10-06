import { MdEmail } from "react-icons/md";

const EmailInput = ({ name, value, onChange, errorMsg, onBlur, touched }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className={`${
          errorMsg ? "border border-red-500" : ""
        } flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full w-full text-sm md:text-base lg:text-xl xl:text-2xl`}
      >
        <MdEmail size="1.4em" color="#7F7F7F" />
        <input
          className="bg-gray-200 w-full outline-none"
          type="text"
          name={name}
          placeholder="Enter Email"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      <p
        className={`${
          touched && errorMsg ? "inline" : "hidden"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-xs lg:text-base xl:text-lg`}
      >
        {errorMsg}
      </p>
    </div>
  );
};

export default EmailInput;
