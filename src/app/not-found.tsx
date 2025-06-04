import { Button } from "@mui/material";
import React from "react";
import styles from "./index.module.css"
import CustomButton from "./components/CustomButton/CustomButton";
import { redirect } from "next/navigation";

const page = () => {
  const handleBack = async (event: any) => {
    try {
      // redirect("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.notFoundContainer}>
      <h1>404</h1>
      <p>Sorry, Page Not Found</p>
      {/* <CustomButton title="Back To Home" onClick={handleBack} /> */}
    </div>
  );
};

export default page;
