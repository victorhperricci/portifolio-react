import React, { useContext } from 'react'
import { UserStorage } from '../../../Context/UserContext'
import { SobreContainer } from './style'


const Sobre = () => {
    const { animationRoutes } = useContext(UserStorage)
    return (
        <SobreContainer variants={animationRoutes} animate="mostrar" initial="inicial" exit="esconder">
            <h1 style={{color: 'white'}}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
        </SobreContainer>
    )
}

export default Sobre
