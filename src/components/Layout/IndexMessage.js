import style from "./IndexMessage.module.css";

import React from "react";
import { useTranslation } from "react-i18next";

const IndexMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={style["index-div"]}>
      <h1>
        <span className={style["head-one"]}>
          {t("vidown_title").split(" ")[0]}
        </span>
        <span className={style["head-two"]}>
          {t("vidown_title").split(" ")[1]}
        </span>
        <span className={style["head-three"]}>
          {" "}
          {t("vidown_title").split(" ")[2]}
        </span>
      </h1>
      <p>{t("vidown_description")}</p>

      <img
        className={style["yt-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/youtube-play.png"
        alt="youtube-play"
      />
      <img
        className={style["fb-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/facebook-new.png"
        alt="facebook-new"
      />
      <img
        className={style["insta-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/instagram-new.png"
        alt="instagram-new"
      />
      <img
        className={style["x-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/twitter.png"
        alt="twitter"
      />
    </div>
  );
};

export default IndexMessage;
