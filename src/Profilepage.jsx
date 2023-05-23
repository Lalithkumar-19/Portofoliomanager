import React, { useEffect } from 'react'
import "./profile.css";
import Contact from './Contact';
import Education from './Education';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import VisibleProjects from './Visibleprojects';
import Services from './Services';
import { useDispatch, useSelector } from 'react-redux';
import Myprofile from "./images/myprofile.jpg";

function Profilepage() {
  

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch({type:"Admin",payload:localStorage.getItem("token")});

  },[])

const Admin=useSelector(state=>state.adminpresence);

console.log("admin info",Admin);

const menubar=document.getElementById("show");
window.addEventListener("scroll",()=>{

   menubar.style.display="none";
   document.getElementById('icon').style.display = "block";


})

  function show() {
    document.getElementById("show").style.display = "flex";
    document.getElementById('icon').style.display = "none";
  }

  function close() {
    document.getElementById("show").style.display = "none";
    document.getElementById('icon').style.display = "block";
    document.body.style.overflow = "visible ";
  }









  return (

    <div className='profilemain'>
      <div className='first_box'>

        <div className='backpic' />


        <div className='profile_div'>
          <img id='anime' loading='lazy' src={Myprofile} alt='pf' />
          <div className='about'>
            <span className='name'>  Lalith kumar (Nanda) </span>
            <span className='work'>Junior Fullstack developer | HTML ,CSS5 ,JAVASCRIPT,REACT.| Student at RGUKT IIIT ONGOLE AP</span>
          </div>
          <span id='login_secret'><Link to={"/login"}><button type='button' ></button></Link>  </span>
        </div>

      </div>










      <div className='sec_box'>

        <div className='socialmedia'>
          <div className='skill_section'>
            <span>skills</span>
            <ul>
              <li>Html</li>
              <li>css</li>
              <li>javascript</li>
              <li>react</li>
              <li>react</li>
              <li>node js</li>
              <li>express</li>
              <li>mongodb</li>
              <li>Bootstrap</li>



            </ul>
          </div>
        </div>
        <div className='all_links' id="about">
          <span className='about_headline anime'>About:</span>
          <div className='Aboutmyself anime' id="anime">

            <span>
              I love creating beautiful web applications . I like to solve problems throughout my career.My self lalith kumar.Iam a self taught junior fullstack developer .I have found that working with web technologies and creating something with them is very satisfying than any other things .so i decided to learn and practically applying them.
              I have more curiosity in learning new technologies and update myself .
              About education:
              I completed my PRE UNIVERSITY COURSE(PUC) at IIIT RGUKT ONGOLE CAMPUS.Now iam currently pursuing my first year of B.Tech degree in ELECTRONICS AND COMMUNICATIONS field .I love Electronics as well as Software coding.I got qualified through a CET exam conducted by RGUKT university and entered into IIIT RGUKT ONGOLE.
              I believe that
              To succeed, you must have tremendous perseverance, tremendous will and
              one of the quote which keeps motivates me is Everything is easy when your busy.
            </span>
          </div>


        </div>
      </div>



      <Education />
      <VisibleProjects/>
      <Services/>
      <Contact />
      <span className='menu-icon' onClick={() => show()} id='icon'><DehazeIcon fontSize={"large"} /> </span>
      <div className='slider' id='slider'>

        <div className='menubar' id='show'>
          <li className='icon-2' onClick={() => close()}> < CloseIcon fontSize='large' /></li>

          {
            !Admin&&(
              <>
              <li><a href='#about' style={{scrollBehavior:"smooth"}}>About</a> </li>
              <li><a href="#education" style={{scrollBehavior:"smooth"}}>Eduaction</a> </li>
              <li> <a href="#projects" style={{scrollBehavior:"smooth"}}>Portofolio</a></li>
              <li><a href="services" style={{scrollBehavior:"smooth"}}>Services</a></li>
              <li><a href="contact" style={{scrollBehavior:"smooth"}}>Contact</a></li>
              </>
             
            )

          }

          {
            Admin&&(
              <>
              <li> <Link to={"/uploadnp"} >UPLOAD N.P</Link></li>
              <li> <Link to={"/projects"}>ALL PROJECTS </Link> </li>
              <li> <Link to={"/gate"}> GATE</Link> </li>
              <li> VISIONS</li>
              </>
            )
          }
        

        </div>
      </div>
    </div>
  )
}

export default Profilepage;