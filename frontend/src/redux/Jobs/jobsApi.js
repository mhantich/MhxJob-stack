import { axiosi } from "../config/axios"

export const getJobs=async()=>{
    try {
        const res=await axiosi.get("jobs")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

