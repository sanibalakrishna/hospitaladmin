import React,{useState} from 'react'
import loginbackground from '../assets/loginbackground.gif'
import {HiOutlineMail,HiOutlineLockOpen,HiOutlineEye,HiOutlineEyeOff} from 'react-icons/hi'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordtype,setPasswordtype] = useState("password");

    const TogglePassword = () =>{
        if(passwordtype=="password")
        {
            setPasswordtype("text");
        }
        else{
            setPasswordtype("password");
        }
    }
    const handleSignIn = () =>{
        console.log({email,password})
    }
  return (
    <div className='flex flex-col h-[98%] w-[99%] bg-white rounded-3xl md:flex-row'>
        <div className='w-full   bg-[#0198A5] flex items-center rounded-3xl md:h-full'>
            <img src={loginbackground} />
        </div>
        <div className='w-full  flex flex-col items-center justify-center gap-10 '>
            <div >
                <h1 className='text-center text-4xl font-bold'>Welcome!</h1>
                <p>Please enter your details</p>
            </div>
            <div className='flex flex-col gap-10 w-[70%]'>
                <div >
                <fieldset class={`border-2 hover:border-[#0198A5] rounded-lg  ${(email!="")&& 'border-[#0198A5]'}`}>
                  <legend class="ml-2.5 text-[#0198A5]" >Email</legend>
                  <div className='flex w-full gap-2 px-2'>
                  <HiOutlineMail size={20} className='text-[#0198A5]'/>
                  <input type="email" class="outline-none pl-2 w-full" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                
                 </fieldset>
                </div>
                <div>
                 <fieldset class={`border-2 hover:border-[#0198A5] rounded-lg  ${(password!="")&& 'border-[#0198A5]'}`}>
                  <legend class="ml-2.5 text-[#0198A5]">Password</legend>
                  <div className='flex w-full gap-2 px-2'>
                  <HiOutlineLockOpen size={20} className='text-[#0198A5]'/>
                  <input type={passwordtype} class="outline-none w-full" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  {(passwordtype=="password")?<HiOutlineEye size={20} className='text-[#0198A5]' onClick={TogglePassword}/>:<HiOutlineEyeOff size={20} className='text-[#0198A5]' onClick={TogglePassword}/>}
                 </div>
                 </fieldset>
                
                </div>
                <h1 className='text-right'>forgot password?</h1>
                <button className='bg-[#0198A5] rounded-lg h-10 text-white' onClick={handleSignIn}>sign in</button>

            </div>
            
        </div>

    </div>
  )
}

export default Login