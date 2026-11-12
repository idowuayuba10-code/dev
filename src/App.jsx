import React, { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Link,
  Menu,
  Monitor,
  Palette,
  X,
} from "lucide-react";
const projects = [
  {
    name: "Kroyal Fashion",
    type: "E-commerce • React",
    desc: "A luxury-inspired storefront concept with product discovery and a working demo bag.",
    img: "/assets/project-fashion.svg",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    name: "MovieBox",
    type: "Entertainment • React",
    desc: "A movie discovery interface with search, categories and detailed title views.",
    img: "/assets/project-movies.svg",
    tags: ["React", "API", "Responsive UI"],
  },
  {
    name: "Insight Dashboard",
    type: "Dashboard • UI",
    desc: "A clean dashboard concept focused on readable data and useful information hierarchy.",
    img: "/assets/project-dashboard.svg",
    tags: ["UI/UX", "CSS", "JavaScript"],
  },
];
export default function App() {
  const [menu, setMenu] = useState(false),
    [sent, setSent] = useState(false);
  return (
    <div className="portfolio">
      <header className="pnav">
        <a className="logo" href="#">
          ayuba<span>.</span>
        </a>
        <button className="hamb" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "show" : ""}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="navcta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main>
        <section className="phero">
          <div className="availability">
            <i /> AVAILABLE FOR LEARNING & COLLABORATION
          </div>
          <h1>
            Building digital
            <br />
            <span>experiences</span>
            <br />
            with purpose.
          </h1>
          <p className="lead">
            I'm Ayuba — an aspiring frontend developer interested in thoughtful
            interfaces, clean code and useful products.
          </p>
          <div className="pactions">
            <a className="primary" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="herofoot">
            <span>BASED IN THE UK</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <section id="work" className="psection">
          <div className="phead">
            <div>
              <small>01 / SELECTED WORK</small>
              <h2>
                Things I've been
                <br />
                working on<span>.</span>
              </h2>
            </div>
            <p>
              A selection of practice projects exploring design and frontend
              development.
            </p>
          </div>
          <div className="workgrid">
            {projects.map((p, i) => (
              <article className="workcard" key={p.name}>
                <img src={p.img} />
                <div className="workinfo">
                  <div>
                    <small>
                      0{i + 1} — {p.type}
                    </small>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="#contact" aria-label={"Ask about " + p.name}>
                    <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about psection">
          <div>
            <small>02 / A LITTLE ABOUT ME</small>
            <h2>
              Curious by nature.
              <br />
              <span>Developer in progress.</span>
            </h2>
          </div>
          <div className="abouttext">
            <p>
              I'm building my skills through hands-on projects and consistent
              practice. I enjoy turning ideas and designs into responsive,
              accessible web experiences.
            </p>
            <p>
              My current focus is strengthening my React and JavaScript skills
              while learning professional development workflows with Git and
              GitHub.
            </p>
            <div className="stats">
              <div>
                <b>04+</b>
                <span>Core technologies</span>
              </div>
              <div>
                <b>03</b>
                <span>Featured concepts</span>
              </div>
              <div>
                <b>∞</b>
                <span>Things to learn</span>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="psection skills">
          <div className="phead">
            <div>
              <small>03 / MY TOOLKIT</small>
              <h2>
                Tools of the trade<span>.</span>
              </h2>
            </div>
          </div>
          <div className="skillgrid">
            <div>
              <Code2 />
              <h3>Development</h3>
              <p>HTML · CSS · JavaScript · React · Git · GitHub</p>
            </div>
            <div>
              <Palette />
              <h3>Design</h3>
              <p>UI/UX thinking · Figma · Responsive layouts · Prototyping</p>
            </div>
            <div>
              <Monitor />
              <h3>Currently learning</h3>
              <p>TypeScript · APIs · Testing · Accessibility · Deployment</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact psection">
          <small>04 / START A CONVERSATION</small>
          <h2>
            Have an idea?
            <br />
            <span>Let's make it real.</span>
          </h2>
          <p>
            For project conversations, feedback or learning opportunities, send
            a message.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.location.href =
                "mailto:hello@example.com?subject=Portfolio%20enquiry&body=Hello%20Ayuba,";
            }}
          >
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Your email" />
            <textarea
              required
              placeholder="Tell me a little about your message"
            />
            <button className="primary">
              Send an email <ArrowUpRight size={17} />
            </button>
          </form>
          {sent && (
            <small>
              Your email app should open with a draft. Replace the demo email
              address in the source with your own.
            </small>
          )}
        </section>
      </main>
      <footer className="pfooter">
        <a className="logo" href="#">
          ayuba<span>.</span>
        </a>
        <span>Designed & built with React.</span>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Code2 />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
        <small>© 2026 Ayuba. Learning portfolio concept.</small>
      </footer>
    </div>
  );
}
