import axios from "axios";

const instance = axios.create({
    baseURL: process.env.React_App_Base_Url
});

export default instance;