const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = {
    V1: `${BASE_URL}/api/v1`,
    V2: `${BASE_URL}/api/v2`
}

const defaultOptions = {
    credentials: 'include',
    headers: {
        'Content-Type': "application/json"
    }
}
export const fetcher = (endpoint, options) => { 
    return new Promise((resolve, reject) => { 
        const url = `${API_VERSION.V1}/${endpoint}`
        fetch(url, {...defaultOptions, ...options})
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            resolve(response)
            return response
            
        })
        .catch((error) => {
            reject(error)
        })
    }) 
}

export function get(endpoint, options){
    return fetcher(endpoint, {
        method: "GET",
        // cache: "no-store",  
        ...options
    })
}

export function post(endpoint, data, options){
    return fetcher( endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        ...options
    })
}