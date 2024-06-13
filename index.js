import React from 'react';
import ReactDOM from 'react-dom';

function Project({ name, description }) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

const projects = [
  { name: 'Project 1', description: 'Description of project 1' },
  { name: 'Project 2', description: 'Description of project 2' }
];

ReactDOM.render(
  <div>
    {projects.map((project, index) => (
      <Project key={index} name={project.name} description={project.description} />
    ))}
  </div>,
  document.getElementById('projects')
);
