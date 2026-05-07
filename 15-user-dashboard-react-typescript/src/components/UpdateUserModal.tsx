import React, { useState } from "react"
import type { User } from "../types/user"

interface UpdateUserModalProps {
    isModalOpen: boolean,
    closeUpdateModel: () => void,
    user: User,
    handelUpdateUser: (id: number, updateData: Partial<User>) => Promise<void>
}

function UpdateUserModal({ isModalOpen, closeUpdateModel, user, handelUpdateUser }: UpdateUserModalProps) {

    const [fromData, setFromData] = useState({
        name: user.name,
        username: user.username,
        email: user.email
    })

    const handelSubmit = async (e: React.FormEvent ) => {
        e.preventDefault();
        await handelUpdateUser(user.id , fromData)
        closeUpdateModel()
    }
    return (
        <div className="fixed inset-1 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">Update User</h2>
                        <button
                            onClick={() => closeUpdateModel()}
                            className="text-gray-500 hover:text-red-400 font-bold cursor-pointer">x</button>
                    </div>

                    <form className="space-y-4" onSubmit={handelSubmit}>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text"
                                name="name"
                                value={fromData.name}
                                onChange={(e) => setFromData({...fromData , name:e.target.value})}
                                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-md focus:outline-none border"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text"
                                name="username"
                                value={fromData.username}
                                onChange={(e) => setFromData({...fromData, username:e.target.value})}
                                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-md focus:outline-none border"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                name="email"
                                value={fromData.email}
                                onChange={(e) => setFromData({...fromData, email: e.target.value})}
                                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-md focus:outline-none border"
                            />
                        </div>

                        <div className="space-x-2">
                            <button type="submit" className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded ">Update</button>
                            <button onClick={closeUpdateModel} className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-500">Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserModal
