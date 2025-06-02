"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import CustomTextField from "../components/CustomTextField/CustomTextField";
import CustomButton from "../components/CustomButton/CustomButton";
import { ValidateLOgin } from "./validate";
import axios from "axios";
import CustomSnackbar from "../components/CustomSnackbar/CustomSnackbar";
import { AlertColor } from "@mui/material";
import { base_url } from "../Utils/network";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    error: false,
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      let data = {
        username: formData?.username,
        password: formData?.password,
      };
      setLoading(true);
      ValidateLOgin(formData)
        .then(async (response) => {
          if (response === "success") {
            //call post api here...
            let response = await axios.post(`/api/login`, data);
            if (response?.status === 200 || response?.status === 201) {
              setFormData({
                username: "",
                password: "",
              });
              setFormErrors({
                error: false,
                username: "",
                password: "",
              });
              setLoading(false);
              setMessage("User successfully logged in!");
              setSeverity("success");
              setOpen(true);
              setTimeout(() => {
                router.push("/home");
              }, 1500);
            }
          }
        })
        .catch((error) => {
          setFormErrors(error);
          setLoading(false);
          setMessage("Please fill all required fields.");
          setSeverity("error");
          setOpen(true);
        });
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong. Please try again.");
      setSeverity("error");
      setOpen(true);
      setLoading(false);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClose = async (event: any) => {
    try {
      setOpen(false);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          <div className={styles.cardCon}>
            <h1>Log in</h1>
            <p>
              If you don't have an account register <br />
              You can{" "}
              <span
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Register here!
              </span>
            </p>
            <div>
              <CustomTextField
                name="username"
                value={formData?.username}
                label="Email"
                placeholder="Enter Email"
                required={true}
                type="text"
                onChange={handleChange}
                error={!!formErrors?.username}
                helperText={formErrors?.username}
              />
            </div>
            <div>
              <CustomTextField
                label="Password"
                placeholder="Enter password"
                type="password"
                name="password"
                required={true}
                value={formData?.password}
                onChange={handleChange}
                error={!!formErrors?.password}
                helperText={formErrors?.password}
              />
            </div>{" "}
            <CustomButton
              title="Submit"
              onClick={handleLogin}
              loading={loading}
            />
          </div>
        </div>
      </div>
      <CustomSnackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
    </>
  );
}
