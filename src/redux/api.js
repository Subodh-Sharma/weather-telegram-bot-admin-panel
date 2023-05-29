import axios from "axios";

const API = axios.create({baseURL:"https://weather-telegram-bot-server.vercel.app/"});

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem("profile")){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }
//     return req;
// });

// admin api's
export const adminlogin = (formData)=>API.post("admin/adminlogin",formData);

// user api's
export const getAllUsers = ()=>API.get("user/getallusers");
export const userStatus = (chatId) => API.put(`user/status/${chatId}`);
export const deleteUser = (chatId)=>API.delete(`user/delete/${chatId}`);

// setting api's


