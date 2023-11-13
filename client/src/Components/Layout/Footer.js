import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer bg-dark  text-light  p-3'>
        <h4 className='text-center'>All Right Reserved &copy; Vishal Keshari</h4>
        <p className='text-center ml-3'>
          <Link to="/about">About</Link>
          |
          <Link to="/contactus">Contact</Link>
          |
          <Link to="/policy">Privacy Policy</Link>
        </p>
    </div>

    </>
   
  )
}

export default Footer
