import { useState } from "react";

const Counter = () => {
  let value = 0; // ❌ in React

  // Local State Variable in React
  const [values, setValues] = useState(0);

  const [name, setName] = useState("Sam");

  const [bool, setBool] = useState(true);

  return (
    <>
      <div className="border border-green-500 p-5">
        <p>Hello Counter</p>
        <p>{values}</p>

        <button
          onClick={() => {
            // value = value + 1;
            console.log(values);
            setValues(values + 1);
          }}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          +
        </button>

        <button
          onClick={() => {
            // value = value - 1;
            console.log(values);
            setValues(values - 1);
          }}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          -
        </button>

        <button
          onClick={() => {
            // value = 0;
            setValues(0);
          }}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Reset
        </button>
      </div>

      <div className="border border-green-500 p-5">
        For a String
        <p className="p-5">{name}</p>
        <button
          onClick={() => {
            setName("Ram");
          }}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Change the Value
        </button>
      </div>

      <div className="border border-green-500 p-5">
        For a Boolean
        <p className="p-5">{bool ? "✅" : "❌"}</p>
        <button
          onClick={() => {
            setBool(false);
          }}
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Change the Value
        </button>
      </div>
    </>
  );
};

export default Counter;
