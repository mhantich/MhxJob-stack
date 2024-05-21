import { axiosi } from "../config/axios"

export const getBooking=async()=>{
    try {
        const res=await axiosi.get("work-applications")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const createBooking=async(cred)=>{
    try {
        const res=await axiosi.post("work-applications",cred)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
