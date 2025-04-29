import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-auto h-8 dark:block" src={Logo} alt="" />
          </Link>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Open-source library of over 400+ web components and interactive
            elements built for better web.
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" class="mr-4 hover:underline md:mr-6">
                Products
              </Link>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <a href="#" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
