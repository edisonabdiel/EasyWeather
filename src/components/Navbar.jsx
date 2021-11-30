import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Toggle } from './';

import { DiGithubAlt } from 'react-icons/di';
import { TiWeatherWindyCloudy } from 'react-icons/ti';

const NavBar = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="dark:text-white font-md mb-4">
      <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center justify-between md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 dark:text-white hover:text-white hover:bg-indigo-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleButton}
            >
              <span className="sr-only">
                {isMenuOpened ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMenuOpened ? (
                <svg
                  className="block bg-green-200 dark:bg-transparent h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block bg-green-200  dark:bg-transparent h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <Toggle />
          </div>
          <div className="hidden md:contents">
            <TiWeatherWindyCloudy className="text-4xl" />
            <Link to="/">
              <h3 className="ml-1 text-xl font-bold">reactWeather</h3>
            </Link>
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/edisonabdiel/EasyWeather"
                  >
                   <DiGithubAlt className="text-4xl text-black dark:text-gray-200 hover:text-gray-500 transition-colors duration-200" />
                  </a>
                  <Toggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpened && (
        <div
          className="md:hidden max-w-2xl mx-auto px-2 sm:px-6 lg:px-2"
          id="mobile-menu"
        >
          <div className="flex flex-col sm:px-2 sm:pt-2 sm:pb-3 space-y-1 md:w-1/2">
            <Link
              to="/"
              className="text-indigo-700 dark:text-white hover:bg-green-300 dark:bg-none dark:hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleButton}
            >
              Home
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/edisonabdiel/EasyWeather"
              className="text-indigo-700 dark:text-white hover:bg-green-300 dark:hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <DiGithubAlt className="text-4xl"/>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
