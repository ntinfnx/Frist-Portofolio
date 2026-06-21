import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="about-content"
        >
          <h2 className="section-title">Tentang Saya</h2>
          <p className="about-text">
            Saya mengkhususkan diri dalam membangun sistem cerdas yang menggabungkan kekuatan AI dan automasi workflow. 
            Fokus utama saya adalah merancang solusi teknis yang menghilangkan tugas repetitif, mengoptimalkan proses bisnis, 
            dan memberikan nilai tambah yang nyata melalui teknologi mutakhir.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
