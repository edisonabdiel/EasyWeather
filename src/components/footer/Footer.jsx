import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>
        <span className={styles.footer_slogan}>
          Made with ❤️‍🔥 by{' '}
          <a
            className={styles.footer_link}
            href="https://edisonabdiel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EdisonAbdiel
          </a>
          <span className={styles.copyright}>&copy;2021</span>
        </span>
      </p>
    </footer>
  );

export default Footer;
