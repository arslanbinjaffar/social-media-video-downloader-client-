import React from "react";
import { useTranslation } from "react-i18next";
import "./termsCondition.module.css";

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t("termsAndConditions.title")}</h1>
      <p>{t("termsAndConditions.lastUpdated")}</p>

      <h2>1. {t("termsAndConditions.introduction.title")}</h2>
      <p>{t("termsAndConditions.introduction.content")}</p>

      <h2>2. {t("termsAndConditions.definitions.title")}</h2>
      <p>{t("termsAndConditions.definitions.application")}</p>
      <p>{t("termsAndConditions.definitions.user")}</p>
      <p>{t("termsAndConditions.definitions.content")}</p>
      <p>{t("termsAndConditions.definitions.services")}</p>

      <h2>3. {t("termsAndConditions.eligibility.title")}</h2>
      <p>{t("termsAndConditions.eligibility.content")}</p>

      <h2>4. {t("termsAndConditions.licenseGrant.title")}</h2>
      <p>{t("termsAndConditions.licenseGrant.content")}</p>

      <h2>5. {t("termsAndConditions.userResponsibilities.title")}</h2>
      <ul>
        <li>{t("termsAndConditions.userResponsibilities.item1")}</li>
        <li>{t("termsAndConditions.userResponsibilities.item2")}</li>
        <li>{t("termsAndConditions.userResponsibilities.item3")}</li>
        <li>{t("termsAndConditions.userResponsibilities.item4")}</li>
        <li>{t("termsAndConditions.userResponsibilities.item5")}</li>
      </ul>

      <h2>6. {t("termsAndConditions.prohibitedActivities.title")}</h2>
      <ul>
        <li>{t("termsAndConditions.prohibitedActivities.item1")}</li>
        <li>{t("termsAndConditions.prohibitedActivities.item2")}</li>
        <li>{t("termsAndConditions.prohibitedActivities.item3")}</li>
        <li>{t("termsAndConditions.prohibitedActivities.item4")}</li>
        <li>{t("termsAndConditions.prohibitedActivities.item5")}</li>
        <li>{t("termsAndConditions.prohibitedActivities.item6")}</li>
      </ul>

      <h2>7. {t("termsAndConditions.intellectualPropertyRights.title")}</h2>
      <p>{t("termsAndConditions.intellectualPropertyRights.content")}</p>

      <h2>8. {t("termsAndConditions.thirdPartyServices.title")}</h2>
      <p>{t("termsAndConditions.thirdPartyServices.content")}</p>

      <h2>9. {t("termsAndConditions.contentOwnership.title")}</h2>
      <p>{t("termsAndConditions.contentOwnership.content")}</p>

      <h2>10. {t("termsAndConditions.privacyDataCollection.title")}</h2>
      <p>{t("termsAndConditions.privacyDataCollection.content")}</p>

      <h2>11. {t("termsAndConditions.userAccountSecurity.title")}</h2>
      <p>{t("termsAndConditions.userAccountSecurity.content")}</p>

      <h2>12. {t("termsAndConditions.limitationOfLiability.title")}</h2>
      <p>{t("termsAndConditions.limitationOfLiability.content")}</p>

      <h2>13. {t("termsAndConditions.disclaimer.title")}</h2>
      <p>{t("termsAndConditions.disclaimer.content")}</p>

      <h2>14. {t("termsAndConditions.indemnification.title")}</h2>
      <p>{t("termsAndConditions.indemnification.content")}</p>

      <h2>15. {t("termsAndConditions.updatesModifications.title")}</h2>
      <p>{t("termsAndConditions.updatesModifications.content")}</p>

      <h2>16. {t("termsAndConditions.termination.title")}</h2>
      <p>{t("termsAndConditions.termination.content")}</p>

      <h2>17. {t("termsAndConditions.governingLaw.title")}</h2>
      <p>{t("termsAndConditions.governingLaw.content")}</p>

      <h2>18. {t("termsAndConditions.disputeResolution.title")}</h2>
      <p>{t("termsAndConditions.disputeResolution.content")}</p>

      <h2>19. {t("termsAndConditions.contactUs.title")}</h2>
      <p>{t("termsAndConditions.contactUs.content")}</p>

      <h2>20. {t("termsAndConditions.finalProvisions.title")}</h2>
      <p>{t("termsAndConditions.finalProvisions.content")}</p>

      <footer className="footer">
        <p>{t("termsAndConditions.footer")}</p>
      </footer>
    </div>
  );
};

export default TermsConditions;
