import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://geolocation.cyclic.app/",
    // baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
});
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axiosInstance.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";
export default axiosInstance;