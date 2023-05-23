import React from 'react'
import Card from './Card'
import "./projects.css";
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
function Allprojects() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.allprojects);
  useEffect(() => {
    setTimeout(async() => {
     await fetch('https://lalithportofolioapi.onrender.com/cart').then(res => {
        res.json().then(posts => {
          console.log("posts are ",posts.img);
          dispatch({type:"putprojects",payload:posts})
          
        })
      })
    }, 1000)



  }, []);



  if (posts === null || posts == "") {
    return (
      <>
      <Navbar/>
      
        <h1>All projects:</h1>
        <div className='projects'>

          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>

          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>


          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>


          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>


          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>
          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>
          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>
          <div className='skeleton_div'>
            <SkeletonTheme baseColor='grey' highlightColor='#444'>
              <p><Skeleton style={{ width: "100%", height: "150px", borderRadius: "5px" }} /></p>
              <p><Skeleton count={5} /></p>

            </SkeletonTheme>
            <SkeletonTheme baseColor='grey' highlightColor='yellow'>
              <div className='skeleton_btn_div'>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>
                <p><Skeleton style={{ width: "50px" }} /></p>

              </div>
            </SkeletonTheme>

          </div>

        </div>




      </>
    )
  }




  return (
    <>
       <Navbar/>
      <h1> All projects in Portofolio </h1>


      <div className='projects'>






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


    </>

  )


}

export default Allprojects;