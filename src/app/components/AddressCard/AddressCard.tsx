import { Button } from "@mui/material";
import React from "react";
import styles from "./AddressCard.module.css";
import edit_icon from "@/app/assets/white_edit_cross.svg";

const AddressCard = () => {
  return (
    <div className={styles.mainContainer}>
      {addressData?.length > 0 ? (
        addressData.map((address) => {
          return (
            <div key={address?.id} className={styles.addressCard}>
              <p>{`${address?.line_1}, ${address?.line_2}, ${address?.street}, ${address?.city}, ${address?.state}, ${address?.pincode}`}</p>
              <div className={styles.editCon}>
                <img src={edit_icon.src} alt="edit_icon" />
                <span>Edit</span>
              </div>{" "}
            </div>
          );
        })
      ) : (
        <p>No address data available.</p>
      )}
      <div>
        <Button variant="contained">+ ADD </Button>
      </div>
    </div>
  );
};

export default AddressCard;

const addressData = [
  {
    id: 1,
    line_1: "Andheri East",
    line_2: "Andheri East",
    street: "Mahakali Caves",
    city: "Mumbai",
    state: "Maharasthra",
    pincode: "400093",
  },
  {
    id: 2,
    line_1: "Andheri East",
    line_2: "Andheri East",
    street: "Mahakali Caves",
    city: "Mumbai",
    state: "Maharasthra",
    pincode: "400093",
  },
];
