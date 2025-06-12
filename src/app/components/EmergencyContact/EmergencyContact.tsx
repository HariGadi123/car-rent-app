import React from "react";
import styles from "./EmergencyContact.module.css";
import { Button } from "@mui/material";
import edit_icon from "@/app/assets/white_edit_cross.svg";

const EmergencyContact = () => {
  return (
    <div className={styles.mainContainer}>
      {contactDetails && contactDetails?.id ? (
        <div className={styles.emergencyCard}>
          <div className={styles.editCon}>
            <img src={edit_icon.src} alt="edit_icon" />
            <span>Edit</span>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <h3>Name</h3> <span>:</span> <p>{contactDetails?.name}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Relationship</h3> <span>:</span>{" "}
              <p>{contactDetails?.Relationship}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Phone Number</h3> <span>:</span>{" "}
              <p>{contactDetails?.phone_number}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No contact details available.</p>
      )}
      <div>
        <Button variant="contained">+ ADD</Button>
      </div>
    </div>
  );
};

export default EmergencyContact;

const contactDetails = {
  id: 1,
  name: "Suresh Gadi",
  Relationship: "Brother",
  phone_number: "7036725612",
};
