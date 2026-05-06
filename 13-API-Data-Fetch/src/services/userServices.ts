import type { ApiResponse, User } from "../types/users";

export const fetchUser = async() : Promise <ApiResponse <User []> >=>{
     try {
         
        const res = await fetch("https://jsonplaceholder.typicode.com/users") 
        
        if(!res.ok){
            throw new Error(`HTTP error status: ${res.status}`)
        }

        const data = await res.json() 

        return{
            data:data ,
            status : res.status ,
            message : "Data fetch successfully"
        }

     } catch (error) {
         return{
            data:[],
            status:404,
            message:error instanceof Error ? error.message : 'An Error Fetch'
         }
     }
}