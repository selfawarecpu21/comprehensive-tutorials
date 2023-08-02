let loggedIn = false;

export const login = (email, password) => {
  console.log(`Email: ${email}, Password: ${password}`);
  if (email === "user" && password === "password") {
    loggedIn = true;
  } else {
    console.error("Invalid login credentials");
  }
  return loggedIn;
};

export const logout = () => {
  loggedIn = false;
  return loggedIn;
};

export const isAuthenticated = () => {
  return loggedIn;
};
