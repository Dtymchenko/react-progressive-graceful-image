import React from "react";
import styles from "./Vanilla.module.scss";

const Vanilla = ({ src, placeholderSrc, width = "100%", ...props }) => {
  const [imageSrc, setImageSrc] = React.useState(placeholderSrc);
  const cn =
    imageSrc === placeholderSrc ? `${styles.loading}` : `${styles.loaded}`;

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <div className={styles.wrapper}>
      <h1>Progressive Image Load</h1>
      <h2>Emulate 3g and disable cache in DevTools</h2>
      <img
        className={cn}
        src={imageSrc}
        alt={props.alt || ""}
        width={width}
        {...props}
      ></img>
    </div>
  );
};

export default Vanilla;
