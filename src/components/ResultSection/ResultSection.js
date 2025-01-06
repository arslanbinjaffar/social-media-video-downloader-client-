import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const title = props.result.title
    ? props.result.title.length > 60
      ? props.result.title.slice(0, 60) + " ...."
      : props.result.title
    : "No Title Available";

  const thumb = props.result.thumb;

  return (
    <div className={style["result-div"]}>
      <div className={style["thumb-div"]}>
        <img src={thumb} alt="Instagram Image" />
      </div>
      <h3>{title}</h3>
      <div className={style["download-section"]}>
        <table>
          <thead>
            <tr>
              <th>Quality</th>
              <th>Size</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {props.result.urls && props.result.urls.length > 0 ? (
              props.result.urls.map((link) => (
                <tr key={link.link}>
                  <td>{link.quality || "420p"} </td>
                  <td>{link.size || Math.floor(Math.random() * 10)} MB</td>
                  <td>
                    <a
                      href={link.link || link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No download links available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultSection;
