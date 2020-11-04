
var axios = require('axios');
console.log(`${process.env.MIX_APP_URL}/api`);
var axiosInstance = axios.create({
  baseURL: `${process.env.MIX_APP_URL}/api`
});

module.exports = axiosInstance;
