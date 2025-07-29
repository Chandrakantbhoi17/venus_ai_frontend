import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.clientsSection}>
        <h2>
          Clients in collaboration <span className={styles.highlight}></span>
        </h2>
        <p>Trusted by top organizations and startups across industries.</p>
      </section>
    </footer>
  );
};

export default Footer;
