import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const FAQs = () => {
  const { t } = useTranslation(); // Get the t function for translation

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
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 text-gray-800">
      <header className="w-full py-8 bg-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">{t("FAQs")}</h1>
      </header>

      <main className="w-full px-4 sm:px-12 md:px-20 lg:px-32 max-w-4xl">
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-4 py-3 text-left text-lg font-semibold bg-gray-200 rounded-md hover:bg-gray-300"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQs;
