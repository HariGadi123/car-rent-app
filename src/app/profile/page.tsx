"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import profile from "@/app/assets/dummy_male.svg";
import edit_icon from "@/app/assets/white_edit_cross.svg";
import EmergencyContact from "../components/EmergencyContact/EmergencyContact";
import AddressCard from "../components/AddressCard/AddressCard";

const page = () => {
  const [activeTab, setActiveTab] = useState(2);
  const handleClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapperContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftConTop}>
            <p className={styles.activeText}>Active</p>
            <div className={styles.editCon}>
              <img src={edit_icon.src} alt="edit_icon" />
              <span>Edit</span>
            </div>
          </div>
          <div className={styles.userProfileCon}>
            <img
              src={profile.src}
              alt="user_profile"
              className={styles.userProfile}
            />
          </div>
          <div className={styles.userTitles}>
            <h1>
              Hari Gadi <span>M/24</span>
            </h1>
            <p>Member since 02-06-2025</p>
          </div>
          <div className={styles.infoContainer}>
            {userDetails.map((info) => {
              return (
                <div key={info?.id} className={styles.infoItem}>
                  <h3>{info?.title}</h3>
                  <p>{info?.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.tabsWrapper}>
            {tabData.map((info) => {
              return (
                <div
                  key={info?.id}
                  onClick={() => {
                    handleClick(info?.id);
                  }}
                  className={`${styles.tabItem} ${
                    info?.id === activeTab ? styles.activeTabItem : ""
                  }`}
                >
                  {info?.title}
                </div>
              );
            })}
          </div>
          <div >
            {activeTab === 1 && <p>Documents data here</p>}

            {activeTab === 2 && <EmergencyContact />}
            {activeTab === 3 && <AddressCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const userDetails = [
  {
    id: 1,
    title: "Date of Birth",
    value: "02-06-2002",
  },
  {
    id: 2,
    title: "Phone Number",
    value: "6304113067",
  },
  {
    id: 3,
    title: "Email",
    value: "haridhonigadi0707@gmail.com",
  },
  {
    id: 4,
    title: "License Number",
    value: "DL-0420110149646",
  },
];

const tabData = [
  {
    id: 1,
    title: "Documents",
  },
  {
    id: 2,
    title: "Emergency Contact",
  },
  {
    id: 3,
    title: "Address",
  },
];
