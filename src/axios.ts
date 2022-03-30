import axios from "axios";

const baseURL = '/api'
const http = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.response.use(function (response)
{
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status == 200)
    {
        return {
            data: response.data,
            status: "success"
        }
    }
    // return response.data;
}, function (error)
{
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export { http };