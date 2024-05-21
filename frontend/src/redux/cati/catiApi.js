import { axiosi } from "../config/axios"

export const getCatis=async(cred)=>{
    try {
        const res=await axiosi.get("categories", cred )
         
        return res.data
    } catch (error) {
        
      
        throw error.response.data
    }
}
export const createCatis=async(cred)=>{
    try {
        const res=await axiosi.post("categories/",cred)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
export const singleCatis=async(cred)=>{
    try {
        const res=await axiosi.post(`categories/${cred}`)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
export const deleteCatis=async(cred)=>{
    try {
        const res=await axiosi(`categories/${cred}`)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}