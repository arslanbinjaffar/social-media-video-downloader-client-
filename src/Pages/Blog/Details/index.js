"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom"; // For route params
import styles from "./BlogDetails.module.css"; // Import the CSS module
import getImagePath from "../../../common/content/images/img";

const BlogDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams(); // Get the id from URL parameters
  const blogs = t("blogs", { returnObjects: true });
  const blogData = blogs.find((blog) => blog.id === id);

  if (!blogData) {
    return (
      <div className={`${styles.textCenter} ${styles.py12}`}>
        Blog not found.
      </div>
    );
  }

  return (
    <div className={styles.blogDetailsContainer}>
      <img
        src={`${getImagePath(id.match(/\d+/)[0])}`}
        alt={blogData.blogImageAlt}
        // className={styles.cardImage}
        className="w-full"
      />
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>{blogData.title}</h1>
        <p className={styles.blogDescription}>{blogData.description}</p>
      </header>
      <section className={styles.blogIntro}>
        <p>{blogData.contentIntro}</p>
      </section>

      <section className={styles.blogList}>
        <ul>
          {blogData.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {blogData?.sections?.map((section, index) => (
        <section key={index} className={styles.cardSection}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{section.title}</h2>
            </div>
            <div className={styles.cardContent}>
              {Array.isArray(section.content)
                ? section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                : typeof section.content === "string" && (
                    <p>{section.content}</p>
                  )}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.blogConclusion}>
        <p>{blogData.conclusion}</p>
      </section>
    </div>
  );
};

export default BlogDetails;
