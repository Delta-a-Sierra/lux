const TextInput = ({ errorMsg, name, value, onChange, placeholder }) => {
  //TODO change auto fill background color

  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className={`${
          errorMsg ? "border border-red-500" : ""
        } flex items-center space-x-3 bg-gray-200  rounded-full w-full px-4 py-3  text-xs sm:text-base`}
      >
        <input
          className="bg-gray-200 w-full outline-none"
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      <p
        className={`${
          errorMsg ? "visible" : "invisible"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-xs sm:text-base`}
      >
        {errorMsg ? errorMsg : "error"}
      </p>
    </div>
  );
};

export default TextInput;
