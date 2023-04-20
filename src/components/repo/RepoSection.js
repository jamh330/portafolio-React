// src/components/ProjectsSection.js

import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../../styles/RepoSection.module.css';
import portfolioData from '../../data/portfolioData.json';
import RepoCard from '../RepoCard/RepoCard.js';


function RepoSection({ darkMode }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/userGit/repos?sort=updated')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <p>Mis proyectos alojados en GitHub. En esta sección se pueden visualizar los diferentes proyectos, acceder a sus repositorios y conocer las tecnologías utilizadas.</p>
      <div className={`${styles.projectsContainer}`}>
      {repos.map((repo,index) => (
        <RepoCard key={index} data={repo} darkMode={darkMode} />
      ))}
      </div>
      </div>
  );
}

export default RepoSection;
