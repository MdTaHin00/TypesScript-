
import { useEffect, useState } from 'react'
import './App.css'
import type { User } from './types/users'
import { fetchUser } from './services/userServices';

function App() {

  const [users,setUsers] = useState<User []>(true)

  const[loading, setLoading] = useState<boolean> (true) ;
  const [error,setError] = useState <string | null > (null)


  useEffect(()=>{

    const loadUser = async () => {
       try {
         setLoading(true) 
         const response = await fetchUser() ;

         if(response.status === 200){
          setUsers(response.data)
         }
       } catch (error) {
         setError(error instanceof Error ? error.message : "An error fetching")
       }finally{
        setLoading(false)
       }
    }

    //!  loadUser function call 
    loadUser()
  },[])

  if(loading){
    return <div className='m-10'>Loading..</div>
  }

    if(error){
    return <div className='m-10'>{error}</div>
  }

  return (
    <>
      <div>
        <h1 className='text-center font-medium text-xl my-5'>All User</h1>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 '>
          {
            users.map((user,index) => (
              <div key={index} className='shadow-lg p-4 hover:scale-110 duration-500 border border-gray-400 rounded'>
                 <h2>{user.id}</h2>
                 <h3>{user.name}</h3>
                 <p>{user.email}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
