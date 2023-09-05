export const checkValidation = (name, email, password) => {
  const isEmail =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/".test(
      email
    );
  if (!isEmail) return "Email is invalid";
  const isPassword =
    "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/".test(
      password
    );
  if (!isPassword) return "Password is invalid";
  return null;
};
