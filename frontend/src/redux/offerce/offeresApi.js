import { axiosi } from "../config/axios"

export const getofferess=async(cred)=>{

    let queryString=''

if(cred){
    
    if(cred.cati){
        
        queryString+=`cati=${encodeURIComponent(cred.cati)}&`
        
     }
     if(cred.sort){
         queryString+=`sort=${cred.sort.sort}&order=${encodeURIComponent(cred.sort.order)}&`
     }
     if(cred.country){
         queryString+=`country=${encodeURIComponent(cred.country)}&`
     }
     if(cred.city){
         queryString+=`city=${encodeURIComponent(cred.city)}&`
     }
     if(cred.JObid){
       
         queryString+=`JObid=${encodeURIComponent(cred.JObid)}&`
     }

}


    try {
        const res=await axiosi.get(`offers?${queryString}`)
         
        return res.data
    } catch (error) {

        // this is return the error 
        throw error.response.data
    }
}
export const createofferess=async(cred)=>{
    try {
        const res=await axiosi.post("offers/",cred)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
export const singleofferess=async(cred)=>{
 
    try {
        const res=await axiosi.get(`offers/${cred}`)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}


export const wrokerOfferc=async(cred)=>{

    try {
        const res=await axiosi.get(`work-applications/userAppecltion/${cred}`)
        return res.data
    } catch (error) {
        
        throw error.response.data
    }
}
