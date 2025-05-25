import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

const submitHandler = (e)=>{
   
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Email",email);
    console.log("passsword",password);
    handleLogin(email,password);
    alert("Check Console for credentials");
    
    setEmail("");
    setPassword("");
}

  return (
    <div className='flex items-center justify-center h-screen w-screen '>
        
        <div className='border-1 border-emerald-600 rounded-xl shadow-lg p-20'>
            <form
            onSubmit = { (e)=> {
                submitHandler(e);
            }}
            
            className='flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-2xl md-10 text-bold'>EMS-Employee Management System</h2>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email"  placeholder="Enter Your Email" /> 
                <input  value={password} onChange={(e)=> {setPassword(e.target.value)}} className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='text-white  mt-5 outline-none border-none bg-emerald-600  border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log In</button>
            </form>
        </div>
    </div>
  )                                 
}

export default Login