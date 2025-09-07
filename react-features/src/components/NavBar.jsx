import React from 'react';
import {Link} from 'react-router';
const NavBar = () => {
  return (
    <nav className='flex justify-between p-5 bg-amber-100'>
        <h2>Logo</h2>
        <ul className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="pricing">Pricing</Link>
        </ul>
    </nav>
  )
}

export default NavBar