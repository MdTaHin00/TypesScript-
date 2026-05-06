import { useEffect, useState } from "react"
import type { User } from "../types/user"
import { getUsers } from "../services/api"

function UserList() {

    const [users, setUsers] = useState<User[]>([])

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>(null)
   
    useEffect(()=>{
        
        const fetchUser = async ()=>{
            try {
                setLoading(false)
                const data = await getUsers() ;
                setUsers(data)
                setError(null)
            } catch (error) {
                setError("Failed to fetch users")
                 console.log(error);
            }finally{
                setLoading(false)
            }
        }

        fetchUser() ;

    },[])
   
    if(loading){
        return <div className="m-30">Loading...</div>
    }
    
    if(error){
        return <div className="m-30">{error}...</div>
    }

    
    return (
        <div>
           
           {/* user list */}
           <div className="bg-white  shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sM:px-6">
                  <h2 className="text-lg font-medium text-gray-800">Users</h2>
              </div>

             <ul className="divide-y  divide-gray-200 p-7 ">
              {
                users.map((user) => (
                    <li key={user.id} className="py-1">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0 ">
                             <p className="text-sm font-medium truncate">{user.name}</p>
                             <p className="text-sm text-gray-500">{user.email}</p>
                          </div>

                          <div className="space-x-2">
                            <button className="text-sky-400 hover:text-sky-500 cursor-pointer font-medium bg-sky-500/10 px-1 py-0.5 rounded">Update</button>
                             <button  className="text-red-400 hover:text-red-500 cursor-pointer font-medium bg-red-500/20 px-1 py-0.5 rounded">Delete</button>
                            
                          </div>
                        </div>
                    </li>
                ))
              }
             </ul>

           </div>
        </div>
    )
}

export default UserList
