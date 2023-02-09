import React from "react";
import styles from "./Progressive2.module.scss";
import ProgressiveImage from "react-progressive-graceful-image";

const Progressive2 = ({ src, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressiveImage delay={1000} src={src} placeholder={placeholder}>
        {(src, loading) => (
          <img
            style={{
              opacity: loading ? 0.5 : 1,
              transition: "opacity 2s ease-in-out",
            }}
            src={src}
            alt="an image"
          />
        )}
      </ProgressiveImage>
    </div>
  );
};

export default Progressive2;
