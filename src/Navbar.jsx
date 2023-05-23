import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom"

function Navbar() {






    return (
        <div className='navbar'>

            <p className='name'>Lalith kumar</p>
            <ul>


                <li> <Link to={"/projects"}>All Projects</Link> </li>
                <li> <Link to={"/uploadnp"}>Upload N.p</Link> </li>
                <li><Link to={"/login"}>Login again</Link> </li>
                <li> <Link to={"/"}> profile</Link></li>
                  <li><Link to="/visibleprojects">Visible Projects</Link></li>
            </ul>
          



        </div>
    )
}

export default Navbar