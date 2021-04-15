import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/">Pagina 1</NavLink>    
                    <NavLink to="/pagina2">Pagina 2</NavLink>    
                    <NavLink to="/pagina3">Pagina 3</NavLink>    
                </ul>
            </nav>
        </header>
    )
}

export default Header
