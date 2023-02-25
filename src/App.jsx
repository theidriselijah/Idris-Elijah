import './App.css'
import aboutPic from './assets/idris-elijah.png'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="section hero" id="hero">
          <h1>Idris Elijah</h1>
          <p>Junior Front-End Web Developer</p>
        </div>

        <div className="section about" id="about">
          <div className="header">
            <img src={aboutPic} />
            <h3>Idris Elijah</h3>
            <p>Junior Front-End Web Developer</p>
          </div>
          <div className="about-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="section portfolio" id="portfolio">
          <h4>Portfolio</h4>

          <div className="project">
            <div className="project-img"></div>
            <h5>Bug Tracker</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="project-button-area">
              <button>View Live</button>
              <button>View Code</button>
            </div>
          </div>

          <div className="project">
            <div className="project-img"></div>
            <h5>Space tourism Site</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="project-button-area">
              <button>View Live</button>
              <button>View Code</button>
            </div>
          </div>
        </div>

        <div className="section contact" id="contact">
          <h4>Contact</h4>
          <div className="convo-box">
            <h5>Start a conversation</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <form>
            
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}