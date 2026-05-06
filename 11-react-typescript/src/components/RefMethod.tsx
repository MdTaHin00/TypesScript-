import { useRef } from 'react';
function RefMethod() {

    const RefInput = useRef<HTMLInputElement | null >(null)
    //! useRef ar moda current value pai
    //* jmon RefInput.current

    const handelClick = ()=>{
        RefInput.current?.focus()
    }


  return (
    <div style={{marginTop:"50px"}}>
         <input ref={RefInput} type="text" placeholder='Enter you name'/>
         <button onClick={handelClick} style={{margin:"10px"}}>Focus Me!</button>
    </div>
  )
}

export default RefMethod
