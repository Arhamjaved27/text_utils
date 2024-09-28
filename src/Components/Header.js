import React from 'react'
import '../App.css';


export default function Header() {
  return (
    <div className='contaner bg-black p-3 d-flex align-items-center justify-content-between ps-5 pe-5' style={{height:'80px'}}>
      <h1 className='text-white me-5'>Arham</h1>
      
       <nav className='pt-3 w-25'>
        <ul className='d-flex justify-content-around text-white list-unstyled'>
          <li> <a href="/" className='link-cl active'> Home </a></li>
          <li> <a href="/" className='link-cl'> About </a></li>
          <li> <a href="/" className='link-cl'> Projects </a></li>
          <li> <a href="/" className='link-cl'> Services </a></li>
        </ul>
       </nav>
       <div id='search' className='d-flex align-items-center justify-content-end' style={{width:'70%'}}>
        <input type='search' id='srch'/>
        <button className='ms-2 btn bg-high pe-4  ps-4'>Search</button>
       </div>

    </div>
  )
}
