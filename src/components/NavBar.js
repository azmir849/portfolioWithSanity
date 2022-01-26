import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from 'react-social-icons'
import toggleButton from '../img/menu.png'
export default function Navbar() {
  return (
    // <header className="bg-black">
    //   <div className="container mx-auto flex justify-between">
    //     <nav className="inline-flex">
    //       <NavLink
    //         to="/"
    //         exact
    //         activeClassName="text-white"
    //         className="inflex-flex items-center py-3 px-3 mr-4 mt-2 ml-5 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest "
    //       >
    //         AH Naeem
    //       </NavLink>
    //       <NavLink
    //         to="/blog"
    //         activeClassName="text-red-100 bg-red-700"
    //         className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
    //       >
    //         Blog posts
    //       </NavLink>
    //       <NavLink
    //          activeClassName="text-red-100 bg-red-700"
    //         to="/project"
    //         className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
    //       >
    //         Projects
    //       </NavLink>
    //       <NavLink
    //          activeClassName="text-red-100 bg-red-700"
    //         to="/about"
    //         className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
    //       >
    //         About me!
    //       </NavLink>
    //     </nav>

    //     <div className="inline-flex py-3 px-3 my-3">
    //       <SocialIcon url="https://github.com/" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
    //       <SocialIcon url="https://www.linkedin.com/" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
    //       <SocialIcon url="https://www.google.com" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
    //     </div>
    //   </div>
    // </header>

    <nav class="navbar sticky-top navbar-expand-lg navbar-black bg-black">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{color: "red"}}> <img
            alt=''
            className='absolute object-cover'
             src={toggleButton} />
          </span>
    </button>
   
    <NavLink
             to="/"
             exact
             activeClassName="text-red-100"
             className="inflex-flex items-center py-3 px-3 mr-4 mt-2 ml-5 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest "
           >
           AH Naeem
           </NavLink>
           <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink
             to="/blog"
             activeClassName="text-red-100 bg-red-700"
             className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
          >
             Blog posts
           </NavLink>
           <NavLink
              activeClassName="text-red-100 bg-red-700"
             to="/project"
             className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
          >
             Projects
         </NavLink>
         <NavLink
              activeClassName="text-red-100 bg-red-700"
             to="/about"
             className="inline-flex items-center py-3 px-3 my-3 rounded text-red-200 hover:text-green-800"
           >
             About me!
           </NavLink>
      </ul>
      <form class="d-flex">
      <SocialIcon url="https://github.com/" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
          <SocialIcon url="https://www.linkedin.com/" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
           <SocialIcon url="https://www.google.com" className="mr-4" target='_blank' fgColor='#fff' style={{height:35, width:35}}/>
      </form>
    </div>
  </div>
</nav>


  );
}
