import React from 'react';
import styles from './HeroSection.module.css';
import Generativeai from '../../assets/images/generativeai.png'; // ✅ Adjust path if needed

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>AI-Powered Solutions for Real-World Challenges</h1>
        <p>
          From customer experience to internal automation, our AI systems are built to solve your most critical business problems.
        </p>
        <button className={styles.getInTouchButton}>GET IN TOUCH</button>
      </div>

      <div className={styles.heroImage}>
        <img src={Generativeai} alt="Generative AI Illustration" className={styles.responsiveImage} />
      </div>
    </section>
  );
};

export default HeroSection;
