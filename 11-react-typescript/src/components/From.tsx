import React, { useState } from "react"

function From() {

    //!  <string> -> ai useState ar value string hova
    const [email, setEmail] = useState<string>("")

    const [password, setPassword] = useState<string>("")

    const handelSubmit =(e : React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();

     alert(`Hi, ${email}! Login successfully`)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>

                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email"
                        name="email" value={email}
                        onChange={(e) => e.target.value}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password"
                        name="password" value={password}
                        onChange={(e) => e.target.value}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default From
