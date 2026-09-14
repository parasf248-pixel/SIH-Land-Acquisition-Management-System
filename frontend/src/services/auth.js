import { defaultUser } from "../data/userData";

const USER_KEY = "bhoomi_user";


// Save user after login
export const loginUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};


// Get logged-in user
export const getLoggedInUser = () => {
  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch (error) {
    console.error("Invalid user data");

    return null;
  }
};


// Logout
export const logoutUser = () => {
  localStorage.removeItem(USER_KEY);
};


// Get user OR blueprint
export const getDashboardUser = () => {
  const user = getLoggedInUser();

  if (user) {
    return user;
  }

  return defaultUser;
};