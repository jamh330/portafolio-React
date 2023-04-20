// src/components/ProjectsSection.js

import React from 'react';
import styles from '../../styles/BlogSection.module.css';
import portfolioData from '../../data/portfolioData.json';
import BlogCard from '../BlogCard/BlogCard.js';
import blogsData from './blogs.json';


function BlogSection({ darkMode }) {
  return (
    <div className={`${darkMode ? styles.dark : ''}`}>
      <p>Espacio donde se comparten artículos y noticias relacionadas con un tema específico, en este caso, informática. Los artículos pueden cubrir una variedad de temas, como tendencias, noticias, tutoriales, consejos, opiniones y más.</p>
      <div className={`${styles.projectsContainer}`}>
      {blogsData.map((blog) => (
        <BlogCard
          key={blog.title}
          title={blog.title}
          excerpt={blog.excerpt}
          image={blog.image}
          date={blog.date}
          author={blog.author}
          category={blog.category}
          url={blog.url}
        />
      ))}
      </div>
      </div>
  );
}

export default BlogSection;
