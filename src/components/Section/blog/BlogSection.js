// src/components/BlogSection.js

import React from 'react';
import styles from '../../../styles/BlogSection.module.css';
import BlogCard from '../../Structure/BlogCard/BlogCard';
import blogsData from './blogs.json';

const BlogSection = ({ darkMode }) => {
  const blogCards = blogsData.map((blog) => (
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

