import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { LongNoseDog } from './MemeCat';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FallingCubes from './FallingCubes';
import GumballMachine from './components/GumballMachine';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';
import LoginPage from './LoginPage';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Evillogin';

  return (
    <div className="App">

      {!isLoginPage && (
        <aside className="sidebar">
          <h1>Tiffany Bao</h1>
          <img src="/dio_logo.png" alt="Logo" className="login-logo" />

          <nav>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#resume">CV/Resume</Link>
            <Link to="/#work">Work</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/EviLlogin" className="login-nav-button">Login</Link>
          </nav>
          <div className="contact-info">
            <h2>Contact me via:</h2>
            <p>
              <a href="mailto:tiff0207@bu.edu" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/tiffanybao0207/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
        </aside>
      )}

      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <section id="about">
                <h2>About Me</h2>
                <p>Hi! I'm Tiffany, a senior undergraduate student at BU majoring in Computer Science and Mathematics.</p>
                <h3>Interests</h3>
                <ul>
                  <li>AI and Security: My main interests, where I focus on research and development.</li>
                  <li>Computer Graphics: Explored graphics through projects and hands-on experiences.</li>
                  <li>Machine Learning: Participated in Kaggle competitions to strengthen ML skills.
                    <div className="animation-container">
                      {/* <LongNoseDog /> */}
                    </div>
                  </li>
                  <li>Capture The Flag (CTF): Excited to participate in an upcoming CTF competition at the end of the year.</li>
                  <li>Animation: Created using JavaScript and Lottie, just for fun while exploring animation features.</li>
                </ul>
                <h3>Programming Languages</h3>
                <div className="languages-grid">
                  <i className="fab fa-python icon-python"></i>
                  <i className="fas fa-database icon-sql"></i>
                  <i className="fab fa-js-square icon-js"></i>
                  <i className="fab fa-css3-alt icon-css"></i>
                  <i className="fab fa-html5 icon-html"></i>
                  <i className="fab fa-java icon-java"></i>
                  <img
                    src="/ocaml.svg"
                    alt="OCaml"
                    className="icon-ocaml"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <i className="fas fa-c icon-c"></i>
                </div>
                <h3>Skills</h3>
                <div className="skills-section">
                  <div className="skill-card">
                    <h4>🤖 Deep Learning Skills</h4>
                    <div className="skill-items">
                      <span>Generative Models</span>
                      <span>NLP</span>
                      <span>Diffusion/WGAN-GP/GAN models</span>
                      <span>Malware Detection</span>
                      <span>Word2Vec</span>
                    </div>
                  </div>
                  <div className="skill-card">
                    <h4>💻 Development Skills</h4>
                    <div className="skill-items">
                      <span>React, Figma</span>
                      <span>APIs</span>
                      <span>MongoDB, MySQL</span>
                      <span>Flask</span>
                      <span>Web App Development</span>
                    </div>
                  </div>
                  <div className="skill-card">
                    <h4>🔒 Security Skills</h4>
                    <div className="skill-items">
                      <span>SQL Injection</span>
                      <span>Cross-Site Scripting (XSS)</span>
                      <span>CSRF Attacks</span>
                      <span>Cryptography</span>
                      <span>Web Security</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="projects">
                <h2>Projects</h2>
                <div className="projects-section">
                  <div className="project-card">
                    <h3>Malware Detection System</h3>
                    <p>Developed a GAN-based malware detection tool as part of my research in ML-based cybersecurity, achieving a 10% improvement in detection accuracy.</p>
                    <div className="tech-labels">
                      <span>Malware</span>
                      <span>GAN</span>
                      <span>Deep Learning</span>
                      <span>Software Security</span>
                      <span>Research</span>
                    </div>
                    <button disabled style={{ cursor: 'not-allowed', opacity: 0.6 }}>
                      View Project (Coming Soon)
                    </button>
                  </div>

                  {/* Other project cards remain exactly the same */}
                  {/* ... */}

                </div>
              </section>

              <section id="resume">
                <h2>CV/Resume</h2>
                <p>
                  You can view my resume <a href="https://drive.google.com/file/d/1g5KJNlWXr2xzpzooRgf1uUipTDlv0fQE/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </section>

              <section id="work">
                <h2>Work Experience</h2>
                <ul>
                  <li>
                    <strong>Teaching Assistant - Boston University</strong> (Fall 2024 - December 2024)
                    <p>Served as a TA for MA123 Calculus courses, assisting students with assignments, facilitating discussion sections, and preparing them for exams.</p>
                  </li>
                  {/* Other work experience items remain the same */}
                  {/* ... */}
                </ul>
              </section>

              <section id="contact" style={{ position: 'relative' }}>
                <h2>Contact</h2>
                <ContactForm />
              </section>

              <footer>
                <p>© 2024 Tiffany Bao. Built with React + Vite.</p>
              </footer>
            </>
          } />
          <Route path="/Evillogin" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;