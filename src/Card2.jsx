import React from 'react'
import "./card2.css";

function Card2({img,content,code,view}) {
  return (
    <div className='cart'>
   
       <img className='cart_img' src={img} alt='img'/>
<div className='cart_content'>
{content}
</div>
     <div className='cart_buttons'>
         <button> <a href={view} target='_blank'>View</a></button>
         <button> <a href={code} target='_blank'>Code</a></button>
       </div>  

        
    </div>
  )
}

export default Card2;