const axios = require("axios").default
const request = axios.create({
    baseURL:"https://movie.douban.com"
})
// request.interceptors.request.use(config=>config)
request.interceptors.response.use(res=>res.data)

module.exports = request