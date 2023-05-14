import { get, post } from "./api"

export const getListImage = async () => { 
    return await get('img/getListImage')    
}

export const handleLogin = async (data) => { 
    return await post('user/login',data)    
}