// src/components/ProjectsSection.js

import React, { useEffect, useState } from 'react';
import styles from '../../styles/RepoSection.module.css';
import portfolioData from '../../data/portfolioData.json';
import RepoCard from '../RepoCard/RepoCard.js';

function RepoSection({ darkMode }) {
const [repos, setRepos] = useState([]);

useEffect(() => {
const fetchRepos = async () => {
const response = await fetch(`https://api.github.com/users/${portfolioData.git}/repos?sort=updated`);
const data = await response.json();
setRepos(data);
}
fetchRepos();
}, []);

return (
<div className={`${styles.repoSection} + ${darkMode ? ' ' + styles.dark : ''}`}>
<div className={styles.projectsContainer}>
{repos.map((repo, index) => (
<RepoCard key={index} data={repo} darkMode={darkMode} />
))}
</div>
</div>
);
}

export default RepoSection;
