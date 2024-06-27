import {useState} from 'react'

 export default function Login(){

    return(<>
    <div className='Login-form'>
        <h3 id='L'>Login</h3>
        <form action=''>
        <label>Username</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'></input>
        </form>
        <button type='submit'>Go</button>
        <p>forgot password?<a>click on here!!!</a></p>
    </div>
    </>)

}