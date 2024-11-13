import React from 'react';
import './App.css';
import { LongNoseDog } from './MemeCat'; // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';
import FallingCubes from './FallingCubes';
import GumballMachine from './components/GumballMachine';

import ContactForm from './ContactForm'; // Import the ContactForm component
import ContactSection from './ContactSection'; // Import ContactSection component

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
          <a href="#contact">Contact</a>

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
            <i className="fab fa-python icon-python"></i>  {/* Python */}
            <i className="fas fa-database icon-sql"></i>  {/* SQL */}
            <i className="fab fa-js-square icon-js"></i>  {/* JavaScript */}
            <i className="fab fa-css3-alt icon-css"></i>  {/* CSS */}
            <i className="fab fa-html5 icon-html"></i>  {/* HTML */}
            <i className="fab fa-java icon-java"></i>  {/* Java */}
            {/* <img src="/ocaml.svg" alt="OCaml" className="icon-ocaml" />  OCaml SVG */}
            <img
              src="/ocaml.svg"
              alt="OCaml"
              className="icon-ocaml"
              style={{
                width: "40px", // Adjust the icon width
                height: "40px", // Adjust the icon height
              }}></img>

            <i className="fas fa-c icon-c"></i>  {/* C */}
          </div>
          <h3>Skills</h3>
          <div className="skills-section">

            <div className="skill-card">
              <h4>🤖 Deep Learning Skills</h4>
              <div className="skill-items">
                <span>Generative Models</span>
                <span>GAN</span>
                <span>WGAN-GP</span>
                <span>Diffusion</span>
                <span>Malware Detection</span>
                <span>Word2Vec</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>💻 Development Skills</h4>
              <div className="skill-items">
                <span>React</span>
                <span>APIs</span>
                <span>MongoDB</span>
                <span>SQL</span>
                <span>Figma</span>
                <span>Web App Development</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>🔒 Security Skills</h4>
              <div className="skill-items">
                <span>SQL Injection</span>
                <span>Cross-Site Scripting (XSS)</span>
                <span>CSRF Attacks</span>
                <span> Crptography</span>

                <span>Network Security</span>
              </div>
            </div>


          </div>

        </section>

        <section id="projects">
          <h2>Projects</h2>
          {/* <GumballMachine /> */}

          <div className="projects-section">
            <div className="project-card">
              <h3>Malware Detection System</h3>
              <p>Developed a GAN-based malware detection tool as part of my research in ML-based cybersecurity, achieving a 10% improvement in detection accuracy.</p>
              <div className="tech-labels">
                <span>Malware</span>
                <span>GAN</span>
                <span>Deep Learning</span>
                <span>Software Security</span>
              </div>
              <a href="https://github.com/tiffanybao/malware-detection" target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>

            <div className="project-card">
              <h3>OpenAI Security Web Audit</h3>
              <p>Contributed to a security web audit for OpenAI, ensuring robust security measures.</p>
              <div className="tech-labels">
                <span>Web Security</span>
                <span>CSRF/XSS Attack</span>
                <span>Tracking pixels</span>
                <span>Audit</span>
              </div>
              <a href="https://create.piktochart.com/output/f300c62e19df-cybersecurity-roadmap" target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>

            <div className="project-card">
              <h3>BUCSSA Web</h3>
              <p>Developed the official website for Boston University's Chinese Students and Scholars Association, showcasing community activities and resources.</p>
              <div className="tech-labels">
                <span>Web Development</span>
                <span>React</span>
                <span>Front end</span>
              </div>
              <a href="https://www.bucssa.org/" target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>

            <div className="project-card">
              <h3>BUCSSA Application Portal</h3>
              <p>Designed a full-stack application portal for BU Chinese students, enabling efficient application processing.</p>
              <div className="tech-labels">
                <span>Full-Stack</span>
                <span>React</span>
                <span>MySQL</span>
              </div>
              <a href="https://application-portal.bucssa.org/zhaoxin" target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>

            <div className="project-card">
              <h3>Fabrication Formwork in BU CS Shape Lab</h3>
              <p>Conducted research at BU’s Shape Lab, creating computational design models and pipelines for fabric fabrication in computer graphics.</p>
              <div className="tech-labels">
                <span>Computer Graphics</span>
                <span>Research</span>
                <span>Fabrication</span>
              </div>
              <a href="https://application-portal.bucssa.org/zhaoxin" target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>
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



        <section id="Contact" style={{ position: 'relative' }}>
          {/* <h2>Contact</h2> */}
          <ContactForm /> {/* Render the Contact section here */}

        </section>





        {/* need to fix this part */}
        <section id="Collections">
          <h2>Collections for useful links i found so far</h2>
          <p>
            <a href="        http://www.species-in-pieces.com/
" target="_blank" rel="noopener noreferrer">        http://www.species-in-pieces.com/
            </a>
            <a href="                   http://www.unixwiz.net/techtips/sql-injection.html

" target="_blank" rel="noopener noreferrer">                   http://www.unixwiz.net/techtips/sql-injection.html

            </a>
          </p>
        </section>


        <footer>
          <p>© 2024 Tiffany Bao. Built with React + Vite.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;


