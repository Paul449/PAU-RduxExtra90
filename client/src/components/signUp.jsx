import { useState } from "react";


export default function signUp(){
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    return(<>
    <div className='sign-form'>
        <h3 id='s'>sign-up</h3>
        <form action=''>
        <label>First Name</label>
        <input type='text'></input>
        <label>Last Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>
        </form>
        <button type='submit'>Go</button>
        <p>forgot password?<a href="">click on here!!!</a></p>
    </div>
    </>)

}