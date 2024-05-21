import { axiosi } from "../config/axios"

export const getBookings=async(cred)=>{
    try {
        const res=await axiosi.get("categories", cred )
         
        return res.data
    } catch (error) {
        
      
        throw error.response.data
    }
}
export const createBookings=async(cred)=>{
    try {
        const res=await axiosi.post("work-applications/",cred)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
