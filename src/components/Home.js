// src/components/Home.js
import React from 'react';
import ProfileImage from './profile.jpg';

function Home() {
  return (
    <div className="text-center">
      <img src={ProfileImage} alt="Profile" className="rounded-circle" width="150" height="150" />
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Tanisha Saha.As a 3rd year B.Tech student majoring in CSE, I seek internship opportunities to apply 
        and enhance my technical skills in my area of interest. I am eager to contribute my passion for Front-end web development
        and strong academic foundation to a dynamic team.
      </p>
    </div>
  );
}

export default Home;
