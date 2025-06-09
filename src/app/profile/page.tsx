import React from "react";
import styles from "./index.module.css";

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapperContainer}>
        <div className={styles.leftContainer}>left container</div>

        <div className={styles.rightContainer}>Right Container</div>
      </div>
    </div>
  );
};

export default page;
