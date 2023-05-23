import React, { useState } from 'react'
import "./upload.css";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

function Uploadpage() {
  const token =localStorage.getItem("token");
  console.log("token is",typeof(token));

  function notification() {
    toast.error('Provide Details in all fields', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }

  function notification_of_uploadsuccess() {
    toast.success('Uploaded successfully!!', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  }


  const [code, setCode] = useState("");
  const [view, setview] = useState("");
  const[skills,setSkills]=useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
 
  const image_backdrop=document.getElementById("image_backdrop");
  if(file[0]){
    let source=URL.createObjectURL(file[0]);
    image_backdrop.src=source;

  }

console.log("skills",skills.toLocaleUpperCase);


  const data = new FormData;
  data.set("code", code);
  data.set("view", view);
  data.set("content", content);
  data.set("file", file[0]);
  data.set("token", token);
  data.set("skills",skills);
  console.log("token in form data:--",);
  async function upload(ev) {
    ev.preventDefault();
    if ((code != '') && (view != "") && (content != "") && (file.length > 0)) {

      const response = await fetch("https://lalithportofolioapi.onrender.com/card", {
        body: data,
        method: "POST",


      })
      if (response.status === 200) {
        notification_of_uploadsuccess();
        setCode("");
        setview("");
        setContent("");
        setFile("")
        setSkills("");
        file[0]=" ";
        setview("");

      }



      else {
        swal("Ooops!", "you don't have access to post", "error");
      }
    }
    else {
      notification();
    }
  }
  return (
    <div className='uploadmain'>
      <Navbar />
      <ToastContainer
        position="bottom-left"
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

      <nav>
        <marquee direction="right" > <h2> Boss upload a great project to boost your resume and portfolio ....Have a great day !!...</h2></marquee>
      </nav>

      <div className='middle_part'>
        <div className='right'>
          <h1> Upload a new project into portfolio</h1>
          <form>
            <label> code path:</label>
            <input
              value={code}
              title='Please enter the valid code path'
              onChange={(e) => setCode(e.target.value)}
              placeholder='Github link'
              type='text' required />
            <label> VIEW path:</label>
            <input
              value={view}
              onChange={(e) => setview(e.target.value)}
              title='please match the pattern'
              placeholder='website link'
              type='text' required />
            <label>About project</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required ></textarea>
            <label>Skills Used:</label>
             <textarea className='skills_section' id="skiils_Section"  value={skills} onChange={(e)=>setSkills(e.target.value)} required />
            <label> Back drop</label>
            <img id="image_backdrop" src="data:image/png;base64,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" alt="backdrop pic"/>
             <input type='file' onChange={(e) => setFile(e.target.files)} required />
            <button type='submit' onClick={upload}> Upload</button>

          </form>


        </div>
      </div>




    </div>
  )
}

export default Uploadpage;