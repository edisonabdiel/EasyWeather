import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Custom Toggle handler
import Toggle from './theme-toggle';

import styles from './Navbar.module.css';

const NavBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleButton = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_main}>
                <div className={styles.navbar_container}>
                    <div className={styles.navbar_toggle}>
                        <button
                            type="button"
                            className={styles.navbar_toggle_button}
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleButton}
                        >
                            <span className="sr-only">
                                {isMenuOpened ? 'Close main menu' : 'Open main menu'}
                            </span>
                            {isMenuOpened ? (
                                <svg
                                    className={styles.navbar_svg}
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
                                    className={styles.navbar_svg}
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
                    <div className={styles.navbar_logo_container}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={styles.navbar_logo_svg}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                        </svg>
                        <Link to="/">
                            <h3 className={styles.navbar_logo_text}>reactWeather</h3>
                        </Link>
                        <div className={styles.navbar_github_link_container}>
                            <div className={styles.navbar_github_link_box}>
                                <div className={styles.navbar_github_link_flex}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/edisonabdiel/EasyWeather"
                                        className={styles.navbar_github_link}
                                    >
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path>
                                        </svg>
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
                    className={styles.navbar_mobile_menu}
                    id="mobile-menu"
                >
                    <div className={styles.navbar_mobile_menu_flex}>
                        <Link
                            to="/"
                            className={styles.navbar_mobile_menu_link}
                            onClick={toggleButton}
                        >
                            Home
                        </Link>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/edisonabdiel/EasyWeather"
                            className={styles.navbar_mobile_menu_github_link}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
