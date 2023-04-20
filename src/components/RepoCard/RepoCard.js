import { useEffect, useState } from 'react';
import styles from './RepoCard.module.css';

const RepoCard = (data) => {
  console.log(data);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  let infoRepo = data.data;

  return (
    <>
        <div className={`${styles.repoCard} ${data.darkMode ? styles.dark : ''}`}>
        <h3>
          <a href={infoRepo.html_url} target="_blank" rel="noreferrer">
            {infoRepo.name}
          </a>
        </h3>
        <p>{infoRepo.description}</p>
        <p>
          <span>🔧 {infoRepo.language}</span>
          <span>🌟 {infoRepo.stargazers_count}</span>
          <span>🍴 {infoRepo.forks_count}</span>
        </p>
        <p>Última actualización: {formatDate(infoRepo.updated_at)}</p>
      </div>
    </>
  );
};

export default RepoCard;
