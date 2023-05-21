import { GET_LIST_IMAGE } from "@/components/constants/queryKey"
import { useQuery } from "react-query"



export const useListImageClient = (initialData) => { 
    const { data } = useQuery({
        queryKey: [GET_LIST_IMAGE],
        staleTime: 60 * 30 * 1000,
        cacheTime: 60 * 30 * 1000,
        initialData,
        retry: false,
        refetchOnWindowFocus:false,
    })
    return data
}