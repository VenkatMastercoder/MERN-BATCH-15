import React from "react";
import ComponentD from "./ComponentD";

const ComponentB = (props) => {
  console.log(props);

  const { userData, handleChange } = props;

  // onClick ==> no Arg ==> onClick={handleChange} - 1
  // onClick ==> with Arg ==> onClick={()=>handleChange("cafqw")} - 2

  return (
    <div className="border border-red-500 py-5">
      <p>ComponentB</p>
      {userData}

      <div>
        <button
          onClick={() => handleChange("Hello Sam")}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Update the State
        </button>
      </div>

      <ComponentD data={userData} />
    </div>
  );
};

export default ComponentB;
