import React from "react";
import styles from "./MainText.module.scss";

const MainText = () => {
  return (
    <div className={styles.text}>
      <p>Hello!</p>
      <p>
        This App was created to test how to load the images progressively in React.
      </p>
      <p>
        I created a few pages for this, on each - practicing loading it with
        React Progressive Image component (different ways) and without it.
      </p>
      <p>Click on any link to visit the page.</p>
    </div>
  );
};

export default MainText;
