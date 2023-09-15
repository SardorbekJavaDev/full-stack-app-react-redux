import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from "../constants";
const Navbar = () => {
  return (
    <div class="container pt-3 d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to={'/'}>
        <img width={"150px"} src={logo} alt="" />
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} className='me-3 py-2 link-body-emphasis text-decoration-none'>
            Login
        </Link>
        <Link to={'/register'} className='me-3 py-2 link-body-emphasis text-decoration-none'>
            Register 
        </Link>
      </nav>
    </div>
  )
}

export default Navbar