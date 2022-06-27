import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AuthForm } from './Authcomponents'

const Login = () => {
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })
    return (
        <AuthForm> 
            <label> Username </label>
            <input placeholder='Enter your Username' value={username} onChange={(event) => setCredentials ({
                username: event.target.value,
                password
            })} />
           
            <label> Password </label>
            <input placeholder='Enter your Password' type= "password" value={password} onChange={(event) => setCredentials({
                username,
                 password: event.target.value,
            })}/>
            <button type ="submit">Loginn</button>
        </AuthForm>
    )
}

export default Login