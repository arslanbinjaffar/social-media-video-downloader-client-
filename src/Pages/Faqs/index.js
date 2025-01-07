import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FAQs.module.css"; // Import your CSS Module

const FAQs = () => {
  const { t } = useTranslation();
  const faqItems = [
    { question: t("faq_question_1"), answer: t("faq_answer_1") },
    { question: t("faq_question_2"), answer: t("faq_answer_2") },
    { question: t("faq_question_3"), answer: t("faq_answer_3") },
    { question: t("faq_question_4"), answer: t("faq_answer_4") },
    { question: t("faq_question_5"), answer: t("faq_answer_5") },
    { question: t("faq_question_6"), answer: t("faq_answer_6") },
    { question: t("faq_question_7"), answer: t("faq_answer_7") },
    { question: t("faq_question_8"), answer: t("faq_answer_8") },
    { question: t("faq_question_9"), answer: t("faq_answer_9") },
    { question: t("faq_question_10"), answer: t("faq_answer_10") },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.container}`}>
      <header className={styles.header}>
        <h1>{t("FAQs")}</h1>
      </header>

      <main className={styles.main}>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleAccordion(index)}
                className={styles.faqButton}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQs;
