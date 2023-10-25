import React, { useState } from 'react'
import'./Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [un,setUn] =useState('');
const [pwd,Setpwd] =useState('');
const [error,SetError]=useState(false);
const navigate=useNavigate();

const readusername =(event) =>{
    setUn(event.target.value);
    console.log(un)
}
const readpassword = e =>{
    Setpwd(e.target.value);
}

const readalldata=(event) =>{
 event.preventDefault();
 if(un.trim ()==='' || pwd.trim ()==='')
 {
SetError(true);

 }
 else
 {
SetError(false);
navigate('/home')
 }

}



    return (
    <form>

    
    <h1 className='aa'>SIGN-IN</h1>
USERNAME:<input type="text" onChange={readusername}/><br/>

PASSWORD:<input type="password"  onChange={readpassword}/><br/>

<button type="submit" onClick={readalldata}>LOGIN</button>
{error && 'unknown'}
    </form>

    )
}

export default Login