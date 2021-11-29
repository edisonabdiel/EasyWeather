import {useContext} from 'react';

import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

import { ThemeContext } from './theme-context';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      role="switch"
      className="transition duration-500 ease-in-out rounded-full p-2"
    >
      {theme === 'dark' ? (
        <BsFillSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-black dark:text-gray-200 text-2xl cursor-pointer"
        />
      ) : (
        <BsMoonStarsFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-black dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
