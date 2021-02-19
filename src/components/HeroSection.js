import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <p>My name is <strong>Chance Ewell</strong>.</p>
      <br></br>
      <p> I'm currently doing a bootcamp through the University of Utah to become a full stack web developer. Throughout my studies, I've been learning HTML, CSS, JavaScript, Node.js, MongDB, React.js and many other languages. </p>
      <br></br>
      <p>Please check out my portfolio tab to see some of my class projects, and feel free to check out my other social links to learn more about me.</p>
    </div>
  );
}

export default HeroSection;
