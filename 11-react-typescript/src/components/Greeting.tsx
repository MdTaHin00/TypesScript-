
interface GreetingPage {
    username: string,
    age: number
}


function Greeting({username,age,email} : GreetingPage) {
    return (
        <div>
            <div>
                <h4>hello {username}! i am {age} years old.</h4>
                <p> User Email : {email}</p>
            </div>
        </div>
    )
}

export default Greeting
