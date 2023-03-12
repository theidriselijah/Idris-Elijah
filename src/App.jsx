import { useState } from "react"
import './App.css'
import aboutPic from './assets/idris-elijah.png'
import spaceTourism from './assets/space-tourism-website-screenshot.png'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton"

export default function App() {
  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", message: ""}
  )

  function handleChange(event) {
    const {name, value} = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="section hero" id="hero">
          <div className="hero-title">
            <div>
              <h1>Idris Elijah</h1>
              <p>Junior Front-End Web Developer</p>
            </div>
          </div>
        </div>

        <div className="section about" id="about">
          <div className="header">
            <img className="about-pic" src={aboutPic} />
            <div className="header-title">
              <h3>Idris Elijah</h3>
              <p>Junior Front-End Web Developer</p>
            </div>
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
          <div className="portfolio-projects">
            <div className="project">
              <div className="project-img">
                <img src={spaceTourism}/>
              </div>
              <h5>Space Tourism Site</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="project-button-area">
                <a href="https://zippy-cat-901da8.netlify.app" target="_blank"><button>View Live</button></a>
                <a href="https://github.com/theidriselijah/Space-tourism-website/tree/main/Space%20Travel%20Site" target="_blank"><button>View Code</button></a>
              </div>
            </div>

            <div className="project">
              <div className="project-img"></div>
              <h5>Space tourism</h5>
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
        </div>

        <div className="section contact" id="contact">
          <h4>Contact</h4>
          <div className="contact-section">
            <div className="convo-box">
              <h5>Start a conversation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input 
                type='text'
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.name}
              />
              <input 
                type='text'
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.name}
              />
              <input 
                type='email'
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <textarea 
                placeholder="Message"
                onChange={handleChange}
                name="message"
                value={formData.message}
              />
              <br />
              <button>Send</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}