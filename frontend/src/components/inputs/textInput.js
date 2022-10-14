const TextInput = ({
  errorMsg,
  name,
  value,
  onChange,
  placeholder,
  noErrors,
  bg,
}) => {
  //TODO change auto fill background color

  return (
    <div>
      <label
        htmlFor="email"
        className={`${
          errorMsg ? "border border-red-500" : ""
        } flex items-center space-x-3 ${
          bg ? `bg-${bg}` : "bg-gray-200"
        }   rounded-full w-full px-4 py-3  text-xs sm:text-base`}
      >
        <input
          className=" bg-transparent w-full outline-none text-gray-600"
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {!noErrors && (
        <p
          className={`${
            errorMsg ? "visible" : "invisible"
          } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-xs sm:text-base`}
        >
          {errorMsg ? errorMsg : "error"}
        </p>
      )}
    </div>
  );
};

export default TextInput;
