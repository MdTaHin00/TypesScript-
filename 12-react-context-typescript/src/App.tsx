
import './App.css'
import RefarChildMethod from './components/RefarChildMethod'
import { useTheme } from './context/ThemeContext'

function App() {
  const{theme,toggleTheme} = useTheme()

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen dark:bg-gray-800 dark:text-white'>
        <button onClick={toggleTheme} className='bg-sky-500 text-white px-5 py-2 rounded text-xl hover:bg-sky-600'>Toggle Mode</button>
        <p>Mode Name : {theme} </p>
        <RefarChildMethod>
          <h2>Hello all</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis nihil vitae dolores voluptas tenetur tempore sit nostrum facere molestiae!</p>
          
        </RefarChildMethod>
      </div>

    </>
  )
}

export default App
