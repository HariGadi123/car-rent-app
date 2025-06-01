export interface signupValidationValues {
  fullName: string;
  email: string;
  password: string;
  roles: StatusTab[];
}

export interface StatusTab {
  id: number | null | string;
  title: string;
}
export interface signupValidationErrors {
  error: boolean;
  fullName: string;
  email: string;
  password: string;
  roles: string;
}
export const ValidateSignup = (
  value: signupValidationValues
): Promise<"success"> => {
  return new Promise((resolve, reject) => {
    const { fullName, email, password, roles } = value;

    const errors: signupValidationErrors = {
      error: false,
      fullName: "",
      email: "",

      password: "",
      roles: "",
    };

    if (!fullName) {
      errors.fullName = "Please enter full name";
      errors.error = true;
    }
    if (!email) {
      errors.email = "Please enter email";
      errors.error = true;
    }

    if (!password) {
      errors.password = "Please enter password";
      errors.error = true;
    }
    if (!roles || roles?.length === 0) {
      errors.roles = "Please select roles";
      errors.error = true;
    }

    if (errors.error) {
      reject(errors);
    } else {
      resolve("success");
    }
  });
};
