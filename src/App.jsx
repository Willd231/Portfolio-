import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, {createGlobalStyle } from 'styled-components';
import im1 from './waving.jfif';
import './App.css'


// Global Styles with gradient background and smooth fonts
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #6B5031, #2C1F0F);
    color: #f5f5f5;
  }
`;



// Layout components
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;


// Header and Nav
const Header = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

//styled div containing the as of now undetermined logo 
const Logo = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f5f5f5;
  cursor: pointer;
`;
//styled div containing the nav buttons 
const NavGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
//template for the buttons and the hover effects
const NavButton = styled.button`
  background: rgba(245, 245, 245, 0.1);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #f5f5f5;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: rgba(245,245,245,0.3);
    transform: translateY(-2px);
  }
`;

// Section styling
const Section = styled.section`
  padding: 10rem 4rem;
  
  margin-top: ${props => (props.offset ? '8rem' : '0')};
  text-align: center;
  position: relative;
  z-index: 1;
`;

//global title format
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
`;

// About me grid
const AboutGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 1rem;
  width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.5);
`;

const Bio = styled.div`
  max-width: 600px;
  text-align: left;
  line-height: 1.6;
`;

// Projects grid
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  margin-left:20rem;
  
`;

const ProjectCard = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  transition: transform 0.3s, background 0.3s;
  &:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.1);
  }
`;

// Social media footer
const Footer = styled.footer`
  padding: 2rem;
  background: rgba(0,0,0,0.6);
  text-align: center;
`;

const SocialButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.5);
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #f5f5f5;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(255,255,255,0.2); }
`;





// Main Components
function HeaderNav() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <Header>
      <Logo>WD</Logo>
      <NavGroup>
        <NavButton onClick={() => scrollTo('project')}>Projects</NavButton>
        <NavButton onClick={() => scrollTo('experience')}>Experience</NavButton>
        <NavButton onClick={() => scrollTo('aboutme')}>About Me</NavButton>
        <NavButton onClick={() => scrollTo('contact')}>Contact</NavButton>
      </NavGroup>
    </Header>
  );
}

function Home() {
  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderNav />

      <Section id="aboutme" offset>
        <Title>Will Dellinger | Software Developer</Title>
        <AboutGrid>
          <Photo src={im1} alt="Waving" />
          <Bio>
            <p>Hey! I'm Will, a passionate software developer with a love for crafting immersive user experiences and composing music. With expertise in React, Node.js, and modern CSS, I build interfaces that sing.</p>
          </Bio>
        </AboutGrid>
      </Section>
      
      <Section id="project">
      
        <Title>Featured Projects</Title>
        <ProjectsGrid>
          {/* Example Project Cards */}
          <ProjectCard>
            <h3>Project One</h3>
            <p>A brief description of project one goes here.</p>
          </ProjectCard>
          <ProjectCard>
            <h3>Project Two</h3>
            <p>A brief description of project two goes here.</p>
          </ProjectCard>
          <ProjectCard>
            <h3>Project Three</h3>
            <p>A brief description of project three goes here.</p>
          </ProjectCard>
        </ProjectsGrid>
        
        <p>Click <Link to="/projects">here</Link> to see all my projects</p>
      </Section>

      <Section id="experience">
        <Title>Experience</Title>
        <p>Formal roles and notable achievements description.</p>
      </Section>

      <Section id="contact">
        <Title>Contact & Socials</Title>
        <SocialButton onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</SocialButton>
        <SocialButton onClick={() => window.open('https://github.com', '_blank')}>GitHub</SocialButton>
        <SocialButton onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIn</SocialButton>
        <SocialButton onClick={() => window.location.href = 'mailto:you@example.com'}>Email Me</SocialButton>
      </Section>

      <Footer>
        © 2025 William Dellinger. All Rights Reserved
      </Footer>
    </AppContainer>
  );
}

function ProjectsComponent() {
  return (
    <Section>
      <Title>All Projects</Title>
      <p>Detailed listings of every project.</p>
    </Section>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsComponent />} />
      </Routes>
    </Router>
  );
}
