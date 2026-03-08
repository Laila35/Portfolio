import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { TypeAnimation } from 'react-type-animation';

function Main() {
  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src="https://avatars.githubusercontent.com/Laila35"
            alt="GitHub Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Laila35" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/laila-batool-055813272/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <h1>Laila Batool</h1>

          {/* Animated Text */}
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', minHeight: '60px' }}>
            <TypeAnimation
              sequence={[
                'I m a Software Engineer',
                2000,
                'I Solve Problems',
                2000,
                'I Build Scalable Solutions',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          {/* ✅ CV DOWNLOAD BUTTON */}
          <div style={{ marginTop: "20px" }}>
            <a href="/cv.pdf" download>
              <button className="cv-button">
                Download CV
              </button>
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Laila35" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/laila-batool-055813272/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;