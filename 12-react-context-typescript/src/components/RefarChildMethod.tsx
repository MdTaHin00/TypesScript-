import type React from "react"

//! children method call defiant

type BaxProp ={
    children : React.ReactNode
}

function RefarChildMethod({children} : BaxProp) {
  return (
    <div className="p-4 m-20 italic border border-gray-400">
        {children}
    </div>
  )
}

export default RefarChildMethod
