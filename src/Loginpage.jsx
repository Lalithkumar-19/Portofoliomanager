import React, { useState } from 'react'
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Loginpage() {
   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const adminpresence=useSelector(state=>state.adminpresence);
  console.log("adminpresence",adminpresence);


  function notification() {
    toast.error('Your not my Owner ,skip to see what inside?', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function notification1() {
    toast.error('please provide all details correctly !', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }



  const emailregex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
  const passwordregex = new RegExp("[a-zA-Z0-9]{10,}");


  async function login(ev) {
    ev.preventDefault();
    if ((emailregex.test(email)) && (passwordregex.test(password))) {

       await fetch('https://lalithportofolioapi.onrender.com/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      }).then(res => {
        res.json().then(async re =>{
          if(re){
           localStorage.setItem("token",re.token) 
            
          }
     

          
         
        }
        
        )
        if (res.status === 200) {
          setRedirect(true);
          
          navigate("/");
        }
        else {
          notification();
          setRedirect(false);


        }
      })

    }
    else {
      notification1();
    }
    if (redirect) {
      navigate("/");
    }


  }




  return (

    <div className='loginmain'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className='login_box'>
        <h1 className='head'> boss login</h1>
        <form onSubmit={login} autoComplete='Off'>

          <label> Email</label>
          <input
            id='firstinput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
            placeholder='Boss enter your email'
            autoComplete='off'
            about='ur missing the regex'
            required />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            pattern='[a-zA-Z0-9]{4,}'
            autoComplete='off'
            placeholder='Boss your password'
            required />
          <span ><button className='login_button' type='submit' >CHECK</button></span>
        
        </form>
        <span className='skip_button'> <button onClick={()=>navigate("/")}>skip</button> </span> 
      </div>



    </div>
  )
}

export default Loginpage;