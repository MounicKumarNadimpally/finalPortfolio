// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header'
import TypingAnimation from './Components/TypingAnimation/TypingAnimation';

import img from './assets/hi.svg'
import './App.css'
import animation from './assets/animation_lmjrfzob.json'
import build from './assets/build.json';
import working from './assets/working.json'
import hi from './assets/hi.json'
import Lottie from 'lottie-react'
import { Fade } from "react-awesome-reveal";
import SocialMedia from './Components/socialMedia/SocialMedia';
// import { Fade } from "react-awesome-reveal";


function App() {
  return (
    <div className="App">
      <Header/>
      <Fade duration={1000}  >
        <div className='main-body'>
          <div className='typingText'>
            <p className='greeting'>Hello everyone,</p>
            <div className='myName'>
            <TypingAnimation text="I am Mounic Kumar." className="myName"  />
            </div>
            <p className="mySelfDetails">A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>
            <SocialMedia/>
            <div className='buttonContainer'>
              {/* <button className='button'> CONTACT ME</button> */}
              <button className='button'> MY RESUME</button>
            </div>
          </div>
            <Lottie animationData={hi} className='hiImage' />
        </div>
      </Fade>
      {/* <div>
        <h1>What do I do</h1>
        <div>
          <div>
            <Lottie animationData={working}/>
          </div>
          <div>
            <div>
              <p>
              "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"
              </p>
            </div>
            <div>

            </div>
            <div>
              
               <p> ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
              
               <p>"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"</p>
              
               <p>"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"</p>
              
            </div>
          </div>
        
        </div>
      </div>
      <div>
        <h1>Proficiency</h1>
        <div>
          <p>
            Frontend
          </p>
          <p>
            Backend
          </p>
          <p>
            Programming
          </p>
        </div>
        <div>
          <Lottie animationData={build}/>
        </div>
      </div>
      <div>
        <h1>Education</h1>
        <div>
          <img src='' alt='KU'/>
          <p>University of Kansas</p>
          <p>Masters in Computer Science</p>
        </div>
        <div>
          <img src='' alt='IITT'/>
          <p>Indian Institue of Technology Tirupati</p>
          <p>Bachelor of Technology in Civil and Enviromental Engineering</p>
        </div>
      </div>
      <div>
        <h1>Experience</h1>
        <div>
          <h1>
            Impactoverse
          </h1>
          <img src='/' alt='impactoverse'/>
          <p>Frontend Developer</p>
          <p>June - 2023 to present</p>
          <p>
          Collaborated with a team of developers to create interactive static pages using ReactJS. Developed and integrated
          functionalities such as a dynamic search bar, navigation bar dropdowns, and API calls.
           Utilized HTML and CSS to design and style user interfaces that align with best practices. Employed Git for version control
          and collaborated effectively with team members.
           Assisted in debugging and troubleshooting to enhance overall application performance
          </p>
        </div>
        <div>
          <h1>
            Upwork
          </h1>
          <img src='/' alt='impactoverse'/>
          <p>Freelancer</p>
          <p>Dec-2021 to Mar-2022</p>
          <p>
          Collaborated with a team of developers to create interactive static pages using ReactJS. Developed and integrated
          functionalities such as a dynamic search bar, navigation bar dropdowns, and API calls.
           Utilized HTML and CSS to design and style user interfaces that align with best practices. Employed Git for version control
          and collaborated effectively with team members.
           Assisted in debugging and troubleshooting to enhance overall application performance
          </p>
        </div>
        
      </div>
      <div>
        <h1>Certificates</h1>
        <div>
            <p>
              HackerRank-Problem Solving
            </p>
        </div>
        <div>
            <p>
              Python for Data Science
            </p>
        </div>
        <div>
            <p>
              Python for Everybody
            </p>
        </div>
      </div>

      <div>
        <h1>Contact</h1>
        <div>
          <div>
            <img src='/' alt='myself' />
          </div>
          <div>
            <p>my details</p>
            <div>
              <img src='/' alt='location'/>
              <p>location</p>
            </div>
            <p>open to work</p>
            <div>
              social media profiles
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Made with ❤️ by Mounic Kumar Nadimpally</p>
      </div> */}
    </div>
  );
}

export default App;
