export interface loginValidationValues {
  username: string;
  password: string;
}

export interface loginValidationErrors {
  error: boolean;
  username: string;
  password: string;
}
export const ValidateLOgin = (
  value: loginValidationValues
): Promise<"success"> => {
  return new Promise((resolve, reject) => {
    const { username, password } = value;

    const errors: loginValidationErrors = {
      error: false,
      username: "",
      password: "",
    };

    if (!username) {
      errors.username = "Please enter user name";
      errors.error = true;
    }

    if (!password) {
      errors.password = "Please enter password";
      errors.error = true;
    }

    if (errors.error) {
      reject(errors);
    } else {
      resolve("success");
    }
  });
};
