import React from 'react';
import './App.css';
import { LongNoseDog } from './MemeCat'; // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';
import DancingModel from './DancingModel';

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <h1>Tiffany Bao</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">CV/Resume</a>
          <a href="#work">Work</a>
        </nav>
        <div className="contact-info">
          <h2>Contact me via:</h2>
          <p>
            <a href="mailto:tiff0207@bu.edu" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> {/* Email Icon */}
            </a>
            <a href="https://www.linkedin.com/in/tiffanybao0207/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
          </p>
        </div>
      </aside>

      <div className="main-content">
        <section id="about">
          <h2>About Me</h2>
          <p>Hi! I'm Tiffany, a senior undergraduate student at BU majoring in Computer Science and Mathematics.</p>
          <ul>
            <li>AI and Security: My main interests, where I focus on research and development.</li>
            <li>Computer Graphics: Explored graphics through projects and hands-on experiences.</li>
            <li>Machine Learning: Participated in Kaggle competitions to strengthen ML skills.
              <div className="animation-container">
                <LongNoseDog />
              </div>
            </li>
            <li>Capture The Flag (CTF): Excited to participate in an upcoming CTF competition at the end of the year.</li>
            <li>Animation: Created using JavaScript and Lottie, just for fun while exploring animation features.</li>
          </ul>
          <h3>Skills</h3>
          <div className="skills-grid">
            <i className="fab fa-python"></i>  {/* Python */}
            <i className="fas fa-database"></i>  {/* SQL */}
            <i className="fab fa-js-square"></i>  {/* JavaScript */}
            <i className="fab fa-css3-alt"></i>  {/* CSS */}
            <i className="fab fa-html5"></i>  {/* HTML */}
            <i className="fab fa-java"></i>  {/* Java */}
            <img src="/path/to/ocaml-icon.svg" alt="OCaml" />  {/* OCaml SVG */}
            <i className="fas fa-c"></i>  {/* C */}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/tiffanybao/malware-detection" target="_blank" rel="noopener noreferrer">
                <strong>Malware Detection System</strong>
              </a>
              - Developed a GAN-based malware detection tool as part of my research in ML-based cybersecurity, achieving a 10% improvement in detection accuracy.
            </li>
            <li>
              <a href="https://create.piktochart.com/output/f300c62e19df-cybersecurity-roadmap" target="_blank" rel="noopener noreferrer">
                <strong>OpenAI Security Web Audit</strong>
              </a>
              - Contributed to a security web audit for OpenAI, ensuring robust security measures.
            </li>
            <li>
              <a href="https://www.bucssa.org/" target="_blank" rel="noopener noreferrer">
                <strong>BUCSSA Web</strong>
              </a>
              - Developed the official website for Boston University's Chinese Students and Scholars Association, showcasing community activities and resources.
            </li>
            <li>
              <a href="https://application-portal.bucssa.org/zhaoxin" target="_blank" rel="noopener noreferrer">
                <strong>BUCSSA Application Portal</strong>
              </a>
              - Designed a full-stack application portal for BU Chinese students, enabling efficient application processing.
            </li>
            <li>
              <a href="https://application-portal.bucssa.org/zhaoxin" target="_blank" rel="noopener noreferrer">
                <strong>Fabrication Formwork in BU CS Shape Lab</strong>
              </a>
              - Conducted research at BU’s Shape Lab, creating computational design models and pipelines for fabric fabrication in computer graphics, involving hands-on work with 3D formwork models and fabrication processes.
            </li>
          </ul>
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
            <li>
              <strong>Teaching Assistant - Boston University</strong> (Fall 2023 - December 2023)
              <p>Served as a TA for MA121 Calculus courses, assisting students with assignments, facilitating discussion sections, and preparing them for exams.</p>
            </li>
            <li>
              <strong>Undergraduate Researcher - San Jose State University, ML-based Cybersecurity Program</strong> (Summer 2024)
              <p>Participated in a Research Experience for Undergraduates (REU) program, leading a team to apply generative AI models such as Diffusion, GAN, and WGAN-GP, resulting in a 10% improvement in malware detection accuracy.</p>
            </li>
            <li>
              <strong>Undergraduate Researcher - New Mexico State University, BigDATA Program</strong> (Summer 2023)
              <p>Engaged in an REU program focusing on data analysis and machine learning, visualizing and interpreting datasets to uncover insights about societal connections and recommending recent research papers.</p>
            </li>
          </ul>
        </section>

        {/* Add Dancing Model in its own section */}
        <section id="dancing-model">
          <DancingModel />
        </section>
        <footer>
          <p>© 2024 Tiffany Bao. Built with React + Vite.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;


