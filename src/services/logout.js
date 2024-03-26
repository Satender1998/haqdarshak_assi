export const logout = () => {
  // Clear user authentication token from localStorage or perform any other necessary cleanup
  localStorage.removeItem("userdbtoken");
};
