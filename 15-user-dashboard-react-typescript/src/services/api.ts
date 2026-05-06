import type { User } from "../types/user"

const API_URL = "https://jsonplaceholder.typicode.com/users" 

export const getUsers = async() : Promise <User []> => {

    const response = await fetch(API_URL) ;

    if( !response.ok){
       console.log("Failed to fetch users")
    }

    return response.json()

}