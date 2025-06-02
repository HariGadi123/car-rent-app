"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import CustomTextField from "../components/CustomTextField/CustomTextField";
import CustomButton from "../components/CustomButton/CustomButton";
import { ValidateSignup } from "./validate";
import axios from "axios";
import CustomSnackbar from "../components/CustomSnackbar/CustomSnackbar";
import { AlertColor } from "@mui/material";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    roles: [
      {
        title: "ROLE_USER",
        id: "R001",
      },
      {
        title: "ROLE_DRIVER",
        id: "R002",
      },
    ],
  });

  const [formErrors, setFormErrors] = useState({
    error: false,
    fullName: "",
    email: "",
    password: "",
    roles: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      let data = {
        fullName: "Hari",
        email: "john@example.com",
        password: "securepass123",
        phoneNumber: "9876543210",
        drivingLicenseNumber: "DL12345678",
        dateOfBirth: "1995-06-15",
        gender: "MALE",
        address: {
          street: "123 Main St",
          city: "Springfield",
          state: "IL",
          zipCode: "62704",
        },
        roles: [
          {
            roleName: "ROLE_USER",
            roleCode: "R001",
          },
          {
            roleName: "ROLE_DRIVER",
            roleCode: "R002",
          },
        ],
      };
      setLoading(true);
      ValidateSignup(formData)
        .then(async (response) => {
          if (response === "success") {
            //call post api here...
            let response = await axios.post(`/api/signup`, data);
            if (response?.status === 200 || response?.status === 201) {
              setFormData({
                fullName: "",
                email: "",
                password: "",
                roles: [],
              });
              setFormErrors({
                error: false,
                fullName: "",
                email: "",
                password: "",
                roles: "",
              });
              setLoading(false);
              setMessage("User Account Created Successfully!");
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
            <h1>Sign Up</h1>
            <p>
              If you don't have an account register <br />
              You can{" "}
              <span
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login here !
              </span>
            </p>
            <div>
              <CustomTextField
                name="fullName"
                value={formData?.fullName}
                label="Full Name"
                placeholder="Enter Full Name"
                required={true}
                type="text"
                onChange={handleChange}
                error={!!formErrors?.fullName}
                helperText={formErrors?.fullName}
              />
            </div>
            <div>
              <CustomTextField
                name="email"
                value={formData?.email}
                label="Email"
                placeholder="Enter Email"
                required={true}
                type="text"
                onChange={handleChange}
                error={!!formErrors?.email}
                helperText={formErrors?.email}
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
