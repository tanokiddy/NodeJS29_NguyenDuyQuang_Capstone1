import Cookies from "js-cookie"
import { get, post } from "./api"

export const getListImage = async () => { 
    return await get('img/getListImage', {
        next: { revalidate: 86400 },
    })    
}

export const getImageSearch = async (keyword) => { 
    return await get(`img/getImage?keyword=${keyword}`)
}

export const handleLogin = async (data) => { 
    try {
        const response = await post('user/login',data)   
        if(response.content){
            const token = response.content
            Cookies.set('uid', token, {expires: 1})
        } 
        return response
    } catch(err){
        console.log(err)
    }
}

// export const getUserProfile = async () => {
//     const headers = {
//         token: Cookies.get('uid')
//     }
//     try {
//         const response = await get('img/getUserDetail',headers) 
//         const userInfo = response.content
//         return userInfo
//     } catch(err){
//         console.log(err)
//     }
// }