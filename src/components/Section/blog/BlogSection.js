// src/components/BlogSection.js

import React from 'react';
import styles from '../../../styles/BlogSection.module.css';
import BlogCard from '../../Structure/BlogCard/BlogCard';
import portfolioData from '../../../data/portfolioData.json';

const BlogSection = ({ darkMode }) => {
  const data = portfolioData.blogExample;
  const blogCards = data.map((blog) => (
    <BlogCard
      key={blog.title}
      title={blog.title}
      excerpt={blog.excerpt}
      image={blog.image}
      date={blog.date}
      author={blog.author}
      category={blog.category}
      url={blog.url}
      darkMode={darkMode}
    />
  ));

  return (
    <div className={`${styles.blogSection} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.projectsContainer}>{blogCards}</div>
    </div>
  );
};

export default BlogSection;

