
import { useEffect, useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import From from './components/From';

function App() {

  const name = "Alice";
  const age = 22;

  //!  <number> -> ai useState ar value number hova 
  const [count, setCount] = useState<number>(0);

  //! <{}> -> ai useStatus ar value object hoy name and email asva 
  const [user, setUser] = useState<{ name: string, email: string } | null>(null)

  useEffect(() => {

    setUser({
      name: "Monk",
      email: "monk@gmail.com"
    })

  }, [])
  return (
    <>
      <div>
        <h1>TypeScript use for React.js</h1>
        <Greeting username={user?.name} email={user?.email} age={age} />

        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={{marginTop:"30px"}}>
        <From/>
      </div>
    </>
  )
}

export default App
