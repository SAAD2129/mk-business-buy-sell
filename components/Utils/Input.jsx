import React from "react";

const Input = ({ id, type, handler, value,min,max, classes,hint }) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      onChange={handler}
      value={value}
      min={min}
      max={max}
      placeholder={hint}
      className={`${classes} block w-full px-4 py-3 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:z-10 text-sm leading-5 bg-[#161618] border border-gray-400 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-orange-500/10 hover:shadow-lg focus:scale-100 focus:bg-orange-500/10 focus:shadow-lg focus:text-orange-600 focus:font-semibold hover:border-orange-700 focus:border-2 focus:border-orange-700`}
    />
  );
};

export default Input;
