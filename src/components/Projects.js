// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Project 1: Smart Parking System </h3>
              <p className="card-text">
                Description of project 1. This project involves using Arduino Board,Ultrasonic Sound sensor and servo motor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Project 2: Job Finder Website</h3>
              <p className="card-text">
                Description of project 2. This project focuses on creating a responsive design using Bootstrap and
                CSS. It features a modern UI, interactive elements, and accessibility improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
