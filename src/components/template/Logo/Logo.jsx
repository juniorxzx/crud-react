import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <p>CRUD EM REACT</p>
        </Link>
    </aside>