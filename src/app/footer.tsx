import React from "react";
import styles from "./index.module.css";
import playstore_icon from "@/app/assets/playstore.svg";
import applestore_icon from "@/app/assets/applestore.svg";
import facebook_icon from "@/app/assets/facebook.svg";
import instgram_icon from "@/app/assets/instagram.svg";
import twitter from "@/app/assets/twitter.svg";

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div>top con</div>
        <hr style={{ color: "white" }} />
        <div className={styles.footerBottom}>
          <p>
            Copyright, <span>CarRentalApp 2025.</span> All rights reserved.
          </p>
          <div className={styles.storeIconsCon}>
            <img src={playstore_icon.src} alt="play_store" />
            <img src={applestore_icon.src} alt="applestore_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
