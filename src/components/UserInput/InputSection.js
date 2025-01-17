import style from "./InputSection.module.css";
import { useState } from "react";
import urlLightIcon from "../../assets/icons8-url-48-light.png";
import urlDarkIcon from "../../assets/icons8-url-48-dark.png";
import { useTheme } from "../../store/ThemeContext";
import { useTranslation } from "react-i18next"; // Import useTranslation

const InputSection = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isInputValid, setInputValid] = useState(true);
  const { theme } = useTheme();
  const { t } = useTranslation(); // Initialize useTranslation

  const userInputHandler = (e) => {
    setInputValid(true);
    setUserInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const pattern = /^(https:\/\/|http:\/\/)/;
    if (pattern.test(userInput)) {
      setInputValid(true);
      let type;

      if (userInput.includes("youtu")) {
        type = "yt";
      }
      if (userInput.includes("twitter.com") || userInput.includes("x.com")) {
        type = "tw";
      }

      if (userInput.includes("fb") || userInput.includes("facebook")) {
        type = "fb";
      }

      if (userInput.includes("instagram")) {
        type = "ig";
      }
      if (userInput.includes("tiktok")) {
        type = "tk";
      }
      props.userUrls(userInput, type);
    } else {
      props.userUrls(t("error_message"), "error");
      setInputValid(false);
    }
  };

  const urlIcon = theme === "dark" ? urlDarkIcon : urlLightIcon;

  return (
    <form method="POST" onSubmit={submitHandler}>
      <img className={style["url-icon"]} src={urlIcon} alt="url icon"></img>
      <input
        className={
          isInputValid
            ? style["input"]
            : style["input"] + " " + style["invalid"]
        }
        type="text"
        name="search"
        placeholder={t("paste_here_link")}
        onChange={userInputHandler}
        value={userInput || ""}
        required
        aria-required
      ></input>
      <button className={style["btn"]} type="submit">
        {t("search")}
      </button>
    </form>
  );
};

export default InputSection;
