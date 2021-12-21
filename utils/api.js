import axiosInstance from "./axios";
import { errorResponse } from "./initialValues";

export const getUsers = async(page) => {
    const response = await axiosInstance.get(`/user?page=${page}&limit=6`).catch(()=>errorResponse);
    if(response.error) 
        return errorResponse;
    const {data:responseData} = response;
    const {data:usersPreviewData} = responseData;
    const lastResponse =await Promise.all(usersPreviewData.map(async({id})=>(await axiosInstance.get(`/user/${id}`).catch(()=>errorResponse)).data))
    if(lastResponse.some(value=>!value)) 
        return errorResponse;
    return lastResponse;
};
export const getPosts = async(userId) => await axiosInstance.get(`/user/${userId}/post`).catch(()=>errorResponse);
