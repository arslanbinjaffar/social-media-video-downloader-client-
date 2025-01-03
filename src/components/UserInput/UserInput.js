import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";
import {useState} from "react";
import Error from "../UI/Error";

const UserInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);
  const [urlResult, setUrlResult] = useState({
    thumb: [],
    urls: [],
    title: [],
  });

  const userInputHandler = async (url, type) => {
    setUrlResult({
      thumb: [],
      urls: [],
      title: [],
    });
  
    let apiUrl;
    switch (type) {
      case "yt":
        apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/yt`;
        break;
      case "tw":
        apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/tw`;
        break;
      case "fb":
        apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/fb`;
        break;
      case "ig":
        apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/ig`;
        break;
      case "tk":
        apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/tk`;
        break;
      default:
        return; // Handle unknown type
    }
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urls: url,
      }),
    };
  
    if (type === "error") {
      setServerOk(false);
      setErrorMessage(url);
    } else {
      setLoader(true);
      setServerOk(true);
      try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        setLoader(false);
        if (result.status === "fail") {
          setServerOk(false);
          setErrorMessage(result.error);
        } else {
          setServerOk(true);
          // Adjust the result structure for Instagram
          if (type === "ig" || type==="tk") {
            setUrlResult({
              thumb: result.picture, // Set the thumbnail
              urls: result.links, // Set the links array
              title: result.title, // Set the title
            });
          } else {
            setUrlResult(result); // For other types, use the result directly
          }
        }
      } catch (err) {
        setLoader(false);
        setServerOk(false);
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {urlResult.urls && urlResult.urls.length > 0 && isServerOk && (
  <ResultSection result={urlResult} />
)}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
