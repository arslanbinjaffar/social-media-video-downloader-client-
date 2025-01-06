// Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.css";
import { useTranslation } from "react-i18next";
import getImagePath from "../../common/content/images/img";

const Blog = () => {
  const { t } = useTranslation();
  const blogs = t("blogs", { returnObjects: true });
  return (
    <div className={styles.blogContainer}>
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index + 1} />
      ))}
    </div>
  );
};

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          src={`${getImagePath(index)}`}
          alt={blog.blogImageAlt}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{blog.title}</h2>
        <p className={styles.cardDescription}>
          {blog.description.substring(0, 300)}...
        </p>
        <p>{blog.contentIntro.substring(0, 300)}...</p>
        <ul className={styles.cardList}>
          {blog.listItems.slice(0, 3).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button
          className={styles.exploreButton}
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Blog;
