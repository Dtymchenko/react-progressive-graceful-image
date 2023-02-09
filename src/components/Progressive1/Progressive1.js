import React from "react";
import styles from "./Progressive1.module.scss";
import ProgressiveImage from "react-progressive-graceful-image";

const Progressive1 = ({ src, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressiveImage delay={1000} src={src} placeholder={placeholder}>
        {(src) => <img src={src} alt="an image" />}
      </ProgressiveImage>
    </div>
  );
};

export default Progressive1;
