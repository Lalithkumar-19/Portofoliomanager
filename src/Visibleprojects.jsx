import React from 'react'
import Card from './Card';
import "./visibleprojects.css";
import { useSelector } from 'react-redux';


function VisibleProjects() {

const posts=useSelector(state=>state.allprojects);

  return (
    <div className="projects2" id="projects">
      
      <h1> My Projects </h1>
      <div className='code_gif'>
      <img src='https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif' alt='coding gif'/>
      </div>
  <div className='row'>
  {

posts ? (posts.map(per => (
  <Card key={per._id} img={'https://lalithportofolioapi.onrender.com/'+per.img} content={per.content} code={per.code} view={per.view} id={per._id} delimg={per.img} skills={per.skills} />


))) : (
  <>
    <h1> No posts fetched </h1>
  </>
)
}
</div>
    </div>
  )
}

export default VisibleProjects;