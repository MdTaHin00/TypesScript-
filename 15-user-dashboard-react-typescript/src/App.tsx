
import './App.css'
import UserList from './components/UserList'

function App() {

  return (
  <>
    <div className='min-h-screen bg-gray-100 py-8'>
        <div className='max-w-7xl px-4 mx-auto sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-medium text-gray-900 text-center'>User Dashboard</h1>
          
          {/* UserList import*/}
          <UserList/>
        </div>
    </div>
  </>
  )
}

export default App
