import React from 'react'

const Nav = () => {
  return (
    <nav className="nav">
        
        <a href='/'className='site-title'>Tiny.ai</a>
        <ul className="pages">
            <li>
            <a href='/features' className='active'>Features</a>
            </li>
            <li>
                <a href='/Pricing'>Pricing</a>
            </li>
            <li>
            <a href='/'>Resources</a>
            </li>
        </ul>
        <ul className="login">
        <li>
            <a href='/'>Login</a>
            </li>
            <li>
            <a href='/'>Sign Up</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav