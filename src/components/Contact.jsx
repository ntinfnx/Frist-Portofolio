import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Mari Berdiskusi</h2>
            <p className="contact-desc">
              Punya ide proyek automasi atau ingin mengoptimalkan proses bisnis Anda? 
              Jangan ragu untuk menghubungi saya.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Email"><Mail size={24} /></a>
              <a href="#" className="social-icon" aria-label="GitHub"><FaGithub size={24} /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter size={24} /></a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" placeholder="Nama Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email@contoh.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" rows="4" placeholder="Ceritakan tentang proyek Anda..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Kirim Pesan</button>
            </form>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AI Automation Builder. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
