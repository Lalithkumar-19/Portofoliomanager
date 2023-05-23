import React from 'react'
import "./card.css";
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { useState } from 'react';

function Card({ img, content, code, view, id,delimg,skills }) {

  const skiillsArr=skills&&skills.split(" ");
  
  const [deleted,setDeleted]=useState(false);
  const dispatch = useDispatch();



async function deleteone(id,img,token) {
console.log("delete func is called")
     await fetch("https://lalithportofolioapi.onrender.com/deleteitem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id,img,token}),

    }).then((res) => {
      console.log(res.status,"response status ");
      if(res.ok){
        setDeleted(true);
        dispatch({type:"Deletedone",payload:id});
        swal("Sucessfully Done","Your project is successfully deleted","success");
        console.log("deleted successfully");
       
      }else{
        swal("Ooops!","You don't have access to delete","error");
        setDeleted(false);
        console.log("not deleted !!!")
      }
   
    }).catch(err=>{
      if(err)throw err;
      swal("Internal error","internanl error is occured ,try again","error");
    })
   console.log(res,"res of delete");
  }



    function deletedmessage(id,img){
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this project?",
        icon: "warning",
        dangerMode: true,
      })
      .then(async(willDelete) => {
        if (willDelete) {
          let token=localStorage.getItem('token')?localStorage.getItem('token'):null;
          await deleteone(id,img,token);
        
        }
      });
  }

console.log("deleted status is",deleted);





  return (
    <div className='cart'>

      <img className='cart_img' src={img} alt='img' />
      <div className='cart_content'>
        {content}
      </div>
      <div className='cart_footer'>
        {
          skiillsArr&&skiillsArr.map(skill=>{
        return(
          <>
        <span className='technologies_used'>{skill}</span>
          
          </>
        )
      })
        }
       

      </div>
      <div className='cart_buttons'>
        <button><a href={view} target='_blank'>View</a></button>
        <button><a href={code} target='_blank'>Code</a></button>
        <button onClick={() =>  deletedmessage(id,delimg ) }>Delete</button>
      </div>


    </div>
  )
}

export default Card;
