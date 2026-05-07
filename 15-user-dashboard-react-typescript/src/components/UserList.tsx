import { useEffect, useState } from "react"
import type { User } from "../types/user"
import { createUser, deleteUser, getUsers } from "../services/api"

function UserList() {

    const [users, setUsers] = useState<User[]>([])

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>(null)

    const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
        "name": "",
        "username": "",
        "email": "",
        "address": {
            "street": "",
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone": "",
        "website": "",
        "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
        }
    })

    const handelCreateUser = async () => {
        try {

            const createdUser = await createUser(newUser);

            setUsers([...users, createdUser])

            setNewUser({
                "name": "",
                "username": "",
                "email": "",
                "address": {
                    "street": "",
                    "suite": "",
                    "city": "",
                    "zipcode": "",
                    "geo": {
                        "lat": "",
                        "lng": ""
                    }
                },
                "phone": "",
                "website": "",
                "company": {
                    "name": "",
                    "catchPhrase": "",
                    "bs": ""
                }
            })

        } catch (error) {
            setError("Failed to create user")
            console.log(error);
        }
    }

    useEffect(() => {

        const fetchUser = async () => {
            try {
                setLoading(false)
                const data = await getUsers();
                setUsers(data)
                setError(null)
            } catch (error) {
                setError("Failed to fetch users")
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchUser();

    }, [])

    if (loading) {
        return <div className="m-30">Loading...</div>
    }

    if (error) {
        return <div className="m-30">{error}...</div>
    }

    const handelDeleTeUser = async(id: number)=>{
          try {
             await deleteUser(id)
             setUsers(users.filter(user => user.id !== id))
          } catch (error) {
            setError("Failed delete user")
            console.log(error);
            
          }
    }


    return (
        <div>
            {/* add new user */}
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4"> Add New user</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
                    <input type="text"
                        placeholder="Name"
                        className="block w-full p-2 rounded-md border border-gray-300  focus:outline-none sm:text-sm focus:border"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <input type="text"
                        placeholder="Username"
                        className="block w-full p-2 rounded-md border-gray-300 focus:outline-none border sm:text-sm"
                        value={newUser.username}
                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    />
                    <input type="email"
                        placeholder="Email"
                        className="block w-full p-2 rounded-md border-gray-300 focus:outline-none border sm:text-sm"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                </div>
                <div>
                    <button onClick={handelCreateUser} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-5 cursor-pointer duration-300">Add User</button>
                </div>
            </div>

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
                                        <button onClick={()=> handelDeleTeUser(user.id) } className="text-red-400 hover:text-red-500 cursor-pointer font-medium bg-red-500/20 px-1 py-0.5 rounded">Delete</button>

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
