import React from 'react'
import './Login.css'
import {useState} from 'react';
import {Link} from "react-router-dom";
//import { auth } from './firebase';

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const signIn = e =>{
        e.preventDefault()
        
        //some fancy firebase 

    }
    const register = e =>{
        e.preventDefault()

        //do some fancy firebase

     {/* auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) =>{
            console.log(auth);
          })
          .catch(error =>alert(error.message))

        */} 


    }


  return (
    <div className='login'>
        <Link to="/">
           <img  className='login_logo' src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" alt=''/> 
        </Link>
        
        <div className='login_container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e =>setEmail(e.target.value)}/>


                <h5>Password</h5>
                <input type='password' value={password} onChange=
                {e => setPassword(e.target.value)} />

                <button type="submit" onClick={signIn}
                className='login_signInBtn'>Sign In
                </button>


            </form>

            <p>By signing-in you agree to AMAZON_FAKE CLONE conditions of use & Sale.
                Please see our privacy Notice,our cookies Notice and our 
                Interest-Based Ads Notice
            </p>
           
           <button type="submit" onClick={register}
               className='login_register'>Create your Amazon account
           </button>



        </div>


        
    </div>
  )
}
