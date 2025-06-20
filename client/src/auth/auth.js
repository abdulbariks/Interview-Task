export const isAuthenticated = () => !!localStorage.getItem("auth");
export const setAuth = (user) =>
  localStorage.setItem("auth", JSON.stringify(user));
export const logout = () => localStorage.removeItem("auth");
