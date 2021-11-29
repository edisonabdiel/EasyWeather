import React from 'react';

import { GiGearStick } from 'react-icons/gi';

const UnitsToggle = ({ units, onUnitsChange }) => {
  const [isSettingsMenuOpened, setIsSettingsMenuOpened] = React.useState(false);
  const [isMetric, setIsMetric] = React.useState(
    units.match(/metric/i) ? true : false,
  );

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpened(!isSettingsMenuOpened);
  };

  const handleChange = () => {
    onUnitsChange(units.match(/metric/i) ? 'imperial' : 'metric');
    setIsMetric(!isMetric);
    toggleSettingsMenu();
  };

  return (
    <div className="w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
      <button
        type="button"
        className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-green-200 dark:focus:ring-white"
        id="toggle-units"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={toggleSettingsMenu}
      >
        <span className="sr-only">Open toggle units menu</span>
       <GiGearStick className="text-white text-4xl" />
      </button>
      {isSettingsMenuOpened ? (
        <div
          className="origin-top mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="toggle settings"
        >
          <ul>
            <li
              onClick={handleChange}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              role="menuitem"
            >
              Change units
              <br />
              <span className="text-xs text-indigo-500 dark:text-white">
                {isMetric ? 'Imperial' : 'Metric'}{' '}
                {isMetric ? `(F°, mph)` : `(C°, m/s)`}
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UnitsToggle;
