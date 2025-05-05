import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid Email" }),
  phone_number: z.string().min(1, { message: "Required" }),
  message: z.string().min(1, { message: "Required" }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    // defaultValues: { name: "Ram", message: "Type a Message" },
    resolver: zodResolver(schema),
  });

  const SubmitFunction = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">We'd love to hear from you!</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(SubmitFunction)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`block w-full px-3 py-2 mt-1 transition-colors border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="flex items-center mt-1 text-sm text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.name?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`block w-full px-3 py-2 mt-1 transition-colors border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="flex items-center mt-1 text-sm text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.email?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              className={`block w-full px-3 py-2 mt-1 transition-colors border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.phone_number ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
              {...register("phone_number")}
            />
            {errors.phone_number?.message && (
              <p className="flex items-center mt-1 text-sm text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.phone_number?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`block w-full px-3 py-2 mt-1 transition-colors border rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your message"
              {...register("message")}></textarea>
            {errors.message?.message && (
              <p className="flex items-center mt-1 text-sm text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.message?.message}
              </p>
            )}
          </div>

          <div>
            <button
              disabled={!isValid}
              type="submit"
              className={`flex justify-center w-full px-4 py-3 text-sm font-medium transition-all duration-200 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${isValid 
                  ? 'text-white bg-indigo-600 hover:bg-indigo-700 border-transparent focus:ring-indigo-500' 
                  : 'text-gray-500 bg-gray-200 cursor-not-allowed border-gray-300'}`}>
              {isValid ? 'Send Message' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
