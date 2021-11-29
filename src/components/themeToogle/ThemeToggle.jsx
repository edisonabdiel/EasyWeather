import { useContext } from 'react';
//Icons
import { HiMoon, HiSun } from 'react-icons/hi';
//Theme Context
import { ThemeContext } from './';

import styles from './ThemeToggle.module.css';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      role="switch"
      className={styles.toggle_button}
    >
      {theme === 'dark' ? (
        <HiSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles.toggle_icon}
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles.toggle_icon}
        />
      )}
    </div>
  );
};

export default Toggle;
