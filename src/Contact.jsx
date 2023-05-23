import React from 'react';
import "./contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
function Contact() {
  return (
    <div className='contact' id='contact'>
        
        <h1 className='contact_h1'> Contact Me</h1>
     <p className='contact_head'>    <br/>Here the ways to contact me personally from this website through social media as mentioned below

     </p>
       <div className='contact_ids'>
 MY  INSTAGRAM :  <span  style={{color:"white"}}> <a  style={{color:"white"}} target="blank" href='https://www.instagram.com/lalithkumar_005/'><InstagramIcon/></a></span> 
MY LINKERDIN: <span style={{color:"white"}}><a  style={{color:"white"}} target="blank" href='https://www.linkedin.com/in/lalithkumar005/'><LinkedInIcon/></a></span> 
 MY GITHUB  :<span style={{color:"white"}}><a  style={{color:"white"}} target="blank" href='https://github.com/Lalithkumar-19'><GitHubIcon/></a></span> 
  MY TWITTER: <span style={{color:"white"}}><a  style={{color:"white"}} target="blank" href='https://github.com/Lalithkumar-19'><TwitterIcon/></a></span> 
My E-mail :<span><a href="mailto:lalithdev123@gmail.com"> lalithdev123@gmail.com</a></span>

     </div>

    </div>
  )
}

export default Contact;