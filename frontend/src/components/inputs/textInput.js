const TextInput = ({ errorMsg, name, value, onChange, placeholder }) => {
  //TODO change auto fill background color

  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className={`${
          errorMsg ? "border border-red-500" : ""
        } flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full w-full text-xl`}
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
          errorMsg ? "inline" : "hidden"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-md`}
      >
        {errorMsg}
      </p>
    </div>
  );
};

export default TextInput;
