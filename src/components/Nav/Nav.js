import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <Link to={"/"}>
          <div className={styles.link}>Back to homepage</div>
        </Link>
        <Link to={"/js"}>
          <div className={styles.link}>Vanilla JS</div>
        </Link>
        <Link to={"/progressive1"}>
          <div className={styles.link}>With progressive loader # 1</div>
        </Link>
        <Link to={"/progressive2"}>
          <div className={styles.link}>With progressive loader # 2</div>
        </Link>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Nav;
