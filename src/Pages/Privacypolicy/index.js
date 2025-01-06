import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.date}>
        {t("effectiveDate", {
          day: new Date().getDate(),
          month: new Date().getMonth() + 1,
        })}
      </p>

      <section className={styles.section}>
        <h2>{t("introductionHeading")}</h2>
        <p>{t("introductionContent")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("informationHeading")}</h2>
        <p>{t("informationContent")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("howWeCollectHeading")}</h2>
        <p>{t("howWeCollectContent")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("purposeOfDataHeading")}</h2>
        <p>{t("purposeOfDataContent")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("contactUsHeading")}</h2>
        <p>{t("contactUsContent")}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
