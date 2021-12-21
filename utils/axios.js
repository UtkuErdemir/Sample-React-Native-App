const baseURL = "";
const appId = "";


const axios = require('axios');
const axiosInstance = axios.create({
    baseURL,
    timeout: 2000,
    headers: {'app-id': appId}
});

export default axiosInstance;