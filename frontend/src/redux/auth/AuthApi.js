import { axiosi } from "../config/axios"

export const signup=async(cred)=>{
    try {
        const res=await axiosi.post("auth/regester",cred)
        console.log(res)
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const login=async(cred)=>{
    try {
        const res=await axiosi.post("auth/login",cred)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}

export const checkAuth=async(cred)=>{
    try {
        const res=await axiosi.get("auth/check-auth")
      
        return res.data
    } catch (error) {
        throw error.response.data
    }
}
export const logout=async()=>{
    try {
        const res=await axiosi.get("auth/logout")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}