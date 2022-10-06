import { MdPassword } from "react-icons/md";

const PasswordInput = ({
  errorMsg,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
  touched,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className={`${
          errorMsg ? "border border-red-500" : ""
        } flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full w-full text-sm md:text-base lg:text-lg xl:text-2xl`}
      >
        <MdPassword size="1.4em" color="#7F7F7F" />
        <input
          className="bg-gray-200 w-full outline-none"
          type="password"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      <p
        className={`${
          touched && errorMsg ? "visible" : "hidden"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-xs lg:text-base xl:text-lg`}
      >
        {errorMsg ? errorMsg : "error"}
      </p>
    </div>
  );
};

export default PasswordInput;
