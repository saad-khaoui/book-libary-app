import React from 'react'

const Navbar = () => {
    return (
    <div className="navbar">
        <span className="logo">
            UBOOK 
            <i class="fa-regular fa-bookmark"></i>
        </span>
        
        <ul>
            
            <li><a href="">self-help</a></li>
            <li><a href="">crime</a></li>
            <li><a href="">science</a></li>
            <li><a href="">thriller</a></li>
            <li><a href="">bussiness</a></li>

        </ul>
    </div>

    )
}

export default Navbar