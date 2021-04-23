import React from 'react'
import { useLocation } from 'react-router'

export const UserStorage = React.createContext()

const UserContext = (props) => {
    

    
    const animationRoutes = {
        mostrar: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }, 
        esconder: {
            y: '100%',
            opacity: 0,
            transition: {
                duration: 3
            }
        }, 
        inicial: {
            y: '-100%',
            opacity: 0,
        }
    }

    return (
        <UserStorage.Provider value={{animationRoutes}}>
            {props.children}
        </UserStorage.Provider>
    )
}

export default UserContext
