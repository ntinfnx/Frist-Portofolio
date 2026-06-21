import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Automasi Customer Service WhatsApp',
    description: 'Membangun chatbot cerdas yang dapat menjawab pertanyaan pelanggan secara otomatis dan melakukan routing tiket menggunakan NLP.',
    tags: ['WAHA', 'n8n', 'OpenAI'],
  },
  {
    id: 2,
    title: 'Workflow n8n untuk Bisnis',
    description: 'Sistem automasi end-to-end yang menghubungkan CRM, email marketing, dan manajemen invoice untuk mengurangi pekerjaan manual.',
    tags: ['n8n', 'HubSpot', 'Stripe'],
  },
  {
    id: 3,
    title: 'AI Content Generator Pipeline',
    description: 'Pipeline yang mengumpulkan tren industri, menghasilkan draf artikel menggunakan LLM, dan menjadwalkan publikasi di CMS.',
    tags: ['Python', 'LangChain', 'WordPress API'],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">Beberapa proyek automasi dan integrasi AI yang telah saya kerjakan.</p>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} className="project-card" variants={itemVariants}>
              <div className="project-image-placeholder">
                <span className="placeholder-text">Gambar Proyek</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  Lihat Detail <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
