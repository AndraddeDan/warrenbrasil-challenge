export default {
  apiURL: process.env.VUE_APP_API_URL || "http://localhost:3333",
  production: process.env.NODE_ENV === "production",
  development: process.env.NODE_ENV === "development",
};
