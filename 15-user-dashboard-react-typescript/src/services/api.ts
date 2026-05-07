import type { User } from "../types/user"

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const getUsers = async (): Promise<User[]> => {

    const response = await fetch(API_URL);

    if (!response.ok) {
        console.log("Failed to fetch users")
    }

    return response.json()

}


//! create User 

//? Omit -> default typescript var name
//*  'id'  -> id oper base kola user create hoy tai ai code
export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        console.log("Failed to create new user");
    }

    return response.json()
}


export const deleteUser = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    if(!response.ok){
        console.log("Failed a delete user");
    } 
    
}


